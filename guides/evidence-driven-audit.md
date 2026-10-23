# Evidence-driven AI security audit: hypothesis, coverage and retest

Use this playbook after classifying the system and selecting every applicable DASF deployment pattern. It turns a risk label into a testable question and keeps incomplete investigations visible.

This is a **project-authored adaptation** drawing on [PentAGI](../wiki/research/pentagi.md), [Cloudflare's audit method](../wiki/research/cloudflare-security-audit.md) and the [Red Blue Field blueprint](../wiki/research/red-blue-field.md). The example below is synthetic and **not executed**. It is separate from the repository's [executed in-memory tenant example](../examples/tenant-boundary.md).

## 1. Classify and bound the work

Example system: a support assistant uses an external foundation model, retrieves tenant documents and calls a ticket tool. Classify RAG, foundation model, external model and agentic AI together. Record the authorized repository/environment, actor identities, synthetic data, time and action budgets, prohibited operations and a stop condition.

Use `classify_system`, then `scope_risks` and `build_audit_plan`. Review [source caveats](../wiki/source-issues.md) before excluding any risk. A reading link below does not override the source matrix.

## 2. Write a claim that can be disproved

**Hypothesis:** an attacker who can edit one retrieved support document can cause the assistant to create a ticket in another tenant using the tool's service credential.

**Trace to inspect:** document write permission → retrieval scope → consuming user's context → proposed arguments → tool dispatcher → requester/resource authorization → persisted ticket.

**Refutation:** the final handler checks the authenticated requester and target tenant, denies the synthetic cross-tenant operation and leaves no ticket behind. A malicious document changing the assistant's wording is not sufficient evidence of a data or action failure.

Inspect final arguments, effective identity and existing controls before proposing an active test. If source or deployed behavior is unavailable, record the exact missing fact. A source-level candidate is not a confirmed runtime effect.

## 3. Track coverage and observations

Create one [coverage unit](../wiki/templates/coverage-ledger.md) for each relevant entry, boundary and execution path. For the ticket operation, direct calls, queued calls, retries and resumed sessions can have different checks. Record inspected paths and commit, hypothesis, expected result, actual evidence and pending work.

Keep three records distinct: the model's proposed action, the executor's result and the target's observable state. An exit code or a fluent report cannot substitute for the persisted effect. Record empty or missing observations as missing; never fill them with an expected result.

## 4. Challenge the finding

A separate reviewer should try to refute the claim using the strongest existing control. If that review did not occur, say so. Use only authorized, bounded validation with synthetic resources, and enforce isolation before executing target-controlled code.

Apply the [Cloudflare verdict distinctions](../wiki/research/cloudflare-security-audit.md#preserve-the-verdict-contract). Keep unreviewed candidates in the ledger. Use `needs_validation` only for a reviewed, source-grounded candidate with an exact unresolved fact and no severity. Preserve rejected claims and their reasons. Explain which evidence supports a confirmation and which deployment assumptions remain untested.

## 5. Correct the actual boundary

For the hypothetical cross-tenant defect, the proposed correction is requester-and-resource authorization in the final tool handler. Derive tenant context from authenticated identity, constrain the service credential, and apply the same gate to queued and resumed execution. Assign an owner, rollout and rollback plan.

If the requester is permitted to create a ticket but the document causes an unwanted ticket, investigate **action binding** separately: whether the exact operation and arguments were intentionally requested or approved. Bind any required approval to the final action, identity, resource and expiry; re-check changed or retried actions.

Proposed retests: deny the synthetic cross-tenant call with no persisted ticket; allow a legitimate same-tenant ticket; reject altered approval arguments; ensure retries do not duplicate a side effect. These are acceptance criteria, not reported results.

## DASF investigation entry points

These links are assessor reading choices, not an official PentAGI/Cloudflare mapping. Retrieve each risk's actual source-linked controls with `get_risk` and `get_control`.

| Observed boundary | Risk to investigate | Evidence that matters |
|---|---|---|
| Retrieved content changes a privileged action | [13.16 Prompt injection](../wiki/risks/13.16.md) | Attacker-controlled input, affected principal and prohibited or unrequested effect |
| Service identity exceeds requester authority | [13.17 Confused deputy](../wiki/risks/13.17.md) | Effective identity and requester/resource checks at the final sink |
| Approved task becomes another operation | [13.6 Intent breaking](../wiki/risks/13.6.md) | Requested/approved object compared with executed object |
| A low-trust note affects a later task | [13.1 Memory poisoning](../wiki/risks/13.1.md) | Writer, provenance, persistence and reachable consumer |
| Delegation widens capabilities | [13.22 Scope creep](../wiki/risks/13.22.md) | Parent/child authority, budgets and denied operations |
| The investigation cannot be reconstructed | [13.8 Untraceability](../wiki/risks/13.8.md) | Correlated identity, action, artifact and target-state records |

Finish with the [finding record](../wiki/templates/finding.md). Explain expected behavior, observed failure or unresolved hypothesis, affected boundary, proposed correction and retest in the user's language. Keep credentials and actual target evidence in the private assessment workspace.
