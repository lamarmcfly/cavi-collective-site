"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import {
  CAVI_DIFFERENCE,
  DIVISION_COUNT_DISPLAY,
  getAgentCountForMarketing,
} from "@/lib/marketing-copy";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const agentStat = getAgentCountForMarketing();

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100/90 hero-grain">
      <FloatingOrbs />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 md:pb-32 md:pt-10 lg:px-8">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-700"
          >
            {CAVI_DIFFERENCE.tag}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {CAVI_DIFFERENCE.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl"
          >
            {CAVI_DIFFERENCE.paragraph1}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-zinc-900 md:text-3xl">
                {agentStat}
              </span>
              <span className="text-sm uppercase tracking-wider text-zinc-500">
                Agents
              </span>
            </div>
            <div className="hidden h-8 w-px bg-zinc-200 md:block" />
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-zinc-900 md:text-3xl">
                {DIVISION_COUNT_DISPLAY}
              </span>
              <span className="text-sm uppercase tracking-wider text-zinc-500">
                Divisions
              </span>
            </div>
            <div className="hidden h-8 w-px bg-zinc-200 md:block" />
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-zinc-900 md:text-3xl">
                24/7
              </span>
              <span className="text-sm uppercase tracking-wider text-zinc-500">
                Execution
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" size="xl" asChild>
              <Link href="/pilot" className="group">
                Book a Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/dashboard/team" className="group">
                <Play className="h-4 w-4" />
                Try Interactive Demo
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
