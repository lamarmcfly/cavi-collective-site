"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { divisions } from "@/data/divisions";
import { ArrowRight, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function DivisionGrid() {
  return (
    <section className="py-24 relative bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="AI Divisions"
          title="8+ Specialized Divisions"
          description="Each division operates as a self-contained department with a lead orchestrator and domain specialists. The roster and departments keep growing."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {divisions.map((division) => (
            <motion.div key={division.id} variants={itemVariants}>
              <Link href={`/divisions/${division.slug}`}>
                <GlassCard
                  appearance="light"
                  variant="interactive"
                  accentColor={division.color.primary}
                  className="h-full group"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${division.color.primary}18` }}
                    >
                      <Users
                        className="w-5 h-5"
                        style={{ color: division.color.primary }}
                      />
                    </div>
                    <Badge variant="outline" size="sm">
                      {division.agentCount} agents
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-zinc-900 font-[family-name:var(--font-inter)]">
                    {division.shortName}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                    {division.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-indigo-800">
                    View Division
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
