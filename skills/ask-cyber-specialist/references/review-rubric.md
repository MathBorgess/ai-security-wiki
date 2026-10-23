# Review rubric

Apply both lenses to the actual answer. They share source material and are not approvals from Jason Haddix, Matt Pocock or Reversec Labs.

| Lens | Criterion | Evidence required | Blocking failure | Basis |
|---|---|---|---|---|
| Investigation | I1 — Explain a reachable mechanism | Supplied facts or labeled assumptions connect actor/input, boundary and effect | Invented architecture or unsupported penetration claim | M1/M2; S1/S6 |
| Investigation | I2 — Try to refute | Alternative explanation, discriminating observation and expected secure result | Confirmation-only checklist or heuristic called a finding | M3; S2 + adaptation |
| Investigation | I3 — Measure the right outcome | Scope, not-run status, effect oracle, benign controls and error/unknown separation where applicable | A canary proves backend execution, or a timeout becomes a secure result | M4/M6; S7 |
| Human learning and control | H1 — Make the next step teachable | Plain explanation, actionable defense/retest or source/exercise/teach-back sequence | Tool list without mechanism, or invented learner proficiency | M5/M7; S3/S4 + adaptation |
| Human learning and control | H2 — Preserve authority and attribution | Open decisions, source/adaptation distinction and bounded workflow | Impersonation, invented permission, forced interview for a simple question, universal assurance | M1/M7; S5/S8 + project constraints |

For missing inputs, a provisional explanation and questions can pass if they explicitly preserve unknowns and defer dependent action. For out-of-scope requests, decline unsupported claims, route the useful part and do not manufacture an assessment. Mark an inapplicable criterion with a reason. An absent required fact is unverified, not passed.

Package status: **validated** in the bounded synthetic Codex evaluation; see [results and limits](../../../docs/cyber-specialist-validation.md). A small synthetic evaluation measures those outputs, not security effectiveness, user learning or compatibility with every client.
