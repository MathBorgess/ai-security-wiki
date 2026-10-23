# Sources, scope and provenance

Snapshot inspected on **2026-10-22**. The catalog represents the referenced DASF compendium, not an exhaustive index of all cybersecurity knowledge.

| ID | Primary source | Inspected content and limits |
|---|---|---|
| S1 | [DASF v3 official compendium](https://docs.google.com/spreadsheets/d/1lD5nKC1QNoUTDXdMp31NA9eKcUYGjhtC34MCfQpqpGo/edit) | All 97 risk rows, 73 control rows, seven applicability columns, metadata, source mappings, documentation hyperlinks, introduction, contents and 46 tool-list entries. The assessment template tabs are excluded. |
| S2 | [DASF v2 whitepaper](https://www.databricks.com/sites/default/files/2025-02/databricks-ebook-dasf-2.pdf) | §1.2 pp. 8–10 (workflow), pp. 99–103 (red-team method), p. 121 (CC BY-SA 4.0 license). Version 2 describes 62 risks; it is not the denominator for the v3 catalog. |
| S3 | [DASF v3 announcement](https://www.databricks.com/blog/agentic-ai-security-new-risks-and-controls-databricks-ai-security-framework-dasf-v30) | Published 2026-03-20; component 13 and 97/73 totals; official compendium link. Announcement, not measured effectiveness evidence. |
| S4 | [Databricks operationalization walkthrough](https://answers.databricks.com/guide-operationalize-databricks-ai-security-framework-dasf-nfdRMIYWhdc) | Public walkthrough transcript describing stakeholder intake, multiple deployment selections, Yes-based filtering and control aggregation. It illustrates the older 62-risk version; only its workflow is reused. |
| S5 | [MCP security best practices, 2026-07-28](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) | Confused deputy, token audience/passthrough, SSRF and state boundaries. Additional protocol lens; does not replace the DASF taxonomy. |
| S6 | [Official MCP TypeScript SDK](https://ts.sdk.modelcontextprotocol.io/v2/) | Server/client APIs and stdio integration. Exact package versions are pinned in package-lock.json. |

Databricks Security is the user-selected methodological source. Its published framework and implementation guidance demonstrate a documented practice, not a causal security or business outcome for this project. MCP maintainers provide the complementary protocol boundary lens. These sources do not endorse this repository.

## Compiled knowledge contract

`sources/compendium.json` is a public-tab extraction of the official workbook. It retains values, hyperlinks and cell notes. `scripts/build.mjs` compiles the searchable graph and linked pages. `sources/manifest.json` records content hashes, inventory and applicability counts. The original XLSX checksum is in the extraction. Generated source records preserve row locators.

Transformations normalize whitespace and XLSX control-character escapes, produce canonical identifiers, derive forward and reverse relationships, and create navigation. They do not silently reconcile conflicting links, revise framework edition labels, infer a missing applicability value or execute spreadsheet formulas.

Project-authored interpretation lives in the methodology, skill and control verification criteria. Every proposed test is explicitly unexecuted until the caller supplies real results. Source-reported descriptions and mappings are not endorsed as universally accurate.

## Complementary research

Inspected **2026-10-23**. These pinned references extend investigation methods; they do not change the DASF source snapshot, counts, applicability or official mappings. [Reading library](research/index.md) · [Machine-readable manifest](../sources/research.json).

| ID | Source and pinned revision | Inspected scope and limits |
|---|---|---|
| S7 | [PentAGI, 843dfeb](https://github.com/vxcontrol/pentagi/tree/843dfeb4bfc809c09d1bc5022e567c602d8fc9dd) | README, flow design, tool registry and MIT license. Architecture reference; not a tested integration or effectiveness claim. [Study](research/pentagi.md). |
| S8 | [Cloudflare security-audit-skill, c1c8a8c](https://github.com/cloudflare/security-audit-skill/tree/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8) | README, reconnaissance, AI/LLM boundaries, validation/reporting and MIT license. Selected method sections; no skill execution or upstream schema compatibility claimed. [Study](research/cloudflare-security-audit.md). |
| S9 | [Red Blue Field blueprint, 35baa4c](https://github.com/MathBorgess/red-blue-field/blob/35baa4c973c06a6d3d7424871407fa2b3204e4cf/docs/reference-blueprints.md) | Public design rationale connecting S7 and S8; implementation and experiment results not validated here. No lab code or private evidence imported. [Study](research/red-blue-field.md). |

These are the revisions used by the laboratory's public blueprint, not a latest-release claim. Original summaries and adaptations link to precise source files. [Third-party notices](../THIRD_PARTY_NOTICES.txt) retain MIT attribution; DASF-derived content retains its existing ShareAlike terms. The new playbook and ledger are project-authored teaching material, not copies of the upstream prompts or validators.

## Coverage boundaries

- The linked whitepaper and all external standards are cited; their complete texts are not copied into this repository.
- The private Databricks Academy course was not accessed. The implemented sequence is grounded in the public DASF whitepaper and operationalization walkthrough; exact parity with a particular course revision remains unverified.
- Third-party tool listings are historical source claims, not current tool recommendations or tested integrations.
- No private assessment fields, user documents, credentials or client-system evidence are included.
- The source introduction and graph contain [known inconsistencies](source-issues.md). The source matrix is a starting point for professional judgment.

## Updates

Follow [the update procedure](../docs/updating.md). A source change requires a reviewed diff of IDs, applicability, mappings, counts and links. Never fetch unreviewed live content at MCP startup. The dated snapshot remains reproducible when upstream changes.
