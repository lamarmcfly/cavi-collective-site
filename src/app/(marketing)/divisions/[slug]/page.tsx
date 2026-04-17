import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge, DivisionBadge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { FloatingOrbs } from "@/components/shared/floating-orbs";
import { ContactCTA } from "@/components/shared/contact-cta";
import { divisions, getDivisionBySlug } from "@/data/divisions";
import { getAgentsByDivision } from "@/data/agents";
import {
  INTEGRATIONS_FOOTNOTE,
  INTEGRATIONS_OVERVIEW_LABEL,
  INTEGRATIONS_SECTION_DESCRIPTION,
} from "@/lib/marketing-copy";
import { ArrowRight, Plug, Zap, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return divisions.map((division) => ({
    slug: division.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    return { title: "Division Not Found" };
  }

  return {
    title: `${division.name} | Cavi Collective`,
    description: division.description,
  };
}

export default async function DivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    notFound();
  }

  const agents = getAgentsByDivision(division.id);

  const otherDivisions = divisions.filter((d) => d.id !== division.id).slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-1 bg-stone-50 pt-28 md:pt-32 lg:pt-36">
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-stone-50 to-white">
          <FloatingOrbs variant="subtle" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <DivisionBadge divisionId={division.id} size="lg">
                    {division.shortName}
                  </DivisionBadge>
                  <Badge variant="outline">{division.agentCount} Agents</Badge>
                </div>
                <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
                  {division.name}
                </h1>
                <p className="mt-4 text-xl text-zinc-600">{division.description}</p>
                <div className="mt-4 text-zinc-600">
                  Division Lead:{" "}
                  <span className="text-zinc-900 font-medium">{division.lead.name}</span>
                </div>
                <div className="mt-8">
                  <Button variant="primary" size="lg" asChild>
                    <Link href="/pilot" className="group">
                      Include in Your Pilot
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <GlassCard appearance="light" className="lg:w-80">
                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  Division Overview
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Total Agents</span>
                    <span className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
                      {division.agentCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-600">{INTEGRATIONS_OVERVIEW_LABEL}</span>
                    <span className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-inter)] shrink-0">
                      {division.integrations.length} shown
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Capabilities</span>
                    <span className="text-xl font-bold text-zinc-900 font-[family-name:var(--font-inter)]">
                      {division.capabilities.length}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Capabilities"
              title="What This Division Does"
              align="left"
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {division.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-zinc-200/80"
                >
                  <Zap
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: division.color.primary }}
                  />
                  <span className="text-zinc-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Agent Roster"
              title={`${division.agentCount} Specialized Agents`}
              align="left"
            />
            <div className="mt-8">
              <GlassCard appearance="light" noPadding>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-200">
                        <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                          Agent
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500">
                          Role
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-zinc-500 hidden md:table-cell">
                          Skills
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {agents.map((agent) => (
                        <tr
                          key={agent.id}
                          className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
                                style={{
                                  backgroundColor: `${division.color.primary}20`,
                                  color: division.color.primary,
                                }}
                              >
                                {agent.name.charAt(0)}
                              </div>
                              <span className="font-medium text-zinc-900">
                                {agent.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-zinc-600">{agent.role}</td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <div className="flex flex-wrap gap-1">
                              {agent.skills.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/80"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Integrations"
              title="Works With Your Stack"
              description={INTEGRATIONS_SECTION_DESCRIPTION}
              align="left"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {division.integrations.map((integration) => (
                <div
                  key={integration}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-50 border border-zinc-200/80"
                >
                  <Plug className="w-4 h-4 text-zinc-500" />
                  <span className="text-zinc-700">{integration}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-left text-sm leading-relaxed text-zinc-500">
              {INTEGRATIONS_FOOTNOTE}
            </p>
          </div>
        </section>

        <section className="py-16 bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactCTA variant="card" />
          </div>
        </section>

        <section className="py-16 border-t border-zinc-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-zinc-900">Other Divisions</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherDivisions.map((div) => (
                <Link key={div.id} href={`/divisions/${div.slug}`}>
                  <GlassCard appearance="light" variant="interactive" className="h-full">
                    <div className="flex items-center justify-between">
                      <DivisionBadge divisionId={div.id} size="sm">
                        {div.shortName}
                      </DivisionBadge>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </div>
                    <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                      {div.description}
                    </p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
