# MCP integration

The server is a local, read-only knowledge service over stdio. It needs Node.js 22+ and the locked npm dependencies. It performs no runtime web requests, model calls, target scans or writes. Inputs are bounded and validated; tool arguments cannot choose arbitrary files, URLs or shell commands. It does not persist assessment descriptions or evidence. The host may retain its own conversation/tool logs; use redacted inputs.

## Configure a client

After `npm ci --ignore-scripts`, configure an absolute executable/script path. MCP JSON hosts commonly use:

```json
{
  "mcpServers": {
    "ai-security-wiki": {
      "command": "node",
      "args": ["/absolute/path/to/ai-security-wiki/src/server.mjs"]
    }
  }
}
```

For TOML-configured hosts, the equivalent server entry is:

```toml
[mcp_servers.ai-security-wiki]
command = "node"
args = ["/absolute/path/to/ai-security-wiki/src/server.mjs"]
```

Use the host’s documented configuration location and restart/reload procedure. If Node is not on the host’s PATH, use its absolute path. These examples are not a claim that every host/version was exercised. `npm run demo` verifies a real SDK client/server connection independent of a particular agent UI.

`npm start` starts a stdio server and waits for protocol input; it is not an interactive shell. A configured MCP host normally launches it. No HTTP listener or hosted URL is provided. Deploying remotely introduces a separate transport/authentication/abuse-control boundary and requires additional engineering and verification.

## Tool contract

| Tool | Use |
|---|---|
| `classify_system` | Explicit yes/no/unknown for predictive_ml, retrieval, fine_tuning, pretraining, foundation_model, external_provider and agent_actions |
| `scope_risks` | Union source Yes rows for one or more deployment patterns; return controls, unspecified rows and separate architecture review candidates |
| `build_audit_plan` | Required intake, unverified risk register and per-control evidence/testing backlog |
| `search_knowledge` | Case/accent-insensitive literal AND search; kind risk/control/reference/all, offset and limit (max 25); includes next_offset |
| `get_risk` | Complete risk, source applicability, impacts and mappings |
| `get_control` | Complete control, docs, graph discrepancies and verification guidance |
| `investigate_risk` | Falsifiable investigation steps and mapped control-specific checks |
| `propose_remediation` | Reviewable changes for up to ten selected risks; no execution |
| `explain_finding` | English/Portuguese explanation structure; supplied observation and evidence remain caller-reported |
| `get_reference` | Method, glossary, source caveats and full skill/profile/rubric; fallback for hosts without resources |

Pattern IDs: `predictive-ml`, `rag`, `fine-tuned-llm`, `pre-trained-llm`, `foundation-llm`, `external-model`, `agentic-ai`.

Risk IDs accept `DASF-R-13.1`, `13.1` or the exact source ID. Controls accept `DASF-64`, `DASF 64` or `64`. Unknown identifiers are rejected rather than interpreted as search queries or file paths.

Results carry framework version, snapshot date and source provenance. Tool annotations declare read-only, nondestructive, idempotent, closed-world behavior. These are descriptions of the bundled server, not an authorization mechanism for a connected agent’s other tools.

## Resources and prompts

- `dasf://overview`: inventory, provenance, workflow and source discrepancies.
- `dasf://risk/{id}` and `dasf://control/{id}`: all 170 full Markdown records with source citations.
- `dasf://wiki/{name}`: 19 allowlisted references, including methodology, source issues, skill references and six complementary research guides/templates.
- Prompt `audit-ai-security`: loads the method and starts classification; an optional system_description is explicitly untrusted data.
- Prompt `explain-security-finding`: asks for a risk_id and optional `en`/`pt-BR` language.

The portable directory `skills/audit-ai-security` can be registered by a host according to that host’s skill conventions. It is not installed globally by this project. Automatic model selection is host-dependent. MCP consumers can load the same workflow through `get_reference` without installing a native skill.

## What the agent still does

To discover the research, call `search_knowledge` with `{"query":"Cloudflare","kind":"reference"}`, then `get_reference` with a returned `name`, such as `cloudflare-audit`. Reference results include project/source provenance and pinned revisions where applicable. Default `kind: "all"` searches both the DASF catalog and reference text; `risk` and `control` remain catalog-only. Reference matches do not change scoping counts or official applicability. The `dasf://wiki/` namespace includes project adaptations and does not imply DASF authorship.

The additional names are `security-research`, `pentagi`, `cloudflare-audit`, `red-blue-field`, `evidence-playbook` and `coverage-template`. `build_audit_plan` and `investigate_risk` link to the supplemental method. The server still has ten read-only tools and no upstream fetch, installation, target scanning or audit execution.

The MCP provides grounded reference material and proposed checks. The agent must gather actual architecture and evidence with its own authorized tools, assess applicability, tailor changes and explain the mechanism in the user’s language. A string containing an observation is not independent verification. The server never claims that a proposed check ran.
