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
 * NOTE: www.cavivaultagents.io currently points to Namecheap hosting,
 * not Vercel, so images must be served from the Vercel deployment URL.
 * Once the domain is connected to Vercel, update this to:
 *   https://www.cavivaultagents.io/Cavifinal.png
 */
export const LOGO_URL_REMOTE =
  "https://cavi-collective-site.vercel.app/Cavifinal.png";
/** Local logo path for dev preview. */
export const LOGO_URL_LOCAL = "/Cavifinal.png";

export function generateSignatureHtml(
  data: SignatureData,
  options?: { logoUrl?: string }
): string {
  const logoUrl = options?.logoUrl ?? LOGO_URL_REMOTE;

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

  return `<!--[if mso]><style>table,tr,td,th{border:0 !important;border-collapse:collapse !important;mso-table-lspace:0pt !important;mso-table-rspace:0pt !important;}</style><![endif]-->
<style>table,tr,td,th{border:0 none !important;}</style>
<table ${tbl("background-color:#ffffff;border-radius:8px;max-width:600px;width:600px;font-family:Arial,Helvetica,sans-serif;")} bgcolor="#ffffff">
<tr ${tr0}><td ${td0("background-color:#ffffff;padding:0;")} bgcolor="#ffffff">
<table ${tbl("")} width="100%"><tr ${tr0}>
<td ${td0("background-color:#ffffff;padding:28px 10px 28px 30px;vertical-align:top;width:350px;")} bgcolor="#ffffff">
  <p style="font-size:28px;font-weight:700;color:#2b2b3d;line-height:1.2;margin:0 0 2px 0;padding:0;">${name}</p>
  <p style="font-size:14px;font-weight:400;color:#555555;margin:0 0 14px 0;padding:0;">${title}</p>
  <table ${tbl("")}><tr ${tr0}><td ${td0("background-color:#d4ff00;width:50px;height:3px;font-size:0;line-height:0;overflow:hidden;padding:0;margin:0;")} bgcolor="#d4ff00"></td></tr></table>
  <p style="font-size:15px;font-weight:600;color:#5b4ba8;margin:16px 0 10px 0;padding:0;">Cavi Vault Agents</p>
  <p style="font-size:13px;color:#555555;margin:0 0 4px 0;padding:0;line-height:1.5;">${phone}</p>
  <p style="margin:0 0 4px 0;padding:0;"><a href="mailto:${mailto}" style="font-size:13px;color:#555555;text-decoration:none;line-height:1.5;">${email}</a></p>
  <p style="margin:0;padding:0;"><a href="https://www.cavivaultagents.io" style="font-size:13px;color:#555555;text-decoration:none;line-height:1.5;">www.cavivaultagents.io</a></p>
</td>
<td ${td0("background-color:#ffffff;padding:20px 12px 20px 0;vertical-align:middle;text-align:center;width:230px;")} bgcolor="#ffffff">
  <table ${tbl("")} align="center"><tr ${tr0}>
    <td ${td0("vertical-align:middle;padding:0;")}>
      <a href="https://www.cavivaultagents.io" style="text-decoration:none;"><img src="${logoUrl}" alt="Cavi Vault Agents" width="200" height="200" style="display:block;border-radius:50%;border:0;outline:0;width:200px;height:200px;" /></a>
    </td>
    <td ${td0("padding:0 0 0 10px;vertical-align:middle;")}>
      <table ${tbl("")}><tr ${tr0}><td ${td0("background-color:#d4ff00;width:3px;height:160px;font-size:0;line-height:0;overflow:hidden;padding:0;")} bgcolor="#d4ff00"></td></tr></table>
    </td>
  </tr></table>
</td>
</tr></table>
</td></tr>
<tr ${tr0}><td ${td0("background-color:#ffffff;padding:0 30px 22px 30px;border-top:1px solid #e0e0e0 !important;")} bgcolor="#ffffff">
  <p style="font-size:13px;font-style:italic;color:#888888;padding-top:14px;text-align:center;letter-spacing:0.3px;margin:0;">Coordinated AI specialists working under your team&rsquo;s direction</p>
</td></tr>
</table>`;
}
