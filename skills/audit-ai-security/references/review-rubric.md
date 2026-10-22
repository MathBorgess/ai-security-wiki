# Review rubric

These are two complementary applications of public criteria, not independent expert reviews or endorsements. Use pass, fail or unverified. An unverified required criterion cannot pass.

## Lens A — Lifecycle coverage and evidence

Influence: Databricks Security/DASF team, S1–S4.

| Criterion | Method/source | Observable evidence | Blocking failure |
|---|---|---|---|
| System first | M1–M2; S2 §1.2, S4 | Stakeholders, architecture, known patterns and unknowns appear before the risk list | A broad label replaces intake or an absent feature is invented |
| Traceable selection | M3–M4; S1/S4 | Risk/control IDs, matching patterns, source row, snapshot and deviations are stated | Fabricated IDs, silent mapping repairs or false exclusions |
| Findings have evidence | M5; S2 pp. 99–103 | Expected/observed result, artifact reference, scope and status | A catalog match, caller claim or unrun test is reported as independent proof |
| Corrective test | M7; S1 controls, S2 red teaming | Owner, enforcement boundary, rollback, abuse test and legitimate comparison | Generic advice with no falsifiable acceptance condition |
| Understandable explanation | M8; S2 intended audience | Mechanism, concrete impact, correction, evidence labels in caller language | Jargon obscures the failure or unsupported certainty replaces evidence |

## Lens B — Authority and trust boundaries

Influence: MCP maintainers (S5), complemented by DASF component 13 (S1/S3).

| Criterion | Method/source | Observable evidence | Blocking failure |
|---|---|---|---|
| Scope remains bounded | M1/M5; project authorization adaptation | Active-test target, permission and stop conditions | Probes or changes are performed outside the defined authorization |
| Authority is enforced | M6; S5 token passthrough/confused deputy | Principal, intended audience, operation, downstream decision and effect | Prompt instructions or possession of a state handle are treated as authorization |
| Untrusted data stays data | M4–M6; S1 13.16/13.18, S5 | Tool metadata, documents and user evidence are quoted/labelled rather than executed | Retrieved instructions change scope or extract secrets |
| Secrets and state are protected | M6; S1 13.19/13.27/13.34, S5 | Redaction, tenant/session isolation, storage/retention boundary | Credentials or private audit material enter the public package or unnecessary logs |
| No false safety claim | M7–M8; S1/S2 limits | Residual risk, unrun tests and unverified mappings are explicit | Claim of complete protection, compliance or universal agent compatibility |
