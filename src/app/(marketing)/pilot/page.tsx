import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { CONSULTATION_META_DESCRIPTION } from "@/lib/marketing-copy";
import {
  MapPin,
  Shield,
  FileCheck,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Cavi Collective",
  description: CONSULTATION_META_DESCRIPTION,
};

const consultationTopics = [
  {
    icon: MapPin,
    title: "Map workflow bottlenecks and decision points",
    description:
      "Where approvals and handoffs actually live, and where decisions get stuck before they reach the right people.",
  },
  {
    icon: Shield,
    title: "Surface governance and risk questions",
    description:
      "The questions your team would have to answer before scaling - made explicit and documented, not assumed or deferred.",
  },
  {
    icon: BarChart3,
    title: "Align on feasibility and fit",
    description:
      "Whether your stack and operating reality support a pilot, with no promises - just a plain assessment of whether it's the right next step.",
  },
  {
    icon: FileCheck,
    title: "Leave with clear next steps or a plain no",
    description:
      "A structured picture of what comes next, or an honest 'not the right fit.' No commitment, no pressure to proceed.",
  },
];

const pilotDeliverables = [
  {
    title: "Workflow Constraint Map",
    description:
      "Every dependency, approval touchpoint, and blocker in your actual operating environment. Fully documented. Nothing gets built on assumptions about how your team works.",
  },
  {
    title: "Risk & Control Design",
    description:
      "Auditability engineered into the workflow from day one. Every decision point gets documented logic, every approval gets a trail.",
  },
  {
    title: "Implementation Blueprint",
    description:
      "Named owners, phased delivery, and explicit decision checkpoints at every gate. Your team knows exactly who owns what, when decisions happen, and what triggers the next phase.",
  },
  {
    title: "Executive Go/No Readout",
    description:
      "Leadership-ready evidence to approve or stop before committing broader budget. Not a slide deck - a structured decision package with clear criteria, risks, and recommendations.",
  },
];

export default function PilotPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-stone-50 pt-28 md:pt-32 lg:pt-36">
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
          <FloatingOrbs variant="subtle" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="primary" size="lg">
                Book a Consultation
              </Badge>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
                Proof before scale.
              </h1>
              <p className="mt-4 text-xl text-zinc-600">
                Whether you need a two-agent start or a division-scale path-we
                map workflows, approvals, and fit with no commitment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="The First Call"
              title="What the Consultation Clarifies"
              description="30 minutes to assess fit and surface what matters. Small teams are welcome-we often begin with a minimal lead + worker bundle and expand as you grow."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {consultationTopics.map((topic, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-800 text-xl font-bold font-[family-name:var(--font-inter)]">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-zinc-600">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pl-6 border-l-4 border-teal-600">
              <p className="text-xl text-zinc-700 italic leading-relaxed">
                &ldquo;Most teams are not blocked by ambition. They are blocked
                by trust, risk, and execution drag. Cavi is designed for
                operators and leadership teams who need practical AI adoption
                without losing approvals, accountability, or control over the
                workflow.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-white via-teal-50/30 to-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="The Pilot"
              title="What the Pilot Produces"
              description="4 deliverables. Clear evidence. Go/no-go ready."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {pilotDeliverables.map((item, index) => (
                <GlassCard key={index} appearance="light" variant="hover">
                  <div className="flex items-start gap-4">
                    <Badge
                      variant="success"
                      size="sm"
                      className="bg-emerald-100 text-emerald-800 border-emerald-200"
                    >
                      Included
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-600">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard appearance="light" className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-teal-800" />
                </div>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
                Ready to move from AI experiments to accountable operations?
              </h2>
              <p className="mt-4 text-zinc-600">
                Book a 30-minute call. We&apos;ll map your workflow constraints
                and surface the governance questions that matter.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-zinc-600">
                  <Clock className="w-4 h-4" />
                  <span>30 minutes</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-zinc-200" />
                <div className="flex items-center gap-2 text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>No commitment</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-zinc-200" />
                <div className="flex items-center gap-2 text-zinc-600">
                  <Users className="w-4 h-4" />
                  <span>With a Cavi specialist</span>
                </div>
              </div>

              <div className="mt-8 p-8 rounded-xl bg-zinc-50 border border-zinc-200 border-dashed">
                <p className="text-zinc-600">
                  Calendar integration coming soon.
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  In the meantime, email us at{" "}
                  <a
                    href="mailto:hello@cavicollective.com"
                    className="text-teal-700 hover:text-teal-900 font-medium"
                  >
                    hello@cavicollective.com
                  </a>
                </p>
              </div>

              <Button variant="primary" size="xl" className="mt-8" asChild>
                <a href="mailto:hello@cavicollective.com">
                  Contact Us to Schedule
                </a>
              </Button>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
