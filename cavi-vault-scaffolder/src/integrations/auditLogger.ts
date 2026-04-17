import { ENV } from "../config/env.js";
import { appendLine } from "../storage/stateStore.js";
import type { AuditEvent } from "../types/domain.js";

export async function logAuditEvent(action: string, details: Record<string, string>, actor = "system"): Promise<void> {
  const event: AuditEvent = { timestamp: new Date().toISOString(), action, actor, details };
  await appendLine(ENV.AUDIT_LOG_PATH, JSON.stringify(event));
}
