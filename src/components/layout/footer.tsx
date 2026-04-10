"use client";

import Link from "next/link";
import { divisions } from "@/data/divisions";
import { BrandLogo } from "@/components/brand/brand-logo";
import {
  CAVI_DIFFERENCE,
  DIVISION_COUNT_DISPLAY,
  getAgentCountForMarketing,
} from "@/lib/marketing-copy";

const footerLinks = {
  product: [
    { label: "Divisions", href: "/divisions/engineering" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Pricing", href: "/pricing" },
    { label: "Demo", href: "/dashboard/team" },
  ],
  divisions: divisions.slice(0, 4).map((d) => ({
    label: d.shortName,
    href: `/divisions/${d.slug}`,
  })),
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Pilot Program", href: "/pilot" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const agentStat = getAgentCountForMarketing();

  return (
    <footer className="bg-white border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-zinc-950 p-2 ring-1 ring-violet-500/30 shadow-md shadow-indigo-950/25"
              aria-label="Cavi Vault home"
            >
              <BrandLogo className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 object-contain" />
            </Link>
            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              {CAVI_DIFFERENCE.footerOneLiner}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
              Divisions
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.divisions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Cavi Collective. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-zinc-500 font-[family-name:var(--font-jetbrains)]">
                {agentStat} Agents &middot; {DIVISION_COUNT_DISPLAY} Divisions
                &middot; 24/7 Execution
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
