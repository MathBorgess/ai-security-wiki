# Validation and evidence limits

Observed on **2026-10-22**, Node.js 24.16.0, local macOS. The original extraction used the official public XLSX. The user-supplied copy was compared against the official risk and control tables; differences were limited to character encoding. Private assessment-template content was not published.

## Observed software results

| Check | Observed result | What this establishes |
|---|---|---|
| Deterministic compilation | 196 generated artifacts match the source extraction | Reproducible transformation of the reviewed snapshot |
| Inventory | 97 risks, 73 controls, 13 components, seven patterns, 804 forward links | Coverage of the referenced compendium tables |
| Source applicability | Per-pattern Yes counts: 61, 34, 50, 52, 17, 14, 35 | Filtering matches the inspected source columns |
| Compound system | RAG + foundation + external + agentic selects 75 risks and 71 controls | Union/dedup behavior; supporting risks are retained |
| Source discrepancies | Ten controls have nonreciprocal source links; blanks remain null | Differences are visible instead of silently repaired |
| Software suite | 17 tests passed: 12 reference/MCP checks and five static-site checks | Catalog invariants, classification, scoping, search, errors, protocol behavior and website properties described below |
| MCP integration | Real SDK client called all ten tools and read all 170 risk/control resources | Usable stdio tool/resource/prompt surface, including execution from a different working directory |
| Legacy interoperability | 2025-11-25 initialize/list/call sequence passed | That tested protocol sequence works alongside the current SDK client |
| Synthetic security example | Vulnerable cross-tenant read reproduced; corrected read denied; legitimate read succeeds | The in-memory authorization example enforces its tested boundary |
| Skill structure | Factory package checker returned ok=true | Required package files and metadata exist; not domain validation |
| Dependency advisory scan | npm audit --omit=dev reported zero findings at inspection | No known advisory reported by that registry check at that time; not proof of absence |

Tests exercise malformed pattern lists, oversized inputs, unknown IDs, arbitrary resource paths, untrusted observations, source citations, all record lookups and the absence of an automatic “verified” claim. Source-specific assertions include the surprising 9.1 applicability row; a separate project-authored review candidate keeps it visible for RAG and agentic systems.

Run `npm run check` and `npm run demo` to reproduce the executable checks. GitHub CI additionally targets Node 22 and 24; inspect the actual check run for its current status rather than treating the configuration as a result.

## Website checks

The local build generated 219 HTML pages with Markdown alternatives and a server-rendered list of all 170 risks and controls. Five additional tests check metadata and inventory, internal links and anchors, safe Markdown rendering, the public-file allowlist, sitemap coverage, deployment URL validation and guarded build-output replacement.

Browser inspection covered the homepage at 1200px and 390px wide, the audit guide at 390px, search results and an empty result, and navigation from the homepage to the checklist. The observed views had no horizontal document overflow. A separate visual reviewer checked the supplied desktop/mobile captures and confirmed the final breadcrumb correction. That review is not owner acceptance, an exhaustive accessibility audit or a live deployment check.

The website provides crawlable text, canonical links, structured metadata, a sitemap and agent-readable alternatives. Search indexing, rankings, assistant citations and developer adoption remain unverified. Native Claude Code and Codex registration commands were checked against their documentation; those client integrations were not executed.

## Research-library addition — 2026-10-23

On local macOS with Node.js 24.16.0, `npm run check` passed **20 tests**. The source graph remains 97 risks, 73 controls and 804 links; the catalog bytes are unchanged from the initial snapshot. The six complementary guides/templates bring the static build to **225 HTML pages**, each with a Markdown alternative, and **176 searchable homepage entries** (170 DASF records plus six research references).

The real stdio SDK test reads all 19 allowlisted reference documents through both the resource and tool interfaces and compares their content, in addition to all 170 catalog resources. Discovery returns 190 resources and the same ten tools. Tests cover reference search with pinned source provenance, catalog-only kind filters, invalid reference names/URLs/paths, supplemental method links and publication of the source manifest and license notices.

Browser inspection verified the `PentAGI` query (two matching reading entries), the research-only filter (six entries), navigation to the Cloudflare reading and that page at 1200px and 390px with no horizontal document overflow. These are local software and reading checks. No upstream skill/agent execution, real-target audit, independent security review or indexing/adoption measurement was performed for this addition.

## Skill evaluation status: unvalidated

The package has four practical cases (normal, missing input, conflicting guidance, out of scope), five trigger prompts and two source-backed review lenses. Four cases were exercised as a same-session author walkthrough, using actual outputs from the server’s domain functions for the relevant steps. Both lenses accepted the four walkthrough outputs (4/4). This is a self-review of synthetic artifacts, not an independent domain benchmark.

An independent without-skill baseline and actual native-host automatic discovery were **not run**. Baseline cases executed: none (four planned, excluded from denominators). Actual trigger selections executed: none (five planned, excluded from denominators). No performance improvement, trigger accuracy or generalization rate is claimed. Private prompts, tool outputs, critiques and limitations are retained outside this public repository.

## Not established

- Protection or compliance of a real ML, GenAI or agentic deployment.
- Successful adversarial evaluation against a real LLM or live third-party system.
- Equivalent behavior in every agent host; native registration and selection are host-dependent.
- Exact parity with a particular private Databricks Academy course revision.
- Completeness or currency of every external standard mapping and vendor documentation link.
- Independent expert acceptance, owner learning, community uptake, career benefit or revenue.

The repository can be used as a reference and tested software while those limits remain explicit. Do not promote a successful structural or protocol test into a claim of security effectiveness.
