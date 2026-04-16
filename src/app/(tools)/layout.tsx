import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b1220] text-white">
      <header className="flex items-center gap-3 border-b border-slate-700/50 bg-slate-900/80 px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Back to Cavi home"
        >
          <BrandLogo className="h-10 w-10 shrink-0 object-contain" />
          <span className="text-base font-semibold text-slate-100 font-[family-name:var(--font-inter)]">
            CAVI
          </span>
        </Link>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
