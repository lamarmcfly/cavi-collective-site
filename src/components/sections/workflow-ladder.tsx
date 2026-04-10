"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import {
  WORKFLOW_LADDER,
  WORKFLOW_DIAGRAM_STEPS,
  WORKFLOW_MINIMUM_EXAMPLE,
  WORKFLOW_DIVISION_EXAMPLE,
} from "@/lib/marketing-copy";
import { ArrowRight, ChevronDown, ChevronRight, RotateCcw } from "lucide-react";

const variantStyles = {
  human: "border-teal-200/90 bg-teal-50/60",
  orchestrator: "border-indigo-200/90 bg-indigo-50/60",
  worker: "border-violet-200/90 bg-violet-50/50",
  optional: "border-dashed border-zinc-300 bg-zinc-50/80",
} as const;

export function WorkflowLadder() {
  return (
    <section className="relative border-y border-zinc-200/70 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={WORKFLOW_LADDER.sectionTag}
          title={WORKFLOW_LADDER.title}
          description={WORKFLOW_LADDER.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-14"
        >
          <GlassCard appearance="light" className="overflow-hidden">
            <div className="flex flex-col items-stretch gap-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-0">
              {WORKFLOW_DIAGRAM_STEPS.map((step, i) => (
                <div key={step.key} className="flex items-center md:contents">
                  <div
                    className={`flex-1 rounded-2xl border px-4 py-4 text-center md:min-w-[9.5rem] md:flex-none md:px-5 ${variantStyles[step.variant]}`}
                  >
                    <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-zinc-900 md:text-base">
                      {step.label}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-zinc-600 md:text-sm">
                      {step.sub}
                    </p>
                  </div>
                  {i < WORKFLOW_DIAGRAM_STEPS.length - 1 && (
                    <div
                      className="flex justify-center py-1 text-zinc-400 md:px-2 md:py-0"
                      aria-hidden
                    >
                      <ChevronDown className="h-5 w-5 md:hidden" />
                      <ChevronRight className="hidden h-5 w-5 md:block" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-zinc-200/80 bg-stone-50/80 px-4 py-4 text-center text-sm text-zinc-600 md:flex-row md:justify-center md:gap-3 md:text-left">
              <RotateCcw className="h-4 w-4 shrink-0 text-teal-700" />
              <span>{WORKFLOW_LADDER.loopNote}</span>
            </div>
          </GlassCard>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <GlassCard appearance="light" variant="hover" className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                {WORKFLOW_LADDER.bundleExampleLabel}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-inter)] text-xl font-bold text-zinc-900">
                {WORKFLOW_MINIMUM_EXAMPLE.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {WORKFLOW_MINIMUM_EXAMPLE.intro}
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
                {WORKFLOW_MINIMUM_EXAMPLE.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm font-medium text-zinc-800">
                {WORKFLOW_MINIMUM_EXAMPLE.closing}
              </p>
            </GlassCard>

            <GlassCard appearance="light" variant="hover" className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
                {WORKFLOW_LADDER.divisionExampleLabel}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-inter)] text-xl font-bold text-zinc-900">
                {WORKFLOW_DIVISION_EXAMPLE.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {WORKFLOW_DIVISION_EXAMPLE.intro}
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-700">
                {WORKFLOW_DIVISION_EXAMPLE.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm font-medium text-zinc-800">
                {WORKFLOW_DIVISION_EXAMPLE.closing}
              </p>
            </GlassCard>
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href={WORKFLOW_LADDER.crossLinkHref} className="group">
                {WORKFLOW_LADDER.crossLinkCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
