"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { SMALL_BUNDLE } from "@/lib/marketing-copy";
import { ArrowRight, Users, Network } from "lucide-react";

export function StarterBundles() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={SMALL_BUNDLE.title}
          title={SMALL_BUNDLE.subtitle}
          description={SMALL_BUNDLE.audience}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-14"
        >
          <GlassCard appearance="light" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-violet-50/60" />
            <div className="relative grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-12">
              <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-800">
                  <Network className="h-7 w-7" />
                </div>
                <h3 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-zinc-900 md:text-3xl">
                  {SMALL_BUNDLE.headline}
                </h3>
                <p className="flex items-center gap-2 text-sm font-medium text-zinc-600">
                  <Users className="h-4 w-4 text-violet-600" />
                  Same platform—from two agents to full divisions
                </p>
              </div>
              <ul className="space-y-4">
                {SMALL_BUNDLE.bullets.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-base leading-relaxed text-zinc-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Button variant="primary" size="lg" asChild>
                <Link href="/pilot" className="group">
                  {SMALL_BUNDLE.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing">{SMALL_BUNDLE.ctaSecondary}</Link>
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
