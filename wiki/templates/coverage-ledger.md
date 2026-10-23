# Coverage ledger for an AI security audit

Record what was examined, what evidence was obtained and what remains open. This is a lightweight project template inspired by [Cloudflare's coverage method](../research/cloudflare-security-audit.md), not its schema or validator. Store completed ledgers in the caller's private assessment workspace.

## Run context

- Target repository/version and authorized environment:
- System classification and DASF source snapshot:
- Scope, prohibited actions, budget and stop conditions:
- Investigator and reviewer identities; whether independent review occurred:
- Reviewed source revision and relevant configuration versions:
- Run state: incomplete / complete for the declared scope
- Remaining gaps, blocked checks and owner decisions:

## One record per boundary and path

| Field | What to record |
|---|---|
| Unit ID | Stable identifier within the assessment; keep it when rechecking the same path |
| Surface and path | Entrypoint, subsystem, trust boundary; direct/queue/retry/resume/delegation as applicable |
| Actor and authority | Lower-trust input owner, affected principal, effective execution identity and resource |
| Reading links | DASF risk IDs and any supplemental reference; label assessor mappings |
| Hypothesis | Prohibited effect and an observation that would refute it |
| Strongest control | Location and effective policy that may already prevent the effect |
| Inspection | Source paths, line references, revision, configuration and method actually used |
| Check | Expected result, observed result, timestamp, artifact locator and evidence limitations |
| Coverage state | planned / examined / blocked / deferred / out_of_scope; reason for non-examination |
| Candidate | Claim identifier, discovery status, verifier identity and verdict if verification occurred |
| Next step | Exact unresolved fact, permitted way to resolve it, owner and retest |

`examined` means the recorded check happened. It does not mean safe, fully covered or independently verified. Missing evidence leaves the candidate unverified even if a source review was performed. A reviewed `needs_validation` candidate still has unresolved evidence; a blocked unit is not a confirmed finding.

## Synthetic example — no check executed

| Unit | Boundary/path | State | Next step |
|---|---|---|---|
| ticket-direct | Requester → final ticket handler | planned | Inspect resource authorization and use a permitted synthetic cross-tenant case |
| ticket-resume | Stored approval → resumed handler | blocked | Obtain the source/configuration that selects the deployed resume path |
| ticket-retry | Retry queue → persisted side effect | deferred | Budget a bounded idempotency check; preserve the gap in the report |

## Close and revisit

Report counts by coverage state against the declared unit inventory. Do not report a percentage of “all vulnerabilities found.” Zero findings with unresolved units is incomplete evidence. Record why an out-of-scope unit is excluded and what authority would be needed to review it.

Revalidate after relevant code, configuration, identity or model/tool changes. Preserve prior conclusions as dated evidence and link their replacements. Keep candidate discovery, independent verdict and remediation/retest status separate. Use the [finding template](finding.md) for the resulting claim and the [playbook](../../guides/evidence-driven-audit.md) for the sequence.
