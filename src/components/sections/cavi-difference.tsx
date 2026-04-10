"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { CAVI_DIFFERENCE } from "@/lib/marketing-copy";
import { Quote } from "lucide-react";

export function CaviDifference() {
  return (
    <section className="relative bg-gradient-to-b from-stone-50 via-white to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="How we're different from a chatbot or dev platform"
          description="Coordinated specialists, explicit approvals, and workflows that compound as you scale."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
        >
          <GlassCard appearance="light" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/70 via-white to-violet-50/50" />
            <div className="relative space-y-5 text-zinc-700">
              <p className="text-base leading-relaxed md:text-lg">
                {CAVI_DIFFERENCE.paragraph2}
              </p>
              <blockquote className="flex gap-3 rounded-2xl border border-zinc-200/80 bg-white/80 px-5 py-4 text-zinc-800 shadow-sm">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                <p className="font-[family-name:var(--font-inter)] text-lg font-semibold leading-snug">
                  {CAVI_DIFFERENCE.quote}
                </p>
              </blockquote>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                {CAVI_DIFFERENCE.leverage}
              </p>
            </div>
          </GlassCard>

          <ul className="space-y-4">
            {CAVI_DIFFERENCE.contrasts.map((row) => (
              <li key={row.not}>
                <GlassCard appearance="light" variant="hover" className="h-full">
                  <p className="text-sm font-medium text-zinc-500">{row.not}</p>
                  <p className="mt-2 text-base font-medium text-zinc-900">
                    {row.is}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
