import type { InformationArchitecture } from "../types/domain.js";

export const INFORMATION_ARCHITECTURE: InformationArchitecture = {
  notionSections: [
    { name: "Sales Playbook", description: "Messaging and pipeline execution standards." },
    { name: "Onboarding Guides", description: "Role-based onboarding content." },
    { name: "SOP Library", description: "Repeatable operational procedures." },
    { name: "Meeting Notes", description: "Standardized meeting records and actions." },
    { name: "Decision Log", description: "Decisions, rationale, and impact." },
    { name: "Policies & Standards", description: "Cross-functional policy references." }
  ],
  notionDatabases: [
    { name: "Docs Registry", description: "Canonical list of all living documents.", properties: ["Title", "Owner", "Status", "Audience", "Notion URL", "Drive URL", "Drive File ID", "Last Reviewed", "Next Review"] },
    { name: "Meeting Notes DB", description: "Meeting records and follow-ups.", properties: ["Meeting Type", "Date", "Attendees", "Action Items", "Follow-up Date", "Owner", "Status"] },
    { name: "Decision Log DB", description: "Decision records.", properties: ["Decision", "Rationale", "Impact", "Approvers", "Effective Date", "Owner", "Status"] },
    { name: "SOP DB", description: "Operational playbooks.", properties: ["Process Name", "Trigger", "Steps", "Inputs", "Outputs", "Revision History", "Owner", "Status"] }
  ],
  lifecycleFields: ["Draft", "In Review", "Approved", "Archived", "Last Reviewed", "Next Review", "Doc Owner", "Backup Owner"],
  driveFolders: [
    { path: "/CaviVault/ClientFacing", description: "External delivery root." },
    { path: "/CaviVault/ClientFacing/{ClientName}/Decks", description: "Client decks." },
    { path: "/CaviVault/ClientFacing/{ClientName}/Contracts", description: "Client contracts." },
    { path: "/CaviVault/ClientFacing/{ClientName}/Media", description: "Client media." },
    { path: "/CaviVault/ClientFacing/{ClientName}/Reports", description: "Client reports." },
    { path: "/CaviVault/InternalAssets/AOP", description: "AOP assets." },
    { path: "/CaviVault/InternalAssets/PitchDecks", description: "Pitch deck source assets." },
    { path: "/CaviVault/InternalAssets/Brand", description: "Brand assets." },
    { path: "/CaviVault/InternalAssets/LegalTemplates", description: "Legal templates." }
  ]
};
