# AI agent security checklist: from architecture to evidence

An AI agent security review starts by identifying what the system can read, remember and change. Use this checklist to turn a broad concern into an evidence-backed audit plan. It is project-authored guidance using the [DASF source snapshot](../wiki/sources.md), not an official Databricks certification checklist.

## Classify the whole system

A support agent that retrieves documents, calls an external foundation model and creates tickets combines **RAG, foundation-model, external-model and agentic** patterns. Selecting only “agentic” loses supporting layers in the source filter. In this snapshot, the compound selection contains 75 risks and 71 controls; this is scope, not 75 confirmed vulnerabilities.

Record the system owner, business purpose, data sensitivity, tenants, model providers, training stages, retrieval, memory, tools and downstream services. Mark missing information as unknown. The [audit method](../wiki/methodology.md) explains the sequence and the [deployment index](../wiki/index.md) supplies the source filters.

## Investigate each boundary

| Boundary | Question to investigate | Evidence to request | Relevant DASF references |
|---|---|---|---|
| User → data | Can a user or agent read another tenant's records? | Effective identity, authorization checks and a denied cross-tenant test | [Access control, DASF-5](../wiki/controls/5.md), [agent permissions, DASF-64](../wiki/controls/64.md) |
| Retrieved content → model | Can source text redirect the task or trigger a tool? | Retrieval trace, untrusted content and downstream policy decisions | [Prompt injection, 13.16](../wiki/risks/13.16.md), [input injection, 9.1](../wiki/risks/9.1.md) |
| Model → tool | Who authorizes the action, resource and destination? | Tool schema, effective permissions and enforcement outside the model | [Tool misuse, 13.2](../wiki/risks/13.2.md), [excessive permissions, 13.22](../wiki/risks/13.22.md) |
| Agent → memory | Who can write state and who can retrieve it later? | Provenance, tenant boundaries, retention and deletion behavior | [Memory poisoning, 13.1](../wiki/risks/13.1.md), [state protection, DASF-72](../wiki/controls/72.md) |
| Agent → human | Is approval tied to the exact action the user saw? | Reviewed arguments, expiry, actor and replay protection | [Human overload, 13.10](../wiki/risks/13.10.md), [human feedback, DASF-66](../wiki/controls/66.md) |
| Agent → agent | Can a delegated task expand authority? | Delegation scope, authenticated identities and correlated traces | [Communication poisoning, 13.12](../wiki/risks/13.12.md), [traceability, DASF-65](../wiki/controls/65.md) |
| Agent → resources | Can one run exhaust requests, money or compute? | Per-run budgets, quotas, cancellation and rate-limit decisions | [Resource overload, 13.4](../wiki/risks/13.4.md), [rate limits, DASF-60](../wiki/controls/60.md) |

These are review starting points, not a claim that every linked control is necessary or sufficient. Check actual architecture and effective permissions.

## Turn a concern into a test

**Synthetic hypothesis:** a retrieved document asks an agent to create a ticket containing another tenant's customer record. The failure would be unauthorized disclosure through an otherwise legitimate tool.

1. Use two synthetic tenants and a disposable ticket destination.
2. Establish the legitimate user's permitted data and actions.
3. Introduce a harmless canary in retrieved content; record the input and model/tool trace.
4. Inspect whether the service refuses data outside the caller's tenant and unapproved destinations.
5. Test a valid ticket creation too. Blocking all ticket creation is not evidence of a usable correction.

Do not run this against a third party without a defined assessment scope. The [executable tenant-boundary example](../examples/tenant-boundary.md) demonstrates an in-memory authorization fix; it does not demonstrate resistance of an LLM to prompt injection.

## Record a finding people can act on

Use the [finding template](../wiki/templates/finding.md). Include expected behavior, observed behavior, evidence locator, affected boundary, impact, DASF IDs, proposed change, owner, rollback and a falsifiable retest criterion. Keep absence of evidence distinct from evidence of absence.

The MCP follows the same route: `classify_system` → `scope_risks` → `build_audit_plan` → `investigate_risk` → `propose_remediation`. [Connect your agent](../docs/clients.md).

## What this checklist does not establish

A completed checklist does not certify an agent. Source “No” and blank applicability are not guarantees of safety. Read [source issues](../wiki/source-issues.md) before excluding a risk, and [validation](../docs/validation.md) before interpreting this project's tests.
