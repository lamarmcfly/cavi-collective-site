"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-lg shadow-zinc-900/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.08] via-indigo-600/[0.06] to-violet-600/[0.07]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-200/35 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
              Ready for AI that reports to your team?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 max-w-xl mx-auto">
              Book a free consultation to map where work gets stuck, where
              approvals belong, and whether a delegator + worker start—or a full
              division—fits how you operate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="xl" asChild>
                <Link href="/pilot" className="group">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <Link href="/enterprise">Learn More</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              No commitment required. 30-minute call to assess fit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
