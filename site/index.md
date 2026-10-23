# AI agent security, from risk to evidence.

Understand what your AI system can read, remember and change. Explore the Databricks AI Security Framework, investigate the relevant risks and give your agent a method for proposing corrections.

[Start the audit checklist](../guides/agent-security-checklist.md) · [Connect your agent](../docs/clients.md)

## Start with the boundary you need to protect

- **Review an agent.** [Classify the system, inspect its permissions and plan an audit](../guides/agent-security-checklist.md).
- **Connect tools safely.** [Review MCP clients, servers, credentials and authorization](../guides/mcp-security.md).
- **Investigate prompt injection.** [Trace untrusted content to data access and actions](../guides/prompt-injection.md).
- **Learn from a correction.** [Reproduce and fix a synthetic cross-tenant authorization flaw](../examples/tenant-boundary.md).
- **Study security investigations.** [Explore PentAGI, Cloudflare's audit skill and Red Blue Field](../wiki/research/index.md), then [follow a hypothesis through evidence and retest](../guides/evidence-driven-audit.md).

- **Study reconnaissance.** [Explore Jason Haddix's methods, tools and reports, with an attack-surface mapping skill](../wiki/research/jason-haddix.md).

## A reference you can inspect

This independent project by Matheus Borges combines a linked wiki, a versioned catalog and a local MCP server. The DASF 3.0 snapshot covers **97 risks and 73 controls** across ML, GenAI and agentic systems. Every record points to its source. The project preserves disagreements in the source and labels its own interpretation.

[Read the audit method](../wiki/methodology.md) · [Inspect source caveats](../wiki/source-issues.md) · [See what was tested](../docs/validation.md)

## Give your agent a method

The MCP helps the calling agent classify a system, select risks, request evidence and propose corrections. Run it locally with Node.js 22+. It requires no model key or Databricks account.

```sh
git clone https://github.com/MathBorgess/ai-security-wiki.git
cd ai-security-wiki
npm ci --ignore-scripts
npm run demo
```

[Claude, Codex, ChatGPT and other agents](../docs/clients.md) · [MCP tool contract](../docs/mcp.md) · [Portable audit skill](../skills/audit-ai-security/SKILL.md)

The website is a readable reference. The local MCP provides tools. A catalog match is a reason to investigate, not proof that a vulnerability exists.

## Explore the reference

Choose a risk, control or research guide below, or navigate by [system component and deployment pattern](../wiki/index.md). The six research guides are complementary project references; the DASF snapshot still contains 97 risks and 73 controls. Preserve unknowns and combine every pattern present in your architecture.
