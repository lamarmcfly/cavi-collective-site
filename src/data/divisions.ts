import { Division } from "@/types";

export const divisions: Division[] = [
  {
    id: "executive-ops",
    slug: "executive-ops",
    name: "Executive Operations",
    shortName: "Exec Ops",
    description:
      "Central intake, cross-domain synthesis, and operator decision surface. The primary interface between operators and the full agent fleet.",
    lead: {
      name: "Chief Orchestrator",
      title: "Division Lead",
    },
    agentCount: 1,
    color: {
      primary: "#6366F1",
      gradient: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
    },
    capabilities: [
      "Intake and triage of all incoming requests",
      "Cross-domain routing with ownership-explicit dispatch",
      "Operator-facing reporting and escalation handling",
      "Real-time session management and task status visibility",
      "Approved critical operations with audit trail",
    ],
    integrations: [
      "Discord",
      "Slack",
      "Microsoft Teams",
      "REST API",
      "WebSocket RPC",
    ],
  },
  {
    id: "engineering",
    slug: "engineering",
    name: "Engineering & Development",
    shortName: "Engineering",
    description:
      "Full-stack software engineering orchestration across frontend, backend, infrastructure, blockchain, and CI/CD.",
    lead: {
      name: "Engineering Orchestrator",
      title: "Division Lead",
    },
    agentCount: 15,
    color: {
      primary: "#3B82F6",
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-500/10",
      text: "text-blue-400",
    },
    capabilities: [
      "Frontend UI/UX implementation (React, TypeScript)",
      "Backend service and REST/WebSocket API development",
      "Smart contract development and auditing",
      "Kubernetes deployment and Helm chart management",
      "CI/CD pipeline management and red-build triage",
      "Post-deploy validation and regression monitoring",
      "Git mechanics: PR workflows, branch strategy",
    ],
    integrations: [
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Foundry",
    ],
  },
  {
    id: "marketing",
    slug: "marketing",
    name: "Marketing & Brand",
    shortName: "Marketing",
    description:
      "End-to-end marketing execution across 5 departments with 24+ specialists covering content, growth, brand, analytics, and community.",
    lead: {
      name: "Marketing Orchestrator",
      title: "Division Lead",
    },
    agentCount: 25,
    color: {
      primary: "#8B5CF6",
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-500/10",
      text: "text-purple-400",
    },
    capabilities: [
      "Campaign strategy, copy, and multi-channel execution",
      "Investor narrative and fundraising deck production",
      "Brand system development and voice consistency",
      "SEO strategy, content calendar, and long-form production",
      "Paid media campaign setup, pacing, and reporting",
      "Community management and retention systems",
      "Partnership identification and activation",
    ],
    integrations: [
      "Webflow",
      "Notion",
      "Canva API",
      "Twitter/X",
      "LinkedIn",
      "Google Analytics",
    ],
    departments: [
      {
        name: "Content & Copy",
        specialists: [
          "Story Architect",
          "PR/Comms Lead",
          "SEO Strategist",
          "Product Marketing Lead",
        ],
      },
      {
        name: "Growth & Acquisition",
        specialists: [
          "Growth Engineer",
          "Paid Media Lead",
          "Social Amplification Lead",
        ],
      },
      {
        name: "Brand & Creative",
        specialists: [
          "Visual Alchemist",
          "Creative Engine Lead",
          "Brand Copywriter",
        ],
      },
      {
        name: "Analytics & Measurement",
        specialists: ["Data Analytics Lead", "Measurement Ops Lead", "Trend Oracle"],
      },
      {
        name: "Community & Partnerships",
        specialists: [
          "Community Architect",
          "Partnership Scout",
          "Lifecycle CRM Lead",
        ],
      },
    ],
  },
  {
    id: "media",
    slug: "media",
    name: "AI Media Production",
    shortName: "AI Media",
    description:
      "AI-generated voice, audio, music, image, video, and meme systems with provenance and rights management.",
    lead: {
      name: "AI Media Director",
      title: "Division Lead",
    },
    agentCount: 5,
    color: {
      primary: "#14B8A6",
      gradient: "from-teal-500 to-teal-600",
      bg: "bg-teal-500/10",
      text: "text-teal-400",
    },
    capabilities: [
      "AI voice generation and text-to-speech",
      "Music production and audio branding",
      "AI image generation: storyboards, visuals, art",
      "Video and motion: animatics, social content",
      "Meme systems and remix templates for social",
      "Provenance tagging and rights documentation",
    ],
    integrations: [
      "ElevenLabs",
      "Suno",
      "Runway",
      "Midjourney",
      "DALL-E",
      "FFMPEG",
    ],
  },
  {
    id: "talent",
    slug: "talent",
    name: "Talent Acquisition",
    shortName: "Talent",
    description:
      "End-to-end talent sourcing, candidate qualification, document production, and pipeline operations.",
    lead: {
      name: "Talent Operations Lead",
      title: "Division Lead",
    },
    agentCount: 5,
    color: {
      primary: "#F59E0B",
      gradient: "from-amber-500 to-amber-600",
      bg: "bg-amber-500/10",
      text: "text-amber-400",
    },
    capabilities: [
      "Job and candidate sourcing across platforms",
      "Opportunity scoring and qualification",
      "Company research and dossier production",
      "Resume and cover letter tailoring",
      "Application submission automation",
      "Pipeline state management and follow-ups",
    ],
    integrations: ["LinkedIn", "Wellfound", "Greenhouse", "Lever", "Playwright"],
  },
  {
    id: "project-ops",
    slug: "project-ops",
    name: "Project Operations & Analytics",
    shortName: "Project Ops",
    description:
      "Cross-team project state management, reporting, and executive communications.",
    lead: {
      name: "Project Ops Director",
      title: "Division Lead",
    },
    agentCount: 7,
    color: {
      primary: "#EF4444",
      gradient: "from-red-500 to-red-600",
      bg: "bg-red-500/10",
      text: "text-red-400",
    },
    capabilities: [
      "GitHub Projects / Linear / Jira sync and hygiene",
      "Blocker capture and escalation routing",
      "Sprint standups and status reporting",
      "Deck structure and executive presentations",
      "Memos, briefs, and project summaries",
      "Chart and graph specs for dashboards",
    ],
    integrations: [
      "GitHub Projects",
      "Linear",
      "Jira",
      "Slack",
      "Notion",
      "Google Workspace",
    ],
  },
  {
    id: "research",
    slug: "research",
    name: "Research & Intelligence",
    shortName: "Research",
    description:
      "Shared evidence retrieval and synthesis service across all divisions. The research spine of the platform.",
    lead: {
      name: "Research Director",
      title: "Division Lead",
    },
    agentCount: 4,
    color: {
      primary: "#06B6D4",
      gradient: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
    },
    capabilities: [
      "Web search and external evidence retrieval",
      "Internal codebase and document discovery",
      "Competitive intelligence and market research",
      "Source-backed synthesis (evidence-first)",
      "Technical recon: API docs, library references",
      "Research packets for decks, briefs, and specs",
    ],
    integrations: ["Web Search", "Internal Docs", "API Docs", "Market Data"],
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    name: "Infrastructure & Reliability",
    shortName: "Infrastructure",
    description:
      "Runtime, gateway, cron, integrations, and platform health management.",
    lead: {
      name: "Infrastructure Lead",
      title: "Division Lead",
    },
    agentCount: 4,
    color: {
      primary: "#84CC16",
      gradient: "from-lime-500 to-lime-600",
      bg: "bg-lime-500/10",
      text: "text-lime-400",
    },
    capabilities: [
      "Gateway runtime management and monitoring",
      "Cron job management and scheduling",
      "Discord bot operations and channel routing",
      "Plugin and connector lifecycle management",
      "Session and memory operations",
      "Log rotation and config drift monitoring",
    ],
    integrations: [
      "Kubernetes",
      "Docker",
      "Discord API",
      "Slack API",
      "HashiCorp Vault",
    ],
  },
];

export function getDivisionById(id: string): Division | undefined {
  return divisions.find((d) => d.id === id);
}

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

export function getTotalAgentCount(): number {
  return divisions.reduce((acc, d) => acc + d.agentCount, 0);
}
