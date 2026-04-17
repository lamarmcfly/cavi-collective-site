import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { ContactCTA } from "@/components/shared/contact-cta";
import { divisions } from "@/data/divisions";
import {
  DIVISION_COUNT_DISPLAY,
  getAgentCountForMarketing,
  META_DESCRIPTION,
} from "@/lib/marketing-copy";
import { ArrowRight, Users, Shield, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise | Cavi Collective",
  description: META_DESCRIPTION,
};

const pilotDeliverables = [
  {
    title: "Workflow Constraint Map",
    description:
      "Every dependency, approval touchpoint, and blocker in your actual operating environment. Fully documented.",
  },
  {
    title: "Risk & Control Design",
    description:
      "Auditability engineered into the workflow from day one. Every decision point gets documented logic.",
  },
  {
    title: "Implementation Blueprint",
    description:
      "Named owners, phased delivery, and explicit decision checkpoints at every gate.",
  },
  {
    title: "Executive Go/No Readout",
    description:
      "Leadership-ready evidence to approve or stop before committing broader budget.",
  },
];

export default function EnterprisePage() {
  const agentStat = getAgentCountForMarketing();

  return (
    <>
      <Header />
      <main className="flex-1 bg-stone-50">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100/90 pt-28 hero-grain md:pt-32 lg:pt-36">
          <FloatingOrbs />
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="primary" size="lg">
                Enterprise AI Operations
              </Badge>
              <h1 className="mt-6 font-[family-name:var(--font-inter)] text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
                AI Workforce for
                <br />
                <span className="text-gradient">Enterprise Operations</span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-zinc-600">
                Deploy coordinated AI divisions that mirror how your company
                actually runs-{agentStat} specialized agents across{" "}
                {DIVISION_COUNT_DISPLAY} divisions, with clear approvals,
                audit-friendly handoffs, and room to grow as the roster expands.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-indigo-700" />
                  <span className="font-medium text-zinc-900">
                    {agentStat} Agents
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-violet-700" />
                  <span className="font-medium text-zinc-900">
                    {DIVISION_COUNT_DISPLAY} Divisions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium text-zinc-900">SOC 2 Ready</span>
                </div>
              </div>
              <div className="mt-10">
                <Button variant="primary" size="xl" asChild>
                  <Link href="/pilot" className="group">
                    Book Enterprise Consultation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-zinc-600">
                <span className="font-semibold text-zinc-800">Smaller team?</span>{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-indigo-700 underline-offset-2 hover:text-violet-900 hover:underline"
                >
                  Start with an orchestrator + worker bundle
                </Link>{" "}
                on the same platform-then scale into full divisions when you are
                ready.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="The Platform"
              title="8+ Specialized Divisions"
              description="Each division operates as a self-contained department with a lead orchestrator and domain specialists. New depth and roles are added as the platform evolves."
            />

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              {divisions.map((division) => (
                <Link key={division.id} href={`/divisions/${division.slug}`}>
                  <GlassCard
                    appearance="light"
                    variant="interactive"
                    accentColor={division.color.primary}
                    className="h-full"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-[family-name:var(--font-inter)] text-xl font-semibold text-zinc-900">
                          {division.name}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Lead: {division.lead.name}
                        </p>
                      </div>
                      <Badge variant="outline">{division.agentCount} agents</Badge>
                    </div>
                    <p className="mt-4 text-zinc-600">{division.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {division.capabilities.slice(0, 3).map((cap, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-zinc-200/80 bg-zinc-100 px-2 py-1 text-xs text-zinc-600"
                        >
                          {cap.split("(")[0].trim()}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-stone-50 via-teal-50/25 to-stone-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="The Pilot"
              title="Proof Before Scale"
              description="The engagement is designed to produce evidence, not just enthusiasm."
            />

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              {pilotDeliverables.map((item, index) => (
                <GlassCard key={index} appearance="light" variant="hover">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-[family-name:var(--font-inter)] font-bold text-teal-800">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <ContactCTA variant="card" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
