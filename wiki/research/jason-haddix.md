# Jason Haddix study guide: reconnaissance, evidence and AI attack surfaces

Learn the discovery and investigation habits in Jason Haddix's public work, then adapt them carefully to the systems around an AI agent. Start with **TBHM and HUNT**; use **spikee** to study how AI evaluations differ from web reconnaissance. The resulting [map-attack-surface skill](../../skills/map-attack-surface/SKILL.md) prepares an evidence map and investigation backlog. It complements the [DASF audit method](../methodology.md).

Inspected **2026-10-23**: [78 public repositories](jhaddix-inventory.md), including **67 forks**. Selected files in 12 repositories were read; three small tool implementations and one detailed writeup received additional source inspection. A linked primary report and the current spikee upstream README were also read. No reconnaissance tool, exploit, model evaluation or target scan was executed.

## What deserves study first

| Read | What it teaches | A useful artifact to produce | Decision |
|---|---|---|---|
| [TBHM](https://github.com/jhaddix/tbhm/tree/8babc58da364fbd984b47cf3ed268da9c40dc7b7) | Discovery beyond the main app; application mapping; role and workflow questions; accurate reports | A scoped map of entry points, roles and neglected surfaces | Core source for the skill |
| [HUNT](https://github.com/jhaddix/HUNT/tree/f15c4e5257e4524c20abefc34b62a089eb9c4b6b) | A parameter alert suggests where to investigate; methodology tracking records what was covered | A ledger separating leads, planned checks and evidence | Core source; coauthored by JP Villanueva and Jason Haddix |
| [devops-attack-surface](https://github.com/jhaddix/devops-attack-surface/tree/f7f7ebc4273f4c1ba7174f8b0b3f5be71bcb7433) | Look around the app at repositories, builds, service identities and secrets systems | A diagram of who can change the code or credentials an agent uses | Study its categories; verify individual claims before reuse |
| [spikee upstream](https://github.com/ReversecLabs/spikee/tree/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514) | Separate dataset generation, target integration and judging; distinguish model, guardrail and application tests | A synthetic evaluation specification with an observable boundary | Next AI lab candidate, not executed or bundled here |

TBHM's inspected materials are historical web-security guidance. Its checklist also credits The Web Application Hacker's Handbook. Do not turn an old example, tool command, session-setting opinion or bounty policy into a present-day requirement. The transferable part is the sequence of questions and evidence discipline.

The DevOps repository credits a class by **Tom and Colbert from Accenture/FusionX**. Its README advertises `devops-attack-surface.html`, but that path is absent from the inspected tree, which contains `index.html`. Its README's MIT statement is not accompanied by a license file in that tree. This study used the categories, not the credential tables, exploitation commands or individual CVE claims.

## Understand the tools before using them

| Tool / inspected files | Input → operation → output | What the output does not prove | Study decision |
|---|---|---|---|
| SubreconGPT — README and Python implementation | Hostname seeds → a model-provider request, generated guesses and DNS queries → candidate names and resolution observations | Ownership, permission, vulnerability or complete discovery | Useful exercise in separating generated text from evidence; not a ready integration |
| awsScrape — README and Go implementation | Keywords → AWS range download and active TLS connections → certificate-subject matches | That an address belongs to the intended organization or is authorized for testing | Study the attribution problem; broad scanning is outside this task |
| CSPReconGO — README and Go implementation | URL → headless browser, response inspection and JavaScript downloads → referenced domains | That every dependency was found or that a referenced domain is owned/in scope | Source-review exercise; observed implementation caveat below |
| LinkFinder — README | JavaScript file or URL → text extraction → possible endpoints and parameters | Reachability, permission or exploitability | Prefer a saved synthetic JavaScript fixture for a future lab |
| HUNT — README | Proxy traffic → heuristic parameter alerts plus a methodology workspace → investigation leads and coverage notes | A confirmed vulnerability; its README explicitly separates alerting from manual testing | Distill the distinction and coverage habit |
| spikee — fork and upstream READMEs | Dataset + target adapter + judge → model/application interactions → judged results | That a canary match means a real unauthorized action or that untested workflows are safe | Design the target and success condition before any run |

The SubreconGPT snapshot calls `openai.ChatCompletion.create` with `gpt-3.5-turbo`, sends input hostnames to a provider and retries rate-limit errors in an unbounded loop. These are source observations, not a compatibility test. Its README's model description and license pointer do not fully match the inspected implementation/tree. Runtime, dependency versions, input disclosure and bounded retries would need review before use. Never place a real key in a shared command or report.

awsScrape filters the downloaded ranges to EC2 and CloudFront and initiates TLS connections. It is **active reconnaissance**, even though its result is certificate metadata. Matching a company keyword is an attribution lead, not target authorization.

CSPReconGO checks whether a header name contains `csp`; the normal `Content-Security-Policy` name does not contain that substring. This static observation undermines the advertised coverage for that snapshot. The README marks comparison between runs as TODO. No executable reproduction or upstream issue submission was performed.

The jhaddix spikee fork describes v0.1; the inspected upstream README describes v0.9.2 and separate judges, targets and multi-turn evaluation. Use the upstream revision for a future study. These are repository declarations, not installed versions or verified feature behavior. Attribution belongs to **Reversec Labs**, with historical WithSecure naming in the fork.

## Read reports as evidence, not recipes

`bug-bounty-reference` is a fork of **ngalongc's** categorized writeup index. `research` is a fork of **bl4de's** work. Neither makes all linked findings Jason Haddix's findings. `pentest-bookmarks` is a navigation aid, and its README itself describes incompletely reviewed categories.

Two readings illustrate a useful distinction:

- **bl4de's hidden-directory walkthrough.** The [inspected text](https://github.com/jhaddix/research/blob/638bb4157805dd4d4c1fab2c6409be2efc765019/hidden_directories_leaks/README.md) demonstrates how published development metadata can reveal source structure and configuration. It is a technical walkthrough with local examples, not a verified incident in this project. Its suggestion that a 403 proves a directory exists, or a 404 proves absence, is too strong: middleware and routing can produce those responses. Distill the deployment-artifact question, then require content and access evidence. Defensive adaptation: review publish allowlists and test that synthetic private build artifacts cannot be served.
- **Jack Whitton's login-token report.** His [2016 report](https://whitton.io/articles/obtaining-tokens-outlook-office-azure-account/) describes inconsistent URL interpretation around an authentication return destination, the resulting token disclosure and a reported fix. The timeline records reporting and triage on January 24 and patching on January 26, 2016. This is the author's historical account, not our reproduction or evidence of a current Microsoft vulnerability. The reusable question is whether validation and the eventual consumer interpret the same destination. For an agent, ask that question about callbacks, outbound requests and tool destinations; that connection is our adaptation.

For each future case, write: original author/date; environment and preconditions; trust boundary; observed evidence; claimed versus reproduced impact; reported remediation; present uncertainty; synthetic regression idea. Do not copy credentials, victim data, payload collections or a historical service target into the wiki.

## A study path with concrete outputs

1. **Map first.** Read TBHM Discovery and Mapping. Draw a fictional application's entry points, supporting services and roles. Keep candidates distinct from confirmed ownership and scope.
2. **Turn leads into questions.** Read HUNT's scanner and methodology sections. For each clue, state the missing observation and secure expected result. Record untested boundaries.
3. **Examine the surrounding infrastructure.** Read the DevOps categories. Add code, build, deployment and service-account authority to the map; do not assume a named product is vulnerable.
4. **Read a mechanism end to end.** Use the report-reading structure above. Translate the cause into a defensive invariant and a synthetic retest.
5. **Specify an AI evaluation.** Read the pinned spikee upstream README. Choose whether the subject is a model, guardrail or full application; define controlled input, allowed tools, expected behavior, observable violation and judge limitations. Execution is a later scoped lab.

These are proposed exercises. No completion, learning gain, security effectiveness, community uptake or professional outcome has been measured.

## The bridge to agent security

This mapping is an **AI Security Wiki adaptation**, not a Jason Haddix AI framework or an official DASF mapping.

| Reconnaissance question | Agent-system adaptation | Evidence to request |
|---|---|---|
| Where does input enter? | User messages, documents, retrieved chunks, memory, tool results | Data-flow diagram and input provenance |
| Who may perform an operation? | User delegation, service-account authority, tool grants and approvals | Per-operation authorization policy and enforcement point |
| What lies beyond the main app? | MCP servers, plugins, CI/CD, vector stores, external APIs | Ownership, deployment inventory and credential scope |
| Does a clue establish impact? | An unusual model answer may be harmless while a tool action crosses a boundary | Correlated action/data-access evidence and benign comparison |
| What was actually covered? | Model-only tests can omit retrieval, memory, tools and downstream effects | Coverage ledger with explicit untested paths |

After mapping, use [audit-ai-security](../../skills/audit-ai-security/SKILL.md): classify **all** applicable deployment patterns, then scope DASF risks and controls, investigate evidence and propose corrections. Do not equate a recon category with a DASF risk ID. The source catalog and its applicability matrix remain unchanged.

## What is deliberately deferred

Use the [full inventory](jhaddix-inventory.md) to inspect upstream projects before selecting tools. Older forks of Amass, SecLists, Nuclei templates and other projects are not maintained-version recommendations. Prompt-leak collections have unresolved provenance and reuse questions; synthetic examples are sufficient for the current skill. Post-exploitation and people-data collection are separate activities. CloudRecon's advertised branch was unavailable and its branches endpoint returned no branches, so its implementation remains unknown.

This delivery adds study material and a portable skill for review. It does not install a scanner, add an MCP tool, change the audit's authority or integrate an executable red-team workflow. See [source provenance](../../skills/map-attack-surface/references/sources.md) and [validation limits](../../docs/jhaddix-study-validation.md).
