import { ENV } from "../config/env.js";
import { logAuditEvent } from "../integrations/auditLogger.js";
import { NotionClient } from "../integrations/notionClient.js";
import { loadJsonFile } from "../storage/stateStore.js";
import type { RegistryRecord } from "../types/domain.js";

export async function runSync(dryRun: boolean): Promise<void> {
  const records = await loadJsonFile<RegistryRecord[]>(ENV.REGISTRY_PATH, []);
  await new NotionClient(dryRun).upsertRegistryRecords(records);
  await logAuditEvent("sync_completed", { dryRun: String(dryRun), recordCount: String(records.length) });
}
