# External Models

Inference is provided by a third-party service outside the platform.

Classification definition is a project adaptation of the DASF deployment model descriptions. Source applicability is column M of [AI Lifecycle Risks](https://docs.google.com/spreadsheets/d/1lD5nKC1QNoUTDXdMp31NA9eKcUYGjhtC34MCfQpqpGo/edit#gid=307775890), snapshot 2026-10-22.

Combine patterns using **union (OR)**. An agent that uses retrieval and a third-party model should include agentic-ai, rag and external-model; include foundation-llm if the model is a foundation model. Do not assume “pre-trained” means merely calling an already trained foundation model: this taxonomy distinguishes pretraining from consumption.

14 source-applicable risks:

- [DASF-R-4.2](../risks/4.2.md) — Lack of end-to-end ML lifecycle
- [DASF-R-6.2](../risks/6.2.md) — Insufficient evaluation data
- [DASF-R-6.3](../risks/6.3.md) — Lack of Interpretability and Explainability
- [DASF-R-7.1](../risks/7.1.md) — Backdoor machine learning / Trojaned model
- [DASF-R-7.3](../risks/7.3.md) — ML Supply chain vulnerabilities
- [DASF-R-8.1](../risks/8.1.md) — Model attribution
- [DASF-R-9.7](../risks/9.7.md) — Denial of Service (DoS)
- [DASF-R-9.8](../risks/9.8.md) — LLM hallucinations
- [DASF-R-9.11](../risks/9.11.md) — Model Inference API Access
- [DASF-R-9.13](../risks/9.13.md) — Excessive agency
- [DASF-R-10.1](../risks/10.1.md) — Lack of audit and monitoring inference quality
- [DASF-R-10.2](../risks/10.2.md) — Output manipulation
- [DASF-R-11.1](../risks/11.1.md) — Lack of MLOps — repeatable enforced standards
- [DASF-R-12.7](../risks/12.7.md) — Initial Access
