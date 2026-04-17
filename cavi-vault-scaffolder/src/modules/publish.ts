import { ENV } from "../config/env.js";
import { logAuditEvent } from "../integrations/auditLogger.js";
import { DriveClient } from "../integrations/driveClient.js";
import { loadJsonFile, saveJsonFile } from "../storage/stateStore.js";
import type { RegistryRecord } from "../types/domain.js";

export async function runPublish(dryRun: boolean): Promise<void> {
  const drive = new DriveClient(dryRun);
  const records = await loadJsonFile<RegistryRecord[]>(ENV.REGISTRY_PATH, []);
  let publishedCount = 0;

  for (const record of records) {
    if (record.status !== "Approved" || record.audience === "internal") continue;
    const published = await drive.publishRecordAsset(record);
    record.driveFileId = published.driveFileId;
    record.driveUrl = published.driveUrl;
    publishedCount += 1;
  }

  if (!dryRun) await saveJsonFile(ENV.REGISTRY_PATH, records);

  await logAuditEvent("publish_completed", { dryRun: String(dryRun), publishedCount: String(publishedCount) });
}
