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
    <footer className="border-t border-slate-200/80 bg-white/95">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-sm"
              aria-label="Cavi home"
            >
              <BrandLogo className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {CAVI_DIFFERENCE.footerOneLiner}
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                {group}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200/80 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Cavi Collective. All rights reserved.
            </p>
            <span className="text-xs text-slate-500 font-[family-name:var(--font-jetbrains)]">
              {agentStat} Agents &middot; {DIVISION_COUNT_DISPLAY} Divisions &middot; 24/7 Execution
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
