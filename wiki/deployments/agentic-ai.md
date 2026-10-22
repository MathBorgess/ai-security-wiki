# Agentic AI

A model selects tools/actions or coordinates autonomous reasoning and execution.

Classification definition is a project adaptation of the DASF deployment model descriptions. Source applicability is column N of [AI Lifecycle Risks](https://docs.google.com/spreadsheets/d/1lD5nKC1QNoUTDXdMp31NA9eKcUYGjhtC34MCfQpqpGo/edit#gid=307775890), snapshot 2026-10-22.

Combine patterns using **union (OR)**. An agent that uses retrieval and a third-party model should include agentic-ai, rag and external-model; include foundation-llm if the model is a foundation model. Do not assume “pre-trained” means merely calling an already trained foundation model: this taxonomy distinguishes pretraining from consumption.

35 source-applicable risks:

- [DASF-R-13.1](../risks/13.1.md) — Memory Poisoning
- [DASF-R-13.2](../risks/13.2.md) — Tool Misuse
- [DASF-R-13.3](../risks/13.3.md) — Privilege Compromise
- [DASF-R-13.4](../risks/13.4.md) — Resource Overload
- [DASF-R-13.5](../risks/13.5.md) — Cascading Hallucination Attacks
- [DASF-R-13.6](../risks/13.6.md) — Intent Breaking &amp; Goal Manipulation
- [DASF-R-13.7](../risks/13.7.md) — Misaligned &amp; Deceptive Behaviors
- [DASF-R-13.8](../risks/13.8.md) — Repudiation &amp; Untraceability
- [DASF-R-13.9](../risks/13.9.md) — Identity Spoofing &amp; Impersonation
- [DASF-R-13.10](../risks/13.10.md) — Overwhelming Human in the Loop
- [DASF-R-13.11](../risks/13.11.md) — Unexpected RCE and Code Attacks
- [DASF-R-13.12](../risks/13.12.md) — Agent Communication Poisoning
- [DASF-R-13.13](../risks/13.13.md) — Rogue Agents in Multi-Agent Systems
- [DASF-R-13.14](../risks/13.14.md) — Human Attacks on Multi-Agent Systems
- [DASF-R-13.15](../risks/13.15.md) — Human Manipulation
- [DASF-R-13.16](../risks/13.16.md) — Prompt Injection
- [DASF-R-13.17](../risks/13.17.md) — Confused Deputy
- [DASF-R-13.18](../risks/13.18.md) — Tool Poisoning
- [DASF-R-13.19](../risks/13.19.md) — Credential and Token Exposure
- [DASF-R-13.20](../risks/13.20.md) — Insecure Server Configuration
- [DASF-R-13.21](../risks/13.21.md) — Supply Chain Attacks
- [DASF-R-13.22](../risks/13.22.md) — Excessive Permissions and Scope Creep
- [DASF-R-13.23](../risks/13.23.md) — Data Exfiltration
- [DASF-R-13.24](../risks/13.24.md) — Context Spoofing and Manipulation
- [DASF-R-13.25](../risks/13.25.md) — Insecure Communication
- [DASF-R-13.26](../risks/13.26.md) — Malicious Server Connection
- [DASF-R-13.27](../risks/13.27.md) — Insecure Credential Storage
- [DASF-R-13.28](../risks/13.28.md) — UI/UX Deception
- [DASF-R-13.29](../risks/13.29.md) — Insufficient Server Validation
- [DASF-R-13.30](../risks/13.30.md) — Client-Side Data Leakage
- [DASF-R-13.31](../risks/13.31.md) — Excessive Permission Granting
- [DASF-R-13.32](../risks/13.32.md) — Client-Side Code Execution
- [DASF-R-13.33](../risks/13.33.md) — Insecure Communication Handling
- [DASF-R-13.34](../risks/13.34.md) — Session and State Management Failures
- [DASF-R-13.35](../risks/13.35.md) — Update and Patch Management
