import { google, type drive_v3 } from "googleapis";
import { ENV } from "../config/env.js";
import type { DriveFolderTemplate, RegistryRecord } from "../types/domain.js";

export class DriveClient {
  private readonly drive: drive_v3.Drive | null;

  constructor(private readonly dryRun = true) {
    if (dryRun || !ENV.GOOGLE_SERVICE_ACCOUNT_EMAIL || !ENV.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
      this.drive = null;
      return;
    }
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: ENV.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: ENV.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n")
      },
      scopes: ["https://www.googleapis.com/auth/drive"]
    });
    this.drive = google.drive({ version: "v3", auth });
  }

  async createFolderTemplate(folder: DriveFolderTemplate): Promise<void> {
    if (!this.drive || !ENV.GOOGLE_DRIVE_ROOT_ID || folder.path.includes("{ClientName}")) return this.log("create_folder", folder.path);
    await this.ensureFolderPath(folder.path);
    this.log("create_folder", folder.path);
  }

  async publishRecordAsset(record: RegistryRecord): Promise<{ driveUrl: string; driveFileId: string }> {
    if (!this.drive || !ENV.GOOGLE_DRIVE_ROOT_ID) {
      const driveFileId = `drv_${record.id}`;
      return { driveFileId, driveUrl: `https://drive.google.com/file/d/${driveFileId}/view` };
    }
    const parentId = await this.ensureFolderPath("/CaviVault/ClientFacing/PublishedFromNotion");
    const file = await this.drive.files.create({
      requestBody: { name: `${record.title}.txt`, mimeType: "text/plain", parents: [parentId] },
      media: { mimeType: "text/plain", body: `Title: ${record.title}\nNotion: ${record.notionUrl ?? "N/A"}\n` },
      fields: "id,webViewLink"
    });
    const driveFileId = file.data.id ?? `drv_${record.id}`;
    return { driveFileId, driveUrl: file.data.webViewLink ?? `https://drive.google.com/file/d/${driveFileId}/view` };
  }

  async enforceAccess(resourceId: string, access: "edit" | "view" | "none", principal?: string): Promise<void> {
    if (!this.drive || !principal || access === "none") return this.log("enforce_access", `${resourceId}:${access}:${principal ?? "unknown"}`);
    await this.drive.permissions.create({
      fileId: resourceId,
      sendNotificationEmail: false,
      requestBody: { type: "user", role: access === "edit" ? "writer" : "reader", emailAddress: principal }
    });
    this.log("enforce_access", `${resourceId}:${access}:${principal}`);
  }

  async validateConnection(): Promise<void> {
    if (!this.drive || !ENV.GOOGLE_DRIVE_ROOT_ID) {
      throw new Error("Google Drive client is not configured. Missing service account credentials or GOOGLE_DRIVE_ROOT_ID.");
    }
    await this.drive.files.get({ fileId: ENV.GOOGLE_DRIVE_ROOT_ID, fields: "id,name" });
    this.log("auth_ok", "Google Drive API connection verified");
  }

  private async ensureFolderPath(fullPath: string): Promise<string> {
    if (!this.drive || !ENV.GOOGLE_DRIVE_ROOT_ID) return ENV.GOOGLE_DRIVE_ROOT_ID ?? "root";
    const segments = fullPath.split("/").filter(Boolean);
    let parentId = ENV.GOOGLE_DRIVE_ROOT_ID;
    for (const segment of segments) {
      const existing = await this.drive.files.list({
        q: [`'${parentId}' in parents`, `name='${segment.replace(/'/g, "\\'")}'`, "mimeType='application/vnd.google-apps.folder'", "trashed=false"].join(" and "),
        fields: "files(id)",
        pageSize: 1
      });
      const existingId = existing.data.files?.[0]?.id;
      if (existingId) parentId = existingId;
      else {
        const created = await this.drive.files.create({
          requestBody: { name: segment, mimeType: "application/vnd.google-apps.folder", parents: [parentId] },
          fields: "id"
        });
        parentId = created.data.id ?? parentId;
      }
    }
    return parentId;
  }

  private log(action: string, value: string): void {
    console.log(`${this.dryRun ? "[dry-run:drive]" : "[drive]"} ${action}: ${value}`);
  }
}
