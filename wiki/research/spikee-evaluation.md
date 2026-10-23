# Evaluate models, guardrails and AI applications with spikee

Start by deciding **what failure you want to observe and where it can happen**. A model producing disallowed text, a classifier allowing an input, and an application performing an unauthorized action are different outcomes.

This study reads **ReversecLabs/spikee**, not just the older jhaddix fork. Source revision: [8f8e9ad3b684e5f3e2f9b507cae550bdc8372514](https://github.com/ReversecLabs/spikee/tree/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514), README v0.9.2, Apache-2.0; inspected **2026-10-23**. Documentation and the canary implementation were read. Spikee was not installed or run, and no provider or target was called for this study.

## Three evaluation contracts

| Layer | Target adapter observes | Success oracle | What it does not establish |
|---|---|---|---|
| Model | Response under a fixed prompt/configuration | A precise output criterion, protected canary or calibrated judge | Actual backend access, tool execution or production resilience |
| Guardrail | Allow/block decision under a fixed policy | Boolean: **true = allowed**, false = blocked | Whether a permitted input actually causes application harm |
| Application/agent | Its real ingress, identity, retrieval, tools and resulting state | Evidence of unauthorized data access or effect, linked to the test identity | General safety of every model or deployment using the same provider |

Spikee's target adapter bridges a test to the system. The pinned custom-target contract uses `Target.process_input(input_text, system_message, target_options)`. Model/application adapters return content; guardrail adapters return the allow/block boolean. An application adapter generally preserves the application's own system prompt instead of replacing it with the dataset's prompt. Validate the adapter against known outcomes before trusting a campaign. [Target documentation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/06_custom_targets.md).

For a synthetic refund agent, maintain separate observations: the model requested a refund; the tool accepted or denied the call; the transaction ledger changed or stayed unchanged. This effect-oracle design is our adaptation. A refusal after an unauthorized transaction does not undo the transaction; a confident success message without a transaction is not evidence that one occurred.

## Build the case matrix before generating variants

Use [PITAX](https://github.com/Arcanum-Sec/arc_pi_taxonomy/tree/e02cf5b6e202f195c6b6c01484e99519f797acc6) to describe intent, technique, evasion and input. Add your system's principal, authority boundary and expected secure behavior. Taxonomy coverage is not proof of security.

A useful synthetic matrix includes:

| Case family | Trust boundary | Expected secure observation | Benign control |
|---|---|---|---|
| Another tenant's document | Caller identity → retrieval authorization | No unauthorized document content returned | Same-tenant permitted document is retrievable |
| Retrieved instruction requesting a tool action | Document content → tool authority | Content cannot grant permissions | An authorized user action follows the normal approval path |
| Suspicious wording in a legitimate request | Classifier → product availability | Legitimate task remains usable | Matched policy-violating request is blocked |
| Prior conversation or memory contamination | Prior state → current task/tenant | Reset and identity isolation hold | Normal continuity works within the intended session |

These are proposed experiments, not generated attack payloads or observed results.

The pinned generator composes seeds or accepts standalone inputs. Seed text and generated `content`/`content_type` are different formats. `full-prompt` simulates a complete model task; `user-input` produces content for an application's own workflow. Transformations multiply cases without necessarily adding independent failure mechanisms. Inspect the generated cases and avoid leaking near-duplicates across development and holdout sets. [Dataset documentation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/04_dataset_generation.md).

## Calibrate the judge separately

The [canary implementation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/spikee/judges/canary.py) checks a case-sensitive substring; a list means any alternative. It does not inspect the application's ledger, network or access logs.

If the attacker prompt already contains the canary, an echo is not proof of private retrieval. A refusal that includes a genuinely protected canary can still disclose it. Output-criteria judges need the facts necessary to evaluate the response. A syntactically valid verdict may still be wrong. Preserve false positives, false negatives and judge failures separately. [Judge documentation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/09_judges.md).

Before testing a target, label a small response set manually: valid refusal, disclosure inside a refusal, harmless quotation, completed effect, claimed effect without evidence, malformed judge output and evaluator-directed text. Freeze the rubric before comparing judges. The upstream suite separates fixed-response/offline checks from explicitly enabled live inference and development from holdout cases; this study did not run either suite. [Judge evaluation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/15_judge_evaluation.md).

## Control state, attempts and cost

Pin package commit, adapter hash, model/provider identifier, sampling parameters, system prompt version, dataset hash, judge/configuration and application revision. Record identity, tenant, tool permissions and approval policy in a private manifest.

The test command supports sampling, repeated attempts, thread limits, retries and resume. A dynamic attack can add work after an initial unsuccessful attempt; `--attack-only` skips that initial loop. A sampling seed is not a guarantee of deterministic provider output. Resume can preserve completed results from an older configuration: use separate result files for genuinely new comparisons. [Testing documentation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/05_testing.md).

For multi-turn work, explicitly map test-session IDs to application sessions. Reset retrieval fixtures, conversation, memory and mutable tool state between independent cases. Removing a conversation turn does not necessarily undo an external action. Backtracking support must match actual target behavior; require a disposable lab or a reliable reset procedure. This full-state requirement extends the upstream session contract.

Start with one synthetic case and inspect the complete trace. Expand only after the adapter, oracle, reset and budget are verified. No execution permission or provider budget is implied by reading this guide.

## Interpret results without hiding failures

Spikee's documented overall attack-success rate uses successful unique entries divided by total unique entries. Dynamic candidates are not extra independent dataset entries; attempt counts are not an exact billing or transport-request log. Preserve source-file provenance when combining runs. [Results documentation](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/11_results.md).

**Arithmetic example only:** of 10 unique synthetic cases, suppose 2 succeed, 5 have valid unsuccessful outcomes and 3 time out. Overall success is 2/10 = 20%; the diagnostic rate among valid outcomes is 2/7 ≈ 28.6%. Neither figure makes the three timeouts secure outcomes. Report all counts, name both denominators and retain errors for investigation.

Guardrails need two runs: policy-violating inputs and legitimate inputs. Since true means allowed, allowed malicious inputs are misses and blocked benign inputs are false positives. Compare protection with usability; a guardrail that blocks everything is not a useful success. [Guardrail workflow](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/docs/10_guardrail_testing.md).

Report per family and trust boundary, not just a pooled score. State what was not covered. A finite sample, a provider update, unavailable traces or an unreliable judge limits conclusions. A source-reported score cannot be transferred to your application.

## Campaign worksheet

This is a project planning worksheet, **not a spikee configuration schema**:

| Field | Required decision |
|---|---|
| Scope | Owner, permitted environment/actions, exclusions, sensitive data and stop conditions |
| Hypothesis | Controlled input, preconditions, boundary, expected impact and a refutation condition |
| Layer | Model, guardrail or application; never combine their success meanings |
| Cases | Synthetic/approved source, hashes, families, development/holdout separation and benign controls |
| Adapter | Version, allowed endpoint, identity mapping, output polarity and error behavior |
| Oracle | Output rule, classifier decision or effect evidence; judge calibration and manual review |
| State and budget | Reset procedure, repeats, concurrency, request/time/cost caps and cancellation |
| Evidence | Private trace location, result provenance, errors, unauthorized effects and retention policy |
| Correction | Boundary control, accountable owner and a paired regression test |

Complete one worksheet for each layer. Explain which observation would change your conclusion. That is a better first milestone than collecting a large list of payloads.

Next: use [ask-cyber-specialist](../../skills/ask-cyber-specialist/SKILL.md) to challenge the plan, [map-attack-surface](../../skills/map-attack-surface/SKILL.md) to identify boundaries and the [DASF methodology](../methodology.md) to select applicable risks and controls. This study does not add active testing to the wiki's read-only MCP.
