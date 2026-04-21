"use client";

import type { SignatureData } from "../_lib/generate-signature-html";
import {
  generateSignatureHtml,
  LOGO_URL_LOCAL,
} from "../_lib/generate-signature-html";

interface SignaturePreviewProps {
  data: SignatureData;
  showDisclaimer: boolean;
}

export function SignaturePreview({ data, showDisclaimer }: SignaturePreviewProps) {
  const html = generateSignatureHtml(data, { logoUrl: LOGO_URL_LOCAL, showDisclaimer });

  return (
    <div>
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
        Live Preview
      </p>
      <div className="overflow-x-auto rounded-lg">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="mx-auto"
          style={{ maxWidth: 600 }}
        />
      </div>
    </div>
  );
}
