// Division Types
export interface Division {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  lead: {
    name: string;
    title: string;
  };
  agentCount: number;
  color: {
    primary: string;
    gradient: string;
    bg: string;
    text: string;
  };
  capabilities: string[];
  integrations: string[];
  departments?: {
    name: string;
    specialists: string[];
  }[];
}

// Agent Types
export interface Agent {
  id: string;
  name: string;
  role: string;
  divisionId: string;
  department?: string;
  description: string;
  skills: string[];
  status?: AgentStatus;
  currentTask?: string;
}

export type AgentStatus = "active" | "idle" | "completed";

// Activity Types
export interface Activity {
  id: string;
  agentId: string;
  agentName: string;
  divisionId: string;
  divisionName: string;
  action: string;
  target?: string;
  timestamp: Date;
  status: "completed" | "in_progress" | "pending";
}

// Analytics Types
export interface AnalyticsSummary {
  totalTasks: number;
  tasksThisWeek: number;
  timeSavedHours: number;
  accuracyRate: number;
  activeAgents: number;
  changeFromLastWeek: {
    tasks: number;
    timeSaved: number;
    accuracy: number;
  };
}

export interface TasksByDay {
  date: string;
  tasks: number;
  label: string;
}

export interface TasksByDivision {
  divisionId: string;
  divisionName: string;
  tasks: number;
  color: string;
  percentage: number;
}

export interface AnalyticsData {
  summary: AnalyticsSummary;
  tasksByDay: TasksByDay[];
  tasksByDivision: TasksByDivision[];
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  market: "enterprise" | "smb";
}
