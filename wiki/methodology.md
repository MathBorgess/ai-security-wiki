# Evidence-first AI security assessment

This workflow is a project adaptation of DASF v2 §1.2 (pp. 8–10), its red-team guidance (pp. 99–103), the DASF v3 compendium and the [official operationalization walkthrough](https://answers.databricks.com/guide-operationalize-databricks-ai-security-framework-dasf-nfdRMIYWhdc). [Source register](sources.md).

## 1. Understand the system before filtering

Record the use case, datasets, stakeholders, applications and applicable obligations. Draw the data flow: user → model → retrieval/memory → tools → downstream services → outputs. Identify principals, sensitive assets, tenants, execution boundaries, model providers, training stages and human decision points. Define the authorized assessment environment and prohibited operations.

Use `classify_system` with explicit yes/no/unknown features. An absent answer stays unknown. Do not choose “agentic” as a substitute for the rest of the architecture. A support agent can simultaneously use RAG, a foundation model and an external provider. Pretraining means performing pretraining or continued pretraining in this taxonomy; using a pretrained model does not by itself select that pattern.

## 2. Select risks and controls, preserving uncertainty

Use `scope_risks` with every established deployment pattern. Match a risk if **any** selected source column contains Yes. Deduplicate the controls referenced by those risks. Preserve No, blank and Yes as different values.

Then review the filtered-out and unspecified risks against the actual architecture. Read `architecture_review_candidates` and [source issues](source-issues.md). The source has known limitations, including the prompt-injection applicability row. A default filter is a starting point, not a security boundary. Record explicit additions, exclusions, rationale and owner; label additions as project/assessor judgments.

Source forward links from the risk table drive the actionable graph. The control table’s reverse links are also retained; their discrepancies are visible. Source mappings to MITRE, OWASP, NIST, ISO and other frameworks are attributed references with their original editions, not an independently validated compliance mapping.

## 3. Turn each risk into a falsifiable investigation

Call `investigate_risk`. State an asset, adversary capability, entry point, trust boundary, prohibited effect and expected enforcement. Ask for effective configuration and redacted runtime evidence before proposing active tests.

Example hypothesis: “A retrieved document can cause a ticket tool to copy another tenant’s data into a new ticket.” Inspect the retrieval filters, authenticated user context, tool arguments and downstream authorization. A prompt saying “never do this” does not prove the downstream boundary is enforced.

For ML, include data provenance, poisoning, training and model artifact supply chains, evaluation slices, deployment and monitoring. For GenAI, include input/output handling, retrieval and model-provider boundaries. For agents, add memory, tool metadata, privileges, state changes, approval binding, budgets, client/server identity and inter-agent delegation.

## 4. Test within the authorized boundary

Prefer synthetic data, disposable environments and harmless canaries. Define expected results and stop conditions first. Use a bounded budget and record target/version/time, inputs, actor identity, observed effects and the evidence locator. Include a legitimate use case so that blocking everything does not masquerade as a successful correction.

Combine reproducible automated checks with manual examination of ambiguous or multi-step failures. Automated scoring and self-review have limits. No tool or model output is a substitute for independent evidence of a side effect or control decision.

## 5. Propose a concrete correction and verify it

Call `get_control` and `propose_remediation` for relevant findings. Each proposal needs an owner, enforcement location, minimal change, dependencies, rollback, expected effect and retest criterion. Choose controls for the observed gap; do not deploy every product in the catalog indiscriminately.

Prioritize using business impact, reachability, exposed privileges/data, current mitigations and uncertainty. Do not invent CVSS, likelihood or financial-loss values from a risk label. Track findings as **unverified**, **confirmed**, **refuted**, or **resolved with retest evidence**. A human can accept residual risk; the MCP cannot invent that decision.

## 6. Explain when asked

Use the user’s language. Describe what the system was supposed to do, what happened or might happen, how the trust boundary failed, who or what could be affected, and how the correction will be tested. Define technical terms through a short example. Distinguish source guidance, a caller’s report, your inference and an observed result. Link the DASF risk/control IDs and the actual evidence.

Use [the finding template](templates/finding.md). Keep credentials, personal data and target-system assessment evidence outside this public repository.
