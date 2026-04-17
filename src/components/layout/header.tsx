"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Divisions", href: "/divisions/engineering" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/dashboard/team" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/82 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-900/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[6.25rem] items-center justify-between gap-4 py-3 md:min-h-[6.75rem]">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center rounded-2xl border border-slate-200/90 bg-white/90 p-1.5 shadow-sm"
            aria-label="Cavi home"
          >
            <BrandLogo
              className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(item.href.split("/").slice(0, 2).join("/"));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" size="md" asChild>
              <Link href="/dashboard/team">Try Demo</Link>
            </Button>
            <Button variant="primary" size="md" asChild>
              <Link href="/pilot">Book a Consultation</Link>
            </Button>
          </div>

          <button
            className="md:hidden rounded-xl border border-slate-200 bg-white/90 p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-lg shadow-slate-900/5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="grid grid-cols-1 gap-2 p-2">
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <Link href="/dashboard/team">Try Demo</Link>
                </Button>
                <Button variant="primary" size="lg" className="w-full" asChild>
                  <Link href="/pilot">Book a Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
