export interface SignatureData {
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Logo URL for email signatures.
 * Uses the Vercel deployment URL where the image is hosted.
 * Once www.cavivaultagents.io points to Vercel, update to:
 *   https://www.cavivaultagents.io/Cavifinal.png
 */
export const LOGO_URL_REMOTE =
  "https://cavi-collective-site.vercel.app/Cavifinal.png";
/** Local logo path for dev preview. */
export const LOGO_URL_LOCAL = "/Cavifinal.png";

export function generateSignatureHtml(
  data: SignatureData,
  options?: { logoUrl?: string; showDisclaimer?: boolean }
): string {
  const logoUrl = options?.logoUrl ?? LOGO_URL_REMOTE;
  const showDisclaimer = options?.showDisclaimer ?? true;

  const name = data.fullName.trim()
    ? escapeHtml(data.fullName.trim())
    : '<span style="color:#bbbbbb">Your Name</span>';
  const title = data.jobTitle.trim()
    ? escapeHtml(data.jobTitle.trim())
    : '<span style="color:#bbbbbb">Your Title</span>';
  const phone = data.phone.trim()
    ? escapeHtml(data.phone.trim())
    : '<span style="color:#bbbbbb">+1-000-000-0000</span>';
  const email = data.email.trim()
    ? escapeHtml(data.email.trim())
    : "you@cavivaultagents.io";
  const mailto = data.email.trim()
    ? escapeHtml(data.email.trim())
    : "you@cavivaultagents.io";

  // MSO = Microsoft Office (Outlook). Outlook uses Word's renderer which
  // ignores CSS border:none and draws its own table gridlines. The only
  // way to kill them is MSO-specific style blocks + mso-table-* properties.
  const T = 'cellpadding="0" cellspacing="0" border="0"';
  const MSO_TABLE = "mso-table-lspace:0pt;mso-table-rspace:0pt;";
  const B = "border:0 none;border-collapse:collapse;border-spacing:0;";
  const tbl = (extra: string) => `${T} style="${MSO_TABLE}${B}${extra}"`;
  const td0 = (extra: string) => `style="border:0 none;${extra}"`;
  const tr0 = 'style="border:0 none;"';

  const disclaimerRow = showDisclaimer
    ? `<tr ${tr0}><td ${td0("background-color:#ffffff;padding:0 24px 18px 24px;border-top:1px solid #e0e0e0 !important;")} bgcolor="#ffffff">
  <p style="font-size:11px;font-style:italic;color:#999999;padding-top:12px;text-align:center;letter-spacing:0.2px;margin:0;line-height:1.4;">This email and any attachments are confidential. If you are not the intended recipient, please notify the sender and delete this message.</p>
</td></tr>`
    : "";

  return `<!--[if mso]><style>table,tr,td,th{border:0 !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;}</style><![endif]-->
<style>table,tr,td,th{border:0 none !important;}</style>
<table ${tbl("background-color:#ffffff;max-width:600px;width:600px;font-family:Arial,Helvetica,sans-serif;")} bgcolor="#ffffff">
<tr ${tr0}><td ${td0("background-color:#ffffff;padding:0;")} bgcolor="#ffffff">
<table ${tbl("")} width="100%"><tr ${tr0}>
<td ${td0("background-color:#ffffff;padding:24px 20px 24px 24px;vertical-align:middle;width:180px;")} bgcolor="#ffffff">
  <a href="https://www.cavivaultagents.io" style="text-decoration:none;"><img src="${logoUrl}" alt="Cavi Vault Agents" width="160" height="160" style="display:block;border:0;outline:0;width:160px;height:160px;" /></a>
</td>
<td ${td0("background-color:#ffffff;padding:24px 24px 24px 0;vertical-align:middle;")} bgcolor="#ffffff">
  <p style="font-size:20px;font-weight:700;color:#2b2b3d;line-height:1.2;margin:0 0 2px 0;padding:0;">${name}</p>
  <p style="font-size:13px;font-weight:400;color:#555555;margin:0 0 10px 0;padding:0;">${title}</p>
  <table ${tbl("")}><tr ${tr0}><td ${td0("background-color:#d4ff00;width:40px;height:3px;font-size:0;line-height:0;overflow:hidden;padding:0;margin:0;")} bgcolor="#d4ff00"></td></tr></table>
  <p style="font-size:13px;font-weight:600;color:#5b4ba8;margin:10px 0 6px 0;padding:0;">Cavi Vault Agents</p>
  <p style="font-size:12px;color:#555555;margin:0 0 2px 0;padding:0;line-height:1.5;">${phone}</p>
  <p style="margin:0 0 2px 0;padding:0;"><a href="mailto:${mailto}" style="font-size:12px;color:#555555;text-decoration:none;line-height:1.5;">${email}</a></p>
  <p style="margin:0;padding:0;"><a href="https://www.cavivaultagents.io" style="font-size:12px;color:#5b4ba8;text-decoration:none;line-height:1.5;">www.cavivaultagents.io</a></p>
</td>
</tr></table>
</td></tr>
<tr ${tr0}><td ${td0("background-color:#ffffff;padding:0 24px 14px 24px;border-top:1px solid #e0e0e0 !important;")} bgcolor="#ffffff">
  <p style="font-size:11px;font-style:italic;color:#888888;padding-top:10px;text-align:center;letter-spacing:0.2px;margin:0;">Coordinated AI specialists working under your team&rsquo;s direction</p>
</td></tr>
${disclaimerRow}
</table>`;
}
