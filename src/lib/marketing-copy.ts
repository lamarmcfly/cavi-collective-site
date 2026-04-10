import { getTotalAgentCount } from "@/data/divisions";

/** Published minimum; displayed stat uses max of this and live roster sum. */
export const AGENT_COUNT_FLOOR = 66;

/** Shown in hero stats, footer strip (tracks `divisions` data, never below floor). */
export function getAgentCountForMarketing(): string {
  return `${Math.max(AGENT_COUNT_FLOOR, getTotalAgentCount())}+`;
}

export const DIVISION_COUNT_DISPLAY = "8+";

export const DIVISIONS_EXPAND_NOTE =
  "Eight core divisions—and the roster keeps growing.";

/** Division detail page: integrations chips are examples, not a full catalog. */
export const INTEGRATIONS_SECTION_DESCRIPTION =
  "Popular examples of tools this division often connects to. We integrate with many more products via APIs, webhooks, and custom connectors.";

export const INTEGRATIONS_FOOTNOTE =
  "Don't see your stack? We still integrate—tell us what you use.";

/** Overview card row label (value is rendered as “{n} shown” next to the list length). */
export const INTEGRATIONS_OVERVIEW_LABEL = "Example integrations";

/** Short prose for meta tags (stable SEO; does not flip when seed data changes). */
export const META_DESCRIPTION =
  "Human-controlled managed AI workforce—not a chatbot or dev platform. Coordinated specialists under your team's direction. Start with orchestrator + worker bundles or full divisions. 66+ agents, 8+ divisions. Leverage now, not after a six-month build.";

export const KEYWORDS_EXTRA = [
  "SMB AI",
  "small team AI agents",
  "AI orchestrator",
  "multi-agent bundle",
  "managed AI workforce",
  "human in the loop AI",
] as const;

/** Voice: warm, owner-facing—delegator/worker, approvals, leverage. (Also used by home hero.) */
export const CAVI_DIFFERENCE = {
  tag: "The Cavi difference",
  title: "Coordinated AI teams that give humans superpowers",
  paragraph1:
    "Cavi gives you coordinated AI specialists working under your team's direction—building capacity, freeing budget, and creating workflows that compound over time.",
  paragraph2:
    "Not a tool. Not a chatbot. Not a developer platform. A managed AI workforce—with named specialists, coordinated departments, and human approval at every gate.",
  quote: "Your team approves. The AI executes. You stay in control.",
  leverage:
    "Built for businesses that need leverage now—not after a six-month implementation.",
  footerOneLiner:
    "Coordinated AI under your direction—capacity and workflows that compound, with your judgment at every gate.",
  contrasts: [
    { not: "Not a generic chatbot.", is: "Named roles, clear handoffs, and orchestration." },
    { not: "Not a dev platform to wire yourself.", is: "A managed workforce you direct." },
    { not: "Not “set and forget.”", is: "Humans approve what matters; AI does the execution." },
  ],
} as const;

export const HUMAN_IN_THE_LOOP = {
  tag: "Human in the loop, always",
  title: "Nothing important goes out without your people",
  description:
    "Every Cavi specialist runs under your team's approval. The AI handles repetitive execution; your people keep the judgment. That's the point—scale the work without losing control.",
} as const;

export const WORKFLOW_LADDER = {
  sectionTag: "How work gets done",
  title: "Orchestrator delegates. Workers execute. You approve.",
  description:
    "The orchestrator is the delegator: it breaks work down, assigns the worker, can add specialists when needed, and reports back so your team can sign off before anything sensitive goes out.",
  loopNote:
    "The orchestrator keeps your team in the loop—status, escalations, and approvals before customer-facing outputs ship.",
  bundleExampleLabel: "Minimum bundle",
  divisionExampleLabel: "Division depth",
  crossLinkCta: "See pricing for a two-agent start",
  crossLinkHref: "/pricing",
} as const;

