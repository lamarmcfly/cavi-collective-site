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
    <div className="flex min-h-screen h-screen bg-[#0A0A0B] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Demo Banner */}
        <DemoBanner />

        {/* Mobile header */}
        <header className="lg:hidden flex items-center justify-between min-h-[5.5rem] px-4 py-2 border-b border-white/5 bg-[#0A0A0B]">
          <Link href="/" className="flex items-center gap-3" aria-label="Cavi Vault home">
            <BrandLogo className="h-28 w-28 shrink-0 object-contain sm:h-32 sm:w-32" />
            <span className="text-lg font-bold text-white font-[family-name:var(--font-inter)]">
              CAVI
            </span>
          </Link>
          <MobileSidebar />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
