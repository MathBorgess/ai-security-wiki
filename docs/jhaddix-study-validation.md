# Jason Haddix study and skill validation

The study distinguishes metadata triage, selected-file reading and executable validation. Inspected on **2026-10-23**. See the [study guide](../wiki/research/jason-haddix.md), [inventory](../wiki/research/jhaddix-inventory.md) and [fixed source revisions](../skills/map-attack-surface/references/sources.md).

## Research coverage

- GitHub search returned 78 public repositories: 67 forks and 11 non-forks. Repository metadata was inspected for all returned results.
- Selected files in 12 repositories were inspected. Three implementations were read: SubreconGPT, awsScrape and CSPReconGO. This is not a complete security audit of those tools.
- One detailed bl4de walkthrough, one primary Jack Whitton report and the current spikee upstream README were read. Historical author claims were not reproduced or treated as current vulnerabilities.
- Source files, metadata capture, run brief and evaluation artifacts are retained in a private workspace outside this checkout. Public material is original synthesis, citation metadata and synthetic cases.

## Skill evaluation

Delivery status: **unvalidated**. Four practical cases and four trigger prompts are included. An independent without-skill baseline and native-host automatic discovery are **not run**. No performance improvement, practitioner approval, client compatibility or security effectiveness is claimed.

Observed locally on macOS with Node.js 24.16.0:

| Check | Result | Limit |
|---|---|---|
| Factory package checker | `ok: true` | Structure and metadata only |
| Repository checks | 17/17 tests passed | Existing DASF/MCP behavior, source consistency and static-site properties |
| With-skill author walkthroughs | 4/4 accepted against both lenses; 20 criteria reviewed | Same author, same session, synthetic inputs; not independent model executions |
| Register consistency | Three JSON registers parse; asset references, statuses and not-run checks are consistent | The out-of-scope case correctly produces no register |
| Without-skill baseline | Not run; four planned cases excluded from denominators | No measured improvement |
| Native discovery | Not run; four planned prompts excluded from denominators | No measured trigger accuracy |

The two lenses share TBHM/HUNT sources and were applied by one author. No blocking defect was observed in those walkthroughs; that judgment is not practitioner approval. Private prompts, actual output artifacts, transcripts, reviews, environment and file hashes are retained outside the public tree. The exact runtime model snapshot/settings were not observed. A same-session review can find defects but cannot supply independent validation.

## Integration boundaries

The package is read through its activity name, `map-attack-surface`, and explicitly loads its bundled profile, methods, sources and rubric. A host must register/load the skill for native invocation; merely publishing Markdown does not establish that behavior. It is not installed globally.

The static site's existing Markdown rendering, canonical metadata and sitemap include the new study pages and skill references. Crawlability is not evidence of search indexing, assistant citation or adoption. The MCP implementation, tools, transports and DASF risk/control records are unchanged; this work prepares a reviewable study before any further method integration.
