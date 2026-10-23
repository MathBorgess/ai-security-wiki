# Jason Haddix study and skill validation

Inspected **2026-10-23**. See the [study](../wiki/research/jason-haddix.md), [inventory](../wiki/research/jhaddix-inventory.md) and [pinned sources](../skills/map-attack-surface/references/sources.md). Metadata triage, source reading and behavioral evaluation are distinct evidence.

## Research coverage

GitHub search returned 78 public repositories: 67 forks and 11 non-forks. Metadata was inspected for all results; selected files in 12 repositories were read, including SubreconGPT, awsScrape and CSPReconGO implementations. A bl4de walkthrough, a Jack Whitton primary report and current spikee README were also read. These are not complete tool audits or reproductions of historical findings.

Raw source captures, prompts, outputs, events, hashes, reviews and failed attempts remain privately outside public trees. Public material is original synthesis and synthetic cases.

## Delivery status and protocol

**Validated for the bounded synthetic Codex evaluation**, package **0.1.1**. Final acceptance: **4/4 practical cases with the package explicitly invoked**, versus **1/4 without it**, under the frozen rubric. Final automatic discovery: **4/4**. No real-system effectiveness, human proficiency, practitioner approval or cross-client compatibility is established.

Observed: macOS arm64; Codex CLI **0.162.1**; configured model **gpt-6-astra**, reasoning effort **max** for activity/discovery and **medium** for fresh reviews. The JSON trace did not expose an immutable backend model snapshot.

Both conditions used fresh ephemeral sessions, identical synthetic core tasks, common evaluation instructions and read-only command access. Apps, plugins, configured MCP servers and web search were disabled for scored runs. The candidate was registered in a project-local `.agents/skills/map-attack-surface`; the baseline lacked this generated package, with other host defaults shared. No global installation occurred.

The four published cases were frozen before execution and are regression cases, not unseen holdouts. The initial candidate condition made the skill available for automatic use. Its outside-scope response did not load the package. The final practical condition adds native `$map-attack-surface` invocation to the same core tasks: an explicit treatment difference. Automatic discovery uses separate prompts, without the skill/practitioner name on positive requests.

A fresh reviewer received actual outputs labeled A/B, core tasks and both source-backed lenses, with the condition mapping withheld. Content can still reveal clues, so blinding is partial. One model family supplied both lenses. Independent context is not an independent human or practitioner review.

## Results and revisions

| Stage | Observed result | Finding |
|---|---|---|
| Earlier author walkthroughs | 4/4 accepted by the author | Historical same-session work, excluded from independent counts |
| Initial independent practical comparison | Available-package 1/4; baseline 1/4 accepted | Two candidate answers omitted sanitized/private evidence handling. The unloaded outside response offered an imagined first-person biography of a real researcher, contrary to the frozen contract. |
| Initial automatic discovery | 3/4 | Full DASF audit loaded the skill to check scope, then correctly routed away; conservatively counted as unwanted selection. |
| Revision 1 | Discovery 4/4 | Trigger now requires an explicit mapping deliverable. Three intermediate scope outputs were retained but not independently graded or pooled into final acceptance. |
| Revision 2 | Explicit practical cases 4/4; retained baseline 1/4 | Added explicit sanitized/private intake handling and an unrelated-request boundary. All four core tasks rerun. |
| Final automatic discovery | 4/4 | Two mapping requests loaded it; full DASF audit and biography did not. |
| Final register checks | 3/3 pass | JSON parses, asset references resolve, scope/claim values are valid and checks remain not-run. Outside case produces no register. |
| Factory structure | Passed | Files and metadata only |
| Repository checks | 17/17 passed locally | Source integrity, MCP behavior and site properties; no target-protection claim |

The final reviewer initially left the outside response's citation unverified because its evidence packet omitted the cited SKILL file. A supplemental fresh review received an exact copy and read-command records, verified the quotation and accepted the **unchanged** answer. The output and rubric were not revised to obtain acceptance. Full successful read events remain private.

Baseline answers were often useful but missed required prioritization/secure expectations, ownership unknowns or privacy guidance. This measures the declared skill-derived contract, not universal answer quality. Final cases/triggers have one sample each; no statistical improvement claim is made.

An unscored preflight demonstrated loading but started configured MCP connectors. Scored runs explicitly disabled them; the preflight is excluded from all denominators. No network reconnaissance or real-target assessment occurred.

## Integration boundaries

Native selection was observed from actual file reads, not a self-report. The package loads its profile, methods, sources and rubric. Codex was tested; Claude, ChatGPT and other hosts were not. Publishing Markdown does not register a skill.

The site exposes HTML/Markdown, canonical metadata and a sitemap. Crawlability does not prove indexing, assistant citation or adoption. MCP code, tools, transport and DASF records are unchanged by this PR. Validation does not authorize merging or publishing later security-method changes.