export const WORKFLOW_DIAGRAM_STEPS = [
  {
    key: "team",
    label: "Your team",
    sub: "Priorities & approvals",
    variant: "human" as const,
  },
  {
    key: "orch",
    label: "Orchestrator",
    sub: "Delegates & coordinates",
    variant: "orchestrator" as const,
  },
  {
    key: "worker",
    label: "Worker agent",
    sub: "Executes the task",
    variant: "worker" as const,
  },
  {
    key: "more",
    label: "+ Specialists",
    sub: "Optional depth",
    variant: "optional" as const,
  },
];

export const WORKFLOW_MINIMUM_EXAMPLE = {
  title: "Real workflow: new inbound lead",
  intro:
    "A pattern many teams don't realize they can automate—with clarity and control.",
  steps: [
    "Your team marks a lead as qualified or a form hits the CRM.",
    "The orchestrator assigns the worker: pull context, draft a tailored reply, propose meeting slots.",
    "The worker produces the draft; the orchestrator checks it against your rules.",
    "Your rep reviews in one place, edits if needed, and approves—then it sends.",
  ],
  closing:
    "Two agents, one clear handoff: delegator + executor, with humans deciding what actually goes to the prospect.",
} as const;

export const WORKFLOW_DIVISION_EXAMPLE = {
  title: "Same idea, more muscle: quarterly client review pack",
  intro:
    "A division adds parallel specialists—still with your gates—when one workflow touches many skills at once.",
  steps: [
    "Your team requests a QBR deck: narrative, numbers, risks, and next-quarter plan.",
    "The orchestrator splits work: metrics pulled, win/loss summarized, competitive notes gathered—often in parallel.",
    "Specialists hand results back; the orchestrator assembles a coherent pack.",
    "Your leadership reviews the full package; approvals are explicit before anything is shared externally.",
  ],
  closing:
    "That's not a bigger chatbot—it's a coordinated department with the same rule: your team signs off when it matters.",
} as const;

export const SMALL_BUNDLE = {
  title: "Lead + worker bundles",
  subtitle: "Start small, scale to full divisions",
  headline: "Delegator + doer, under your direction",
  bullets: [
    "The orchestrator is the delegator: it breaks down work, assigns the worker, and tracks handoffs.",
    "The worker agent executes drafts, pulls, updates, and prep—so your people spend time on judgment, not busywork.",
    "When you're ready, add specialists or full divisions on the same platform—you stay in control at every step.",
  ],
  audience:
    "For owners and lean teams who want leverage without hiring a department on day one—or pretending a generic chatbot is enough.",
  ctaPrimary: "Book a consultation",
  ctaSecondary: "View pricing",
} as const;

export const PRICING_STARTER_CARDS = [
  {
    name: "Team bundle (2 agents)",
    description:
      "Orchestrator plus one worker—your minimum team for one pipeline or proof of value.",
    bullets: [
      "Scoped to one workflow you choose",
      "Human approvals before outbound or client-facing steps",
      "Grow into division packs when you're ready",
    ],
  },
  {
    name: "Division expansion",
    description:
      "When one area of the business needs depth—multiple specialists, one orchestrator.",
    bullets: [
      "Parallel workstreams with clear handoffs",
      "Integrations matched to tools you already use",
      "Works alongside smaller bundles",
    ],
  },
  {
    name: "Enterprise platform",
    description:
      "Multi-division deployments and managed options—same human-in-the-loop model at scale.",
    bullets: [
      "Implementation and managed service paths",
      "Strong isolation, access control, and audit history",
      "Custom agents when off-the-shelf isn't enough",
    ],
  },
] as const;

export const SMB_FAQ = {
  question: "We're a small team—do you support us?",
  answer:
    "Yes. Many clients start with two agents: an orchestrator that delegates and a worker that executes on one workflow. You approve what goes out—same accountability as larger deployments, with room to grow.",
} as const;

/** Plain-English security FAQ body (pricing page). */
export const PRICING_SECURITY_FAQ_ANSWER =
  "Your data and access boundaries matter. We use strict role-based access, separated workspaces for sensitive work, full trails of who did what, and hardened handling of outside content and credentials—so execution scales without losing control.";

/** Pilot / consultation landing (search-friendly, warm tone). */
export const CONSULTATION_META_DESCRIPTION =
  "Book a free consultation—map workflows, approvals, and fit. Works for a two-agent orchestrator + worker start or a division-scale plan. No commitment.";
