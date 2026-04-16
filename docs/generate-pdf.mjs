import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read the markdown source
const md = readFileSync(resolve(__dirname, "client-discovery-brief-think-creative.md"), "utf8");
const css = readFileSync(resolve(__dirname, "brief-pdf-styles.css"), "utf8");

// Read logo as base64 for embedding
const logoPath = resolve(__dirname, "..", "public", "Cavifinal.png");
const logoBase64 = readFileSync(logoPath).toString("base64");
const logoDataUri = `data:image/png;base64,${logoBase64}`;

// Simple markdown → HTML (handles the subset we use)
function mdToHtml(src) {
  let html = src;

  // Normalize line endings
  html = html.replace(/\r\n/g, "\n");

  // --- Fenced code blocks (``` ... ```) ---
  html = html.replace(/```[^\n]*\n([\s\S]*?)```/g, (_, code) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre><code>${escaped}</code></pre>`;
  });

  // --- Tables ---
  html = html.replace(
    /^(\|.+\|)\n(\|[\s:|-]+\|)\n((?:\|.+\|\n?)+)/gm,
    (_, headerRow, _sep, bodyRows) => {
      const headers = headerRow
        .split("|")
        .slice(1, -1)
        .map((c) => `<th>${inlineFormat(c.trim())}</th>`)
        .join("");
      const rows = bodyRows
        .trim()
        .split("\n")
        .map((row) => {
          const cells = row
            .split("|")
            .slice(1, -1)
            .map((c) => `<td>${inlineFormat(c.trim())}</td>`)
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("\n");
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    }
  );

  // --- Blockquotes (handle nested) ---
  const lines = html.split("\n");
  const out = [];
  let inBlockquote = false;
  let bqBuffer = [];

  function flushBq() {
    if (bqBuffer.length) {
      const inner = bqBuffer.join("\n");
      // Recursively handle nested blockquotes
      const processed = inner.replace(/^> /gm, "");
      if (processed.match(/^>/m)) {
        out.push(`<blockquote>${mdToHtmlInner(processed)}</blockquote>`);
      } else {
        out.push(`<blockquote>${mdToHtmlInner(processed)}</blockquote>`);
      }
      bqBuffer = [];
    }
    inBlockquote = false;
  }

  for (const line of lines) {
    if (line.startsWith("> ") || line === ">") {
      inBlockquote = true;
      bqBuffer.push(line.replace(/^> ?/, ""));
    } else {
      if (inBlockquote) flushBq();
      out.push(line);
    }
  }
  if (inBlockquote) flushBq();

  html = out.join("\n");

  // --- HTML pass-throughs (div, img tags) ---
  // Already HTML, keep as-is. Replace img src with data URI for logo.
  html = html.replace(
    /<img\s+src="[^"]*Cavifinal\.png"([^>]*)>/g,
    `<img src="${logoDataUri}"$1>`
  );

  // --- Headings ---
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // --- Horizontal rules ---
  html = html.replace(/^---$/gm, "<hr>");

  // --- Paragraphs (lines that aren't tags, headings, or empty) ---
  html = html.replace(
    /^(?!<[a-z/]|$|\s*$)(.+)$/gm,
    (_, content) => `<p>${inlineFormat(content)}</p>`
  );

  // Clean up excessive whitespace
  html = html.replace(/\n{3,}/g, "\n\n");

  return html;
}

// Process inner content (for blockquotes)
function mdToHtmlInner(src) {
  let html = src;

  // Tables inside blockquotes
  html = html.replace(
    /^(\|.+\|)\n(\|[\s:|-]+\|)\n((?:\|.+\|\n?)+)/gm,
    (_, headerRow, _sep, bodyRows) => {
      const headers = headerRow
        .split("|")
        .slice(1, -1)
        .map((c) => `<th>${inlineFormat(c.trim())}</th>`)
        .join("");
      const rows = bodyRows
        .trim()
        .split("\n")
        .map((row) => {
          const cells = row
            .split("|")
            .slice(1, -1)
            .map((c) => `<td>${inlineFormat(c.trim())}</td>`)
            .join("");
          return `<tr>${cells}</tr>`;
        })
        .join("\n");
      return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    }
  );

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // HR
  html = html.replace(/^---$/gm, "<hr>");

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>");

  // Paragraphs
  html = html.replace(
    /^(?!<[a-z/]|$|\s*$)(.+)$/gm,
    (_, content) => `<p>${inlineFormat(content)}</p>`
  );

  return html;
}

// Inline formatting: bold, italic, inline code
function inlineFormat(text) {
  if (!text) return "";
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

const bodyHtml = mdToHtml(md);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>${css}</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;

// Launch Puppeteer and generate PDF
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(fullHtml, { waitUntil: "networkidle0" });

const pdfPath = resolve(__dirname, "client-discovery-brief-think-creative.pdf");
await page.pdf({
  path: pdfPath,
  format: "Letter",
  printBackground: true,
  margin: { top: "0.6in", bottom: "0.6in", left: "0.7in", right: "0.7in" },
  displayHeaderFooter: true,
  headerTemplate: "<span></span>",
  footerTemplate: `
    <div style="width:100%;text-align:center;font-size:8px;color:#475569;font-family:system-ui,sans-serif;padding:0 0.7in;">
      CAVI COLLECTIVE &bull; Client Discovery Brief: Think Creative Agency &bull; Internal &amp; Confidential &nbsp;|&nbsp; www.cavivaultagents.io
      <span style="float:right;"><span class="pageNumber"></span> / <span class="totalPages"></span></span>
    </div>
  `,
});

await browser.close();
console.log("PDF generated:", pdfPath);
