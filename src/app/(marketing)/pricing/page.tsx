import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { divisions } from "@/data/divisions";
import {
  META_DESCRIPTION,
  PRICING_SECURITY_FAQ_ANSWER,
  PRICING_STARTER_CARDS,
  SMB_FAQ,
} from "@/lib/marketing-copy";
import {
  ArrowRight,
  Check,
  Users,
  Building2,
  Rocket,
  Wrench,
  TrendingUp,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Cavi Collective",
  description: META_DESCRIPTION,
};

const starterIcons = [Users, Layers, Building2] as const;

const enterpriseTiers = [
  {
    name: "Implementation",
    icon: Rocket,
    description:
      "Fully deployed Cavi AOP instance on your infrastructure, branded with your agent identities.",
    features: [
      "Requirements discovery and division-fit mapping",
      "Agent identity and persona design",
      "Infrastructure provisioning (K8s, cloud, hybrid)",
      "Tool permission policy and RBAC configuration",
      "Gateway and channel integration setup",
      "Acceptance testing and handoff documentation",
    ],
  },
  {
    name: "Managed Services",
    icon: Wrench,
    description:
      "Full operational ownership of your Cavi AOP instance. We run it, monitor it, and keep it healthy.",
    features: [
      "24/7 fleet health monitoring",
      "Config drift detection and remediation",
      "Memory and context lifecycle management",
      "Incident response SLA",
      "Cron job and scheduled task management",
      "Monthly platform health reports",
    ],
  },
  {
    name: "Custom Build",
    icon: Building2,
    description:
      "Purpose-built specialist agents and division structures tailored to your specific domain.",
    features: [
      "Custom specialist design and skill packs",
      "Domain-specific integrations (ERP, CRM, APIs)",
      "Custom model routing (open-source, private LLMs)",
      "Smart contract integration for on-chain workflows",
      "Branded AI identity system",
    ],
  },
  {
    name: "Expansion",
    icon: TrendingUp,
    description:
      "Ongoing capability expansion as your operations scale.",
    features: [
      "New division rollouts",
      "Agent headcount scaling",
      "Model upgrades as frontier models improve",
      "New channel integrations",
      "Workflow automation additions",
    ],
  },
];

const faqs = [
  SMB_FAQ,
  {
    question: "How does the pilot work?",
    answer:
      "The pilot is a 30-day engagement designed to produce evidence of fit. You'll receive a workflow constraint map, risk and control design, implementation blueprint, and executive go/no readout.",
  },
  {
    question: "What's included in the consultation?",
    answer:
      "A 30-minute call to map your workflow bottlenecks, surface governance questions, assess feasibility, and determine clear next steps. No commitment required.",
  },
  {
    question: "Can I start with just one division?",
    answer:
      "Yes. Most clients start with one or two divisions that address their most pressing needs, then expand as they see results.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is customized based on your scale, number of divisions, agent count, and integration complexity. Contact us for a tailored quote.",
  },
  {
    question: "What about data security?",
    answer: PRICING_SECURITY_FAQ_ANSWER,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-stone-50 pt-28 md:pt-32 lg:pt-36">
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
          <FloatingOrbs variant="subtle" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="primary" size="lg">
              Pricing
            </Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
              Pricing that matches how you work
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-600">
              From a two-agent start-delegator plus worker-to full divisions and
              enterprise rollout. Same idea at every tier: your people approve
              what matters; AI handles execution.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="xl" asChild>
                <Link href="/pilot" className="group">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200/80 bg-gradient-to-b from-indigo-50/40 via-white to-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Team size"
              title="Start where you are"
              description="Orchestrator + worker bundles, division depth, or full platform-the same human-in-the-loop model at every tier."
            />
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {PRICING_STARTER_CARDS.map((card, index) => {
                const Icon = starterIcons[index];
                return (
                  <GlassCard
                    key={card.name}
                    appearance="light"
                    variant="hover"
                    className="flex h-full flex-col"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-800">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-inter)] text-lg font-semibold text-zinc-900">
                      {card.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">{card.description}</p>
                    <ul className="mt-4 flex-1 space-y-2">
                      {card.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm text-zinc-700"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-zinc-200/80">
                      <Button variant="primary" size="md" className="w-full" asChild>
                        <Link href="/pilot">Talk to us</Link>
                      </Button>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
            <p className="mt-10 text-center text-sm text-zinc-600">
              Need the full enterprise catalog?{" "}
              <Link
                href="/enterprise"
                className="font-medium text-indigo-700 hover:text-violet-900"
              >
                See Enterprise capabilities
              </Link>
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Enterprise"
              title="Enterprise Offerings"
              description="Full-service deployment and management for enterprise teams."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {enterpriseTiers.map((tier) => (
                <GlassCard
                  key={tier.name}
                  appearance="light"
                  variant="hover"
                  className="h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-teal-100">
                      <tier.icon className="w-6 h-6 text-teal-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zinc-900 font-[family-name:var(--font-inter)]">
                        {tier.name}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-zinc-200/80">
                    <Button variant="secondary" size="md" className="w-full" asChild>
                      <Link href="/pilot">Contact for Pricing</Link>
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-stone-50 via-teal-50/20 to-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Divisions"
              title="Division Bundles"
              description="Select the divisions that match your operational needs."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {divisions.slice(1, 5).map((division) => (
                <GlassCard
                  key={division.id}
                  appearance="light"
                  variant="interactive"
                  accentColor={division.color.primary}
                >
                  <div className="flex items-center gap-3">
                    <Users
                      className="w-5 h-5"
                      style={{ color: division.color.primary }}
                    />
                    <Badge variant="outline" size="sm">
                      {division.agentCount} agents
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                    {division.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                    {division.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-zinc-200/80">
                    <Link
                      href="/pilot"
                      className="text-sm font-medium text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                    >
                      Contact for Pricing
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/divisions/engineering"
                className="text-sm text-zinc-600 hover:text-zinc-900"
              >
                View all 8+ divisions {"->"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader tag="FAQ" title="Frequently Asked Questions" />

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <GlassCard key={faq.question} appearance="light" variant="hover">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-zinc-600">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
