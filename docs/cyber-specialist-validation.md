# Pocket specialist: evidence and validation

The [ask-cyber-specialist package](../skills/ask-cyber-specialist/SKILL.md) supports explanations, hypothesis reviews and study planning. Its [source ledger](../skills/ask-cyber-specialist/references/sources.md) and [media study](../wiki/research/jason-haddix-media.md) distinguish public methods, original adaptations and material not viewed.

## Evaluation protocol

Observed **2026-10-23**, macOS arm64, Codex CLI **0.162.1**, configured model **gpt-6-astra**, reasoning effort **medium**. The CLI JSON trace did not expose an immutable backend model snapshot. Cases used fresh ephemeral sessions and identical synthetic core prompts, a common evaluation instruction file and the same available tool restrictions.

The candidate had the package registered in a project-local `.agents/skills/ask-cyber-specialist` directory; the baseline did not have this package. Apps, plugins, configured MCP servers and web search were disabled for the scored runs. The command sandbox was read-only. No global skill installation, target scan or provider attack test occurred.

Eight initial practical executions covered normal, missing-input, conflicting-guidance and outside-scope requests in both conditions. Four separate automatic-discovery prompts covered two positive activity requests and two negative adjacent requests. Native selection was measured from actual skill-file reads in the event trace, not from the model merely claiming to use a skill.

A fresh reviewer received the core prompts, source-backed criteria and outputs labeled A/B with the condition mapping withheld. Both lenses were applied by the same model family; wording or citations may reveal clues about the condition, so blinding is partial. This is independent execution context, not an independent human or practitioner evaluation.

## Results and delivery status

Delivery status: **validated** for this bounded synthetic Codex run. The additional explicit outside-scope invocation loaded the package and passed both lenses in a fresh review (1/1). Together with the three in-scope initial runs, all four practical case types have accepted outputs with the package actually loaded. This does not erase or pool the separate automatic-routing observation.

| Check | Observed result | Interpretation |
|---|---|---|
| Package structure | Passed | Required files, metadata and case shape |
| Repository and site | 17/17 tests passed | Source integrity, MCP behavior, public links and publication allowlist |
| Practical cases, package available | 4/4 accepted | Three in-scope executions loaded the skill; the outside case correctly routed without loading it |
| Practical cases, no package | 1/4 accepted under the frozen rubric | Useful answers still missed required controls/retests, interview bounds or evaluation calibration/state details |
| Automatic discovery | 4/4 correct selections | Both activity requests loaded the package; asset-register and biography requests did not |
| Human learning and real-system protection | Not measured | No proficiency, detection-efficacy or compliance claim |

Acceptance uses the package's declared output contract; it is not a neutral universal ranking of general-purpose answers. In particular, the baseline interview exceeded the package's three-question limit. The sample is small, synthetic and unrepeated; there is no statistical or cross-model improvement claim.

The outside case originally tested host routing, not an executed package. An additional explicit invocation checked the package's own boundary response and was accepted (1/1), separately from the four automatic-discovery prompts. Its core task was unchanged; the invocation prefix is an explicit treatment difference.

## Reproduce and review

Read the frozen [case definitions](../skills/ask-cyber-specialist/evals/evals.json) in the repository. Use separate fresh directories for the no-package baseline and candidate, with the same constraints and model settings. Register the complete package using the host's supported mechanism. Keep private input, output, event traces, failures, hashes and condition mappings outside public checkouts.

For practical boundary cases, distinguish explicit invocation from automatic availability. For discovery, omit the skill and practitioner names from positive prompts and record actual selection. Do not equate installation, loading and successful behavior.

This run used Codex project registration. Claude, ChatGPT and other clients were not tested with this package; publishing Markdown or an OpenAI display file does not prove their automatic discovery. The website exposes a readable reference; the offline MCP retains its existing capability boundary.

## Scope

No upstream payload corpus or private assessment evidence is published. The spikee study is documentation/code reading and a proposed evaluation design; spikee itself was not executed. The new profile is an original synthesis inspired by public work, not Jason Haddix's identity or approval.

Final packaging changes after the behavioral runs expand one already-pinned HUNT link to its full commit and update status annotations; workflow instructions are unchanged. Private transcripts, prompts, reviews, revisions and hashes are retained outside the public tree.

The local site build produced 235 HTML pages and retained 170 DASF search entries. The spikee guide and its link to the skill were opened successfully in the browser. These pages are review artifacts until their PR is integrated and deployed; no search indexing or assistant adoption was measured.
