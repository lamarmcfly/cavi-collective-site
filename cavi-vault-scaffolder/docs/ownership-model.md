# Ownership Model

## Roles
- **Platform Owner**: Owns integration credentials, release process, and incident approvals.
- **Knowledge Ops Lead**: Owns information architecture, templates, and document lifecycle compliance.
- **Team Editors**: Maintain content quality and review cadence in Notion.
- **Team Viewers**: Consume internal docs without editing privileges.
- **Client Access Manager**: Approves and audits external sharing through Drive.

## Decision Rights
- Permission changes require Platform Owner or Client Access Manager approval.
- New document templates require Knowledge Ops Lead approval.
- External sharing exceptions require explicit justification in `data/admin-overrides.json`.

## Cadence
- Daily: `sync`, `publish`, `govern`
- Weekly: audit log review + stale document review
- Monthly: access review and override cleanup

## Continuity and Team Accessibility
- Automation runs in GitHub Actions, not a personal workstation.
- Secrets are managed in repository secrets.
- Non-technical teammates can trigger manual runs from Actions UI.
