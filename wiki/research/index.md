# Security research: PentAGI, Cloudflare and Red Blue Field

Study how to turn an AI security risk into an investigation, a defensible finding and a verified correction. These complementary references extend the DASF workflow with practical audit methods.

## Choose a question

| Question | Read | What to take away |
|---|---|---|
| How does an agent organize a security investigation? | [PentAGI](pentagi.md) | Tasks, tool execution, memory and observable results |
| What evidence makes a security finding credible? | [Cloudflare security-audit-skill](cloudflare-security-audit.md) | Coverage, source traces, refutation and independent verification |
| How do these ideas connect to a learning laboratory? | [Red Blue Field](red-blue-field.md) | Hypotheses, scope, observation and evaluation as separate responsibilities |
| How can I apply them to my own agent? | [Evidence-driven audit playbook](../../guides/evidence-driven-audit.md) | A worked synthetic case, DASF entry points and retest criteria |
| How do I report what remains unexamined? | [Coverage ledger template](../templates/coverage-ledger.md) | Reviewed, blocked and pending work with evidence |

Start with [system classification](../methodology.md). ML, GenAI and agentic features can coexist. DASF defines the source risk/control graph; these readings help investigate the selected boundaries. They do not add official DASF risks or change its applicability matrix.

## Provenance and reuse

Inspected on **2026-10-23**, at the revisions already used by the public Red Blue Field reference blueprint. This is a reproducible reading selection, not a claim to track the newest upstream revision. The [source manifest](../../sources/research.json) records commits, inspected paths, licenses and limits; [S7–S9](../sources.md#complementary-research) provide the human-readable register.

The pages are original summaries and explicitly marked adaptations. Upstream code, prompts, schemas and validators are not bundled or executed. MIT notices for PentAGI and Cloudflare are retained in [third-party notices](../../THIRD_PARTY_NOTICES.txt). Linking the laboratory does not import its source or private experiment records. None of these organizations endorses this wiki.

## Retrieve through MCP

Search with `search_knowledge({"query":"PentAGI","kind":"reference"})`, then pass the returned `name` to `get_reference`. The same document is available at its `dasf://wiki/...` resource URI. `dasf` is the existing server namespace; a reference URI does not make its content official DASF guidance.

The reference names are `security-research`, `pentagi`, `cloudflare-audit`, `red-blue-field`, `evidence-playbook` and `coverage-template`. They are bundled local knowledge. Reading them does not start a scanner, install an upstream skill or delegate an audit.
