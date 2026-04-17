export type DocLifecycleStatus = "Draft" | "In Review" | "Approved" | "Archived";
export type PermissionTier = "Editor" | "Viewer" | "External Viewer";

export interface NotionSection { name: string; description: string }
export interface NotionDatabaseTemplate { name: string; description: string; properties: string[] }
export interface DriveFolderTemplate { path: string; description: string }

export interface InformationArchitecture {
  notionSections: NotionSection[];
  notionDatabases: NotionDatabaseTemplate[];
  lifecycleFields: string[];
  driveFolders: DriveFolderTemplate[];
}

export interface PermissionRule {
  tier: PermissionTier;
  notionAccess: "edit" | "view" | "none";
  driveAccess: "edit" | "view" | "none";
  scope: "internal" | "external";
}

export interface PermissionOverride {
  principal: string;
  resourceType: "notion_page" | "notion_database" | "drive_folder" | "drive_file";
  resourceId: string;
  access: "edit" | "view" | "none";
  reason: string;
}

export interface RegistryRecord {
  id: string;
  title: string;
  status: DocLifecycleStatus;
  audience: "internal" | "external" | "hybrid";
  notionUrl?: string;
  driveUrl?: string;
  driveFileId?: string;
  owner: string;
  lastReviewed?: string;
  nextReview?: string;
}

export interface AuditEvent {
  timestamp: string;
  action: string;
  actor: string;
  details: Record<string, string>;
}
