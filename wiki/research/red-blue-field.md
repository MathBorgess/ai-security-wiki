# Red Blue Field: from reference methods to a learning laboratory

Red Blue Field is Matheus Borges's public security laboratory. Its reference blueprint connects PentAGI's investigation architecture with Cloudflare's source review and finding-verification method.

**Source S9:** [public blueprint at commit 35baa4c973c06a6d3d7424871407fa2b3204e4cf](https://github.com/MathBorgess/red-blue-field/blob/35baa4c973c06a6d3d7424871407fa2b3204e4cf/docs/reference-blueprints.md), inspected 2026-10-23. The blueprint is a design document: it is evidence of intended method, not proof that every proposed integration works. Consult the laboratory's current implementation and tests separately before using it.

## What connects the projects

The blueprint proposes a causal record from objective through hypothesis, task, action and observation. It separates planning from execution and distinguishes a worker's claim from an independently checked effect. It also proposes source-versioned coverage and finding records, with unresolved conditions retained rather than scored as confirmed failures.

The AI Security Wiki serves a different part of that learning loop: classify an architecture, retrieve DASF risks and controls, learn how to investigate them, and explain the evidence. The laboratory is a place to produce observations. This repository provides reference material for interpreting them. There is no runtime connection between the two.

## A reusable study exercise

The following is a new **wiki-authored exercise**, not a report of a completed Red Blue Field run.

1. Select one boundary and a DASF risk, such as [confused deputy 13.17](../risks/13.17.md). Freeze a synthetic target version and the authorized scope.
2. State an observation that would support the claim and one that would refute it. Keep the attacker's capabilities explicit.
3. Compare a deliberate manual check, a fixed script and a model-guided attempt only when each has the same initial access, allowed operations and budget.
4. Have a separate reviewer inspect the evidence. Record who reviewed it, which artifacts they checked and what remains unknown.
5. Change the relevant control, repeat the prohibited case and run the legitimate task. Report both outcomes with their denominator and environment.

Keep model behavior, tool execution, target effects, the reviewer's verdict and the student's explanation as separate observations. A functioning lab or a passing test suite does not prove the student mastered the topic or that a real deployment is protected.

Continue with [PentAGI](pentagi.md), [Cloudflare](cloudflare-security-audit.md) and the [evidence playbook](../../guides/evidence-driven-audit.md). No lab code, schemas, private traces or personal task records were imported into this wiki; no experiment was run for this reference addition.
