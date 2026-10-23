# PentAGI: study agentic security investigations

PentAGI is a useful architecture reference for understanding how security agents plan work, call tools, retain observations and report results. Study those boundaries when building or auditing an agent that can act on a system.

**Source S7:** VXControl / PentAGI contributors, commit `843dfeb4bfc809c09d1bc5022e567c602d8fc9dd`, inspected 2026-10-23. [README](https://github.com/vxcontrol/pentagi/blob/843dfeb4bfc809c09d1bc5022e567c602d8fc9dd/README.md), [flow design](https://github.com/vxcontrol/pentagi/blob/843dfeb4bfc809c09d1bc5022e567c602d8fc9dd/backend/docs/flow_execution.md), [tool registry](https://github.com/vxcontrol/pentagi/blob/843dfeb4bfc809c09d1bc5022e567c602d8fc9dd/backend/pkg/tools/registry.go). Core license: [MIT](https://github.com/vxcontrol/pentagi/blob/843dfeb4bfc809c09d1bc5022e567c602d8fc9dd/LICENSE). Sometimes searched as “PentestAGI”; the source project's name is **PentAGI**.

## What the source documents

The flow design separates a persistent flow, user tasks, generated subtasks and individual actions. Planning and refinement can revise pending work after observations. Specialist roles handle research, code, testing and memory; result functions return their claims to the workflow.

Its registry distinguishes terminal/file operations, browsing/search, memory access, delegation and result delivery. These are different capabilities even when one model can select all of them. A successful tool call is evidence of execution, not proof that the claimed vulnerability exists.

The pinned README describes autonomous and assistant-guided pentesting. It explicitly distinguishes that capability from predefined breach-and-attack-simulation campaigns. Its report interface documents web, Markdown and PDF outputs; do not assume a compatible JSON evidence export. Isolation and effectiveness statements are upstream claims, not results independently measured by this wiki.

## Apply the architecture as audit questions

The following is **this wiki's defensive adaptation**, not an assessment of defects in PentAGI.

| Boundary | Evidence to request | Proposed bounded check |
|---|---|---|
| Planner → executor | Final operation, actor, resolved resource and policy decision | A harmless out-of-scope fixture resource is denied even when proposed by the model |
| Observation → next task | Hypothesis ID, observed fact, revision reason and pending work | A refuted hypothesis changes the plan; an inconclusive result stays open |
| Agent → memory | Writer identity, provenance, tenant/campaign and later readers | A synthetic low-trust note cannot become policy or cross into another tenant |
| Delegation → capability | Child identity, narrowed authority, budget and cancellation | A child task cannot exceed the parent's scope or continue after enforced cancellation |
| Tool return → finding | Exit status, target-side event and artifact locator | A tool reporting success without the expected target effect cannot confirm the finding |

Keep execution isolation, credentials and allowed destinations outside model discretion. A container label alone does not establish containment. Record the actual configuration and denied operations. Inspect what the runner can access before running target-controlled code.

## Connect to DASF

Project-authored reading links: [tool misuse 13.2](../risks/13.2.md), [memory poisoning 13.1](../risks/13.1.md), [resource overload 13.4](../risks/13.4.md), [untraceability 13.8](../risks/13.8.md) and [scope creep 13.22](../risks/13.22.md). Follow each risk's source-linked controls and select those relevant to the actual enforcement gap. These links are not an upstream crosswalk or proof of a flaw.

Continue with the [evidence playbook](../../guides/evidence-driven-audit.md). No PentAGI installation, execution, integration or comparative performance evaluation was performed for this reading.
