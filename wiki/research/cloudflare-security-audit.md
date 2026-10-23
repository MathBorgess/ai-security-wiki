# Cloudflare security-audit-skill: evidence and verification

Cloudflare's audit skill provides a source-oriented method for deciding whether a suspected security issue survives examination of the actual controls. Its coverage and verification disciplines are useful for AI agents as well as ordinary application code.

**Source S8:** Cloudflare, commit `c1c8a8c1471069fb0e188eeaff69b8e8db6564a8`, inspected 2026-10-23. [README](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/README.md), [reconnaissance](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/RECONNAISSANCE.md), [AI and LLM boundaries](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/AI-AND-LLM.md), [validation and reporting](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/VALIDATION-AND-REPORTING.md). License: [MIT](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/LICENSE).

## The source method

The workflow maps architecture and coverage before hunting, gives candidates to separate verifiers, validates structured records, independently checks final claims and derives reports from those records. Repeated runs revisit gaps and changed source; an old conclusion is not current coverage.

A verifier reconstructs the strongest control along the alleged path and attempts to disprove the claim. This matters when a checklist flags a missing defensive layer but another enforced control already prevents the effect. Hardening advice and demonstrated vulnerabilities need different labels.

The source's AI companion traces untrusted content through model context, retrieval, memory, tool dispatch and output sinks. It distinguishes **authorization**—whether a principal may perform an operation—from **action binding**—whether that principal intentionally requested or approved this exact operation. An action can pass an ACL and still violate the user's intent.

## Preserve the verdict contract

| Source verdict | Required basis | How to use it here |
|---|---|---|
| `confirmed` | Complete source trace and bounded observed result, independently checked | Cite the effect and its limits; only then assess supported impact |
| `needs_validation` | Source-grounded candidate with one or more exact unresolved facts and a validation plan | Keep the blocker visible; do not assign a severity |
| `rejected` | Evidence or an effective control disproves the specific claim | Preserve the reason so the same claim is not repeatedly reported |

A candidate that never received the required independent check stays in the coverage ledger, with the run marked incomplete. It is not automatically a `needs_validation` record. Our existing finding template uses `unverified`, `confirmed`, `refuted` and `resolved with retest evidence`: these vocabularies have different contracts. There is no automatic schema conversion; `resolved` describes a later retest, not an upstream verdict.

## Adapt it to an AI audit

This paragraph and the linked templates are **project adaptations**, not a replacement implementation of the upstream skill. Record an entry point, lower-trust writer, consuming principal, execution identity, affected resource, strongest existing control and observable effect. Follow retries, queues, resumed work and delegated calls when they can reach the same effect. Use the [coverage ledger](../templates/coverage-ledger.md) to preserve deferred paths and the [finding record](../templates/finding.md) for claims supported by evidence.

For untrusted target code, the source requires enforced execution isolation, no external network, a minimal environment, bounded resources and scratch-only writes. It also separates scratch from retained evidence through trusted artifact promotion. Missing execution or evidence controls remain explicit blockers. This reading does not create that sandbox or grant permission to execute an audit.

## Connect to DASF

Project reading links: [prompt injection 13.16](../risks/13.16.md), [confused deputy 13.17](../risks/13.17.md), [tool poisoning 13.18](../risks/13.18.md), [context spoofing 13.24](../risks/13.24.md) and [session/state failures 13.34](../risks/13.34.md). A changed model response alone does not demonstrate a crossed data or action boundary.

The upstream workflow was studied as a reference; its skill and validators were not installed or executed here. A separate invocation can reduce shared context; it does not guarantee statistical independence or expert correctness. No detection-rate claim is imported.
