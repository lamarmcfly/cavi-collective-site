import { Sidebar, MobileSidebar } from "@/components/dashboard/sidebar";
import { DemoBanner } from "@/components/shared/demo-banner";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen min-h-screen bg-[radial-gradient(1000px_500px_at_0%_0%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(900px_500px_at_100%_0%,rgba(124,58,237,0.25),transparent_50%),#0b1220] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DemoBanner />

        <header className="flex min-h-[4.75rem] items-center justify-between border-b border-slate-700/70 bg-slate-900/55 px-4 py-2 backdrop-blur-md lg:hidden">
          <Link href="/" className="flex items-center gap-2" aria-label="Cavi home">
            <BrandLogo className="h-14 w-14 shrink-0 object-contain" />
            <span className="text-base font-semibold text-slate-100 font-[family-name:var(--font-inter)]">
              CAVI
            </span>
          </Link>
          <MobileSidebar />
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
