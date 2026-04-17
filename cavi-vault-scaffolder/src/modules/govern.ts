import { ENV } from "../config/env.js";
import { BASE_PERMISSION_RULES, DEFAULT_ADMIN_OVERRIDES } from "../config/permissionPolicy.js";
import { logAuditEvent } from "../integrations/auditLogger.js";
import { DriveClient } from "../integrations/driveClient.js";
import { NotionClient } from "../integrations/notionClient.js";
import { loadJsonFile } from "../storage/stateStore.js";
import type { PermissionOverride } from "../types/domain.js";

export async function runGovern(dryRun: boolean): Promise<void> {
  const overrides = await loadJsonFile<PermissionOverride[]>(ENV.OVERRIDES_PATH, DEFAULT_ADMIN_OVERRIDES);
  const drive = new DriveClient(dryRun);
  const notion = new NotionClient(dryRun);

  for (const override of overrides) {
    if (override.resourceType === "drive_file" || override.resourceType === "drive_folder") {
      await drive.enforceAccess(override.resourceId, override.access, override.principal);
    }
    if (override.resourceType === "notion_page" || override.resourceType === "notion_database") {
      await notion.enforcePageAccess(override.resourceId, override.principal, override.access);
    }
  }

  await logAuditEvent("govern_completed", {
    dryRun: String(dryRun),
    ruleCount: String(BASE_PERMISSION_RULES.length),
    overrideCount: String(overrides.length)
  });
}
