import { ENV } from "../config/env.js";
import { DriveClient } from "../integrations/driveClient.js";
import { NotionClient } from "../integrations/notionClient.js";
import { runScaffold } from "./scaffold.js";

function validateRequiredEnv(): string[] {
  const missing: string[] = [];
  const required = ["NOTION_TOKEN", "NOTION_ROOT_PAGE_ID", "GOOGLE_SERVICE_ACCOUNT_EMAIL", "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY", "GOOGLE_DRIVE_ROOT_ID"] as const;
  for (const key of required) {
    const value = ENV[key];
    if (!value || value.trim().length === 0) missing.push(key);
  }
  return missing;
}

export async function runBootstrap(dryRun: boolean): Promise<void> {
  console.log("Starting Cavi bootstrap...");
  if (dryRun) {
    console.log("Dry run mode detected. Use --live for real bootstrap.");
    await runScaffold(true);
    return;
  }

  const missing = validateRequiredEnv();
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }

  console.log("Validating Notion authentication...");
  await new NotionClient(false).validateConnection();
  console.log("Validating Google Drive authentication...");
  await new DriveClient(false).validateConnection();
  console.log("Running scaffold on live services...");
  await runScaffold(false);
  console.log("Bootstrap complete.");
}
