import { Activity } from "@/types";
import { agents } from "./agents";
import { divisions, getDivisionById } from "./divisions";
import { generateId, randomItem, randomBetween } from "@/lib/utils";

// Action templates per division
const actionTemplates: Record<string, string[]> = {
  "executive-ops": [
    "Routed task to {division} division",
    "Completed intake triage for new request",
    "Escalated priority issue to operator",
    "Synthesized cross-team status report",
    "Approved workflow execution",
  ],
  engineering: [
    "Deployed {component} to staging environment",
    "Completed code review for PR #{number}",
    "Fixed bug in {module} module",
    "Updated CI/CD pipeline configuration",
    "Merged pull request #{number}",
    "Implemented new API endpoint",
    "Optimized database query performance",
    "Resolved merge conflicts in {branch}",
    "Added unit tests for {component}",
    "Updated dependency versions",
  ],
  marketing: [
    "Published blog post: {title}",
    "Optimized SEO for {page} page",
    "Created social assets for {campaign}",
    "Analyzed campaign performance metrics",
    "Drafted email sequence for {segment}",
    "Updated brand guidelines document",
    "Scheduled social posts for next week",
    "Generated competitor analysis report",
    "Created landing page copy",
    "A/B tested headline variants",
  ],
  media: [
    "Generated AI voice clip for {project}",
    "Created product visualization images",
    "Produced social video content",
    "Generated meme templates for campaign",
    "Updated audio branding assets",
    "Rendered motion graphics sequence",
    "Processed batch image generation",
    "Tagged provenance for new assets",
  ],
  talent: [
    "Sourced {count} candidates for {role}",
    "Qualified opportunity at {company}",
    "Tailored resume for {position}",
    "Submitted application to {company}",
    "Updated pipeline status for {candidate}",
    "Generated company research dossier",
    "Scheduled follow-up for {company}",
  ],
  "project-ops": [
    "Updated project board status",
    "Generated sprint standup summary",
    "Created executive presentation deck",
    "Captured blockers from team sync",
    "Sent weekly status update to stakeholders",
    "Generated KPI dashboard charts",
    "Prepared handoff documentation",
  ],
  research: [
    "Completed market research on {topic}",
    "Synthesized competitive intelligence report",
    "Retrieved technical documentation for {api}",
    "Generated research packet for {project}",
    "Verified source citations for report",
    "Analyzed industry trends data",
  ],
  infrastructure: [
    "Monitored gateway health metrics",
    "Executed scheduled cron job",
    "Updated Discord bot configuration",
    "Synced memory index across sessions",
    "Rotated log files for {service}",
    "Verified secrets management integrity",
    "Deployed connector update to production",
  ],
};

// Placeholder values
const placeholders = {
  component: [
    "UserAuthModule",
    "DashboardWidget",
    "PaymentService",
    "NotificationSystem",
    "AnalyticsTracker",
    "SearchIndex",
    "CacheLayer",
  ],
  module: [
    "authentication",
    "payments",
    "notifications",
    "analytics",
    "search",
    "user-management",
    "billing",
  ],
  branch: ["feature/auth", "fix/payments", "refactor/api", "update/deps", "feat/dashboard"],
  number: () => randomBetween(100, 999).toString(),
  title: [
    "Introducing AI Workforce 2.0",
    "Enterprise Security Best Practices",
    "The Future of Agentic Operations",
    "Case Study: 10x Productivity Gains",
    "How AI Divisions Transform Ops",
  ],
  page: ["pricing", "enterprise", "about", "divisions", "contact"],
  campaign: ["Q2 Launch", "Product Update", "Brand Awareness", "Lead Gen", "Retention"],
  segment: ["enterprise leads", "trial users", "churned customers", "power users"],
  project: ["brand video", "product demo", "social campaign", "investor deck"],
  count: () => randomBetween(5, 25).toString(),
  role: ["Senior Engineer", "Product Manager", "Designer", "Data Scientist", "DevOps Lead"],
  company: ["TechCorp", "StartupXYZ", "Enterprise Inc", "Scale Labs", "AI Ventures"],
  position: ["Full Stack Developer", "ML Engineer", "Product Lead", "CTO"],
  candidate: ["John D.", "Sarah M.", "Alex K.", "Maria L."],
  topic: ["AI market trends", "competitor pricing", "tech stack analysis", "user research"],
  api: ["Stripe API", "OpenAI API", "AWS SDK", "GitHub API"],
  service: ["gateway", "worker", "scheduler", "connector"],
  division: divisions.map((d) => d.shortName),
};

function fillTemplate(template: string): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = placeholders[key as keyof typeof placeholders];
    if (typeof value === "function") {
      return value();
    }
    if (Array.isArray(value)) {
      return randomItem(value);
    }
    return key;
  });
}

export function generateActivity(divisionFilter?: string): Activity {
  // Filter agents by division if specified
  const eligibleAgents = divisionFilter
    ? agents.filter((a) => a.divisionId === divisionFilter)
    : agents;

  const agent = randomItem(eligibleAgents);
  const division = getDivisionById(agent.divisionId);
  const templates = actionTemplates[agent.divisionId] || actionTemplates.engineering;
  const template = randomItem(templates);

  const statuses: Activity["status"][] = ["completed", "completed", "completed", "in_progress", "pending"];

  return {
    id: generateId(),
    agentId: agent.id,
    agentName: agent.name,
    divisionId: agent.divisionId,
    divisionName: division?.shortName || "Unknown",
    action: fillTemplate(template),
    timestamp: new Date(),
    status: randomItem(statuses),
  };
}

export function generateActivityBatch(count: number, divisionFilter?: string): Activity[] {
  const activities: Activity[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const activity = generateActivity(divisionFilter);
    // Spread timestamps over the last 24 hours
    const hoursAgo = (i / count) * 24;
    activity.timestamp = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
    activities.push(activity);
  }

  return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

export function generateRealtimeActivity(divisionFilter?: string): Activity {
  return generateActivity(divisionFilter);
}
