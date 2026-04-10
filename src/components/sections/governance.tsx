"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { HUMAN_IN_THE_LOOP } from "@/lib/marketing-copy";
import {
  UserCheck,
  FileCheck,
  Shield,
  Layers,
  Lock,
  Key,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Human sign-offs first",
    description:
      "Nothing customer-facing or high-risk ships without your team's explicit OK. The orchestrator routes drafts and results back for review before they go out.",
  },
  {
    icon: FileCheck,
    title: "Audit trails you can stand behind",
    description:
      "A clear record of handoffs, decisions, and completions—so you can explain what happened and who approved it.",
  },
  {
    icon: Shield,
    title: "Roles and permissions that match reality",
    description:
      "Each agent works inside boundaries you define—no silent privilege creep, no mystery access.",
  },
  {
    icon: Layers,
    title: "Separated workspaces by domain",
    description:
      "Divisions and sensitive work stay in their own lanes. Cross-team work moves through defined contracts, not ad-hoc sharing.",
  },
  {
    icon: Lock,
    title: "Outside content handled carefully",
    description:
      "Email, web, and uploads are treated as untrusted input—including defenses against prompt injection at the ingestion layer.",
  },
  {
    icon: Key,
    title: "Secrets kept out of casual context",
    description:
      "Credentials and keys live in enterprise-grade secret storage—not pasted into prompts or agent memory.",
  },
];

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

export function Governance() {
  return (
    <section className="relative bg-gradient-to-b from-white via-teal-50/30 to-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={HUMAN_IN_THE_LOOP.tag}
          title={HUMAN_IN_THE_LOOP.title}
          description={HUMAN_IN_THE_LOOP.description}
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium uppercase tracking-wider text-zinc-500">
          Security and governance
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <GlassCard appearance="light" variant="hover" className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                  <feature.icon className="h-6 w-6 text-teal-800" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
