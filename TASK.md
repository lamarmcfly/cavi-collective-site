# TASK

## 2026-04-09 — Marketing site visual refresh

Light editorial marketing theme (teal accent, warm neutrals), `BrandLogo` with PNG→SVG fallback, `GlassCard` `appearance` prop for light/dark, dashboard remains dark via layout wrapper.

## 2026-04-09 — SMB bundles + growth copy

`marketing-copy.ts`: 66+ floor (`AGENT_COUNT_FLOOR`), `getAgentCountForMarketing()`, starter/pricing SMB blocks, FAQ. Home `StarterBundles` section; pricing starter cards; enterprise callout; pilot + meta + footer metrics aligned.

## 2026-04-09 — Warm playbook voice + Cavi difference + workflow ladder

`marketing-copy.ts`: `CAVI_DIFFERENCE`, `HUMAN_IN_THE_LOOP`, workflow ladder + examples, security FAQ plain English, `CONSULTATION_META_DESCRIPTION`. New home sections `cavi-difference.tsx`, `workflow-ladder.tsx`; hero, governance (human-first), CTA, footer, pricing/enterprise/pilot copy aligned.

## 2026-04-09 — Typography + hero density

Site typography: Inter via `next/font` (`--font-inter`) for UI and headings; JetBrains Mono unchanged.

## 2026-04-09 — Hero uses Cavi difference lede

Home hero copy is `CAVI_DIFFERENCE` tag, title, and `paragraph1`; stats row and CTAs unchanged. Removed `HERO_HEADLINE` / `HERO_VALUE_LINES` / `HERO_BRIDGE`.

## 2026-04-09 — Integrations non-exhaustive copy

Division pages: `INTEGRATIONS_SECTION_DESCRIPTION`, `INTEGRATIONS_FOOTNOTE`, `INTEGRATIONS_OVERVIEW_LABEL` in `marketing-copy.ts`; overview row “Example integrations” / “{n} shown”; integrations section description + footnote under chips.
