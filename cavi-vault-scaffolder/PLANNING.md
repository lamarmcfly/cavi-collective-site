# Cavi Vault Workspace Scaffolder

## Purpose
This project provides an automation service that scaffolds and governs a Notion-first internal wiki, with Google Drive as the client-facing asset layer.

## Architecture
- Runtime: Node.js + TypeScript command service
- Integrations: Notion API, Google Drive API
- Storage: Local JSON state for bootstrap; production-ready for hosted secret stores
- Execution model: CLI commands + scheduled automation

## Core Domains
- Information architecture scaffolding for Notion and Drive
- Permission policy enforcement with admin overrides
- Metadata sync between Notion records and Drive assets
- Publish workflows with audit logging

## Naming Conventions
- Source code in `src/`
- Feature modules in `src/modules/`
- Integration clients in `src/integrations/`
- Config in `src/config/`
- Type definitions in `src/types/`

## Delivery Constraints
- Keep workflows independent from a single operator machine.
- Support non-technical team members through guided commands and documentation.
