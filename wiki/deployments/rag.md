# RAG - LLMs

An LLM retrieves external knowledge before generating an answer.

Classification definition is a project adaptation of the DASF deployment model descriptions. Source applicability is column I of [AI Lifecycle Risks](https://docs.google.com/spreadsheets/d/1lD5nKC1QNoUTDXdMp31NA9eKcUYGjhtC34MCfQpqpGo/edit#gid=307775890), snapshot 2026-10-22.

Combine patterns using **union (OR)**. An agent that uses retrieval and a third-party model should include agentic-ai, rag and external-model; include foundation-llm if the model is a foundation model. Do not assume “pre-trained” means merely calling an already trained foundation model: this taxonomy distinguishes pretraining from consumption.

34 source-applicable risks:

- [DASF-R-1.1](../risks/1.1.md) — Insufficient access controls
- [DASF-R-1.2](../risks/1.2.md) — Missing data classification
- [DASF-R-1.3](../risks/1.3.md) — Poor data quality
- [DASF-R-1.4](../risks/1.4.md) — Ineffective storage and encryption
- [DASF-R-1.5](../risks/1.5.md) — Lack of data versioning
- [DASF-R-1.6](../risks/1.6.md) — Insufficient data lineage
- [DASF-R-1.7](../risks/1.7.md) — Lack of data trustworthiness
- [DASF-R-1.8](../risks/1.8.md) — Legality of data
- [DASF-R-1.9](../risks/1.9.md) — Stale data
- [DASF-R-1.10](../risks/1.10.md) — Lack of data access logs
- [DASF-R-1.11](../risks/1.11.md) — Compromised 3rd-party datasets
- [DASF-R-3.1](../risks/3.1.md) — Data poisoning
- [DASF-R-3.2](../risks/3.2.md) — Ineffective storage and encryption
- [DASF-R-4.1](../risks/4.1.md) — Lack of traceability and transparency of model assets
- [DASF-R-4.2](../risks/4.2.md) — Lack of end-to-end ML lifecycle
- [DASF-R-6.3](../risks/6.3.md) — Lack of Interpretability and Explainability
- [DASF-R-7.2](../risks/7.2.md) — Model assets leak
- [DASF-R-7.4](../risks/7.4.md) — Source code control attack
- [DASF-R-8.3](../risks/8.3.md) — Model lifecycle without HITL (human-in-the-loop)
- [DASF-R-9.8](../risks/9.8.md) — LLM hallucinations
- [DASF-R-9.9](../risks/9.9.md) — Input Resource Control
- [DASF-R-9.10](../risks/9.10.md) — Accidental exposure of unauthorized data to models
- [DASF-R-9.11](../risks/9.11.md) — Model Inference API Access
- [DASF-R-9.12](../risks/9.12.md) — LLM Jailbreak
- [DASF-R-9.13](../risks/9.13.md) — Excessive agency
- [DASF-R-10.1](../risks/10.1.md) — Lack of audit and monitoring inference quality
- [DASF-R-11.1](../risks/11.1.md) — Lack of MLOps — repeatable enforced standards
- [DASF-R-12.1](../risks/12.1.md) — Lack of vulnerability management
- [DASF-R-12.2](../risks/12.2.md) — Lack of penetration testing, red teaming and bug bounty
- [DASF-R-12.3](../risks/12.3.md) — Lack of incident response
- [DASF-R-12.4](../risks/12.4.md) — Unauthorized privileged access
- [DASF-R-12.5](../risks/12.5.md) — Poor security in the software development lifecycle
- [DASF-R-12.6](../risks/12.6.md) — Lack of compliance
- [DASF-R-12.7](../risks/12.7.md) — Initial Access
