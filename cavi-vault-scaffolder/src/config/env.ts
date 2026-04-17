import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NOTION_TOKEN: z.string().optional(),
  NOTION_ROOT_PAGE_ID: z.string().optional(),
  GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string().optional(),
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY: z.string().optional(),
  GOOGLE_DRIVE_ROOT_ID: z.string().optional(),
  AUDIT_LOG_PATH: z.string().default("data/audit-log.jsonl"),
  REGISTRY_PATH: z.string().default("data/docs-registry.json"),
  OVERRIDES_PATH: z.string().default("data/admin-overrides.json")
});

export const ENV = envSchema.parse(process.env);
