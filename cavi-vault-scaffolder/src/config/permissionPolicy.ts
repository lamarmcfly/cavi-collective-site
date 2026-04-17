import type { PermissionOverride, PermissionRule } from "../types/domain.js";

export const BASE_PERMISSION_RULES: PermissionRule[] = [
  { tier: "Editor", notionAccess: "edit", driveAccess: "edit", scope: "internal" },
  { tier: "Viewer", notionAccess: "view", driveAccess: "view", scope: "internal" },
  { tier: "External Viewer", notionAccess: "none", driveAccess: "view", scope: "external" }
];

export const DEFAULT_PERMISSION_SETTINGS = {
  internalDomainAllowlist: ["@cavi.vault", "@privatemail.com"],
  sharingDefaults: { notionExternalSharing: false, driveExternalSharing: "allowlisted-only" },
  reconciliationIntervalHours: 24
} as const;

export const DEFAULT_ADMIN_OVERRIDES: PermissionOverride[] = [];
