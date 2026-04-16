"use client";

import { useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { SignatureForm } from "./_components/signature-form";
import { SignaturePreview } from "./_components/signature-preview";
import { SignatureInstructions } from "./_components/signature-instructions";
import { generateSignatureHtml } from "./_lib/generate-signature-html";
import type { SignatureData } from "./_lib/generate-signature-html";
import {
  copySignatureToClipboard,
  downloadSignatureHtml,
} from "./_lib/copy-signature";

export default function SignatureGeneratorPage() {
  const [data, setData] = useState<SignatureData>({
    fullName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const html = generateSignatureHtml(data);
    const ok = await copySignatureToClipboard(html);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const html = generateSignatureHtml(data);
    const name = data.fullName.trim()
      ? data.fullName.trim().replace(/\s+/g, "-").toLowerCase()
      : "cavi";
    downloadSignatureHtml(html, `${name}-signature.html`);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Email Signature Generator
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Fill in your details, preview your signature, and copy it into Private
          Email.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Form */}
        <GlassCard appearance="dark">
          <h2 className="mb-5 text-lg font-semibold text-white">
            Your Details
          </h2>
          <SignatureForm data={data} onChange={setData} />
        </GlassCard>

        {/* Preview */}
        <GlassCard appearance="dark" className="lg:sticky lg:top-8 lg:self-start">
          <SignaturePreview data={data} />
        </GlassCard>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          variant="primary"
          size="lg"
          onClick={handleCopy}
          className="w-full sm:w-auto"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-5 w-5" />
              Copied! Now paste into Source mode
            </>
          ) : (
            <>
              <Copy className="mr-2 h-5 w-5" />
              Copy Signature Code
            </>
          )}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleDownload}
          className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 sm:w-auto"
        >
          <Download className="mr-2 h-5 w-5" />
          Download HTML
        </Button>
      </div>

      {/* Instructions */}
      <GlassCard appearance="dark" className="mt-8">
        <SignatureInstructions />
      </GlassCard>
    </div>
  );
}
