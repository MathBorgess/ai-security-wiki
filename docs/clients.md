# Use AI Security Wiki with Claude, Codex, ChatGPT and other agents

Choose the access method your agent actually supports. Reading a public page and calling an MCP tool are separate capabilities. The repository provides a local stdio MCP server; the documentation website is not an HTTP MCP endpoint.

## Read the reference in a web-enabled assistant

Give ChatGPT, Claude or another web-enabled assistant the [repository](https://github.com/MathBorgess/ai-security-wiki), [knowledge index](../wiki/index.md), [audit checklist](../guides/agent-security-checklist.md) or a specific risk page. Ask it to read the source before using its claims. Web access depends on the product, account and session; publication does not guarantee retrieval or citation.

Example request:

> Read the AI Security Wiki audit method and source caveats. My assistant retrieves internal documents, uses an external foundation model and can create support tickets. Identify all deployment patterns, request missing architecture details, and build an evidence-first security review. Cite DASF risk/control IDs. Keep findings unverified until evidence is inspected. Explain the results in Portuguese.

If web retrieval is unavailable, supply the relevant public Markdown pages. Keep private architecture evidence in your approved assessment workspace, not in a public issue or pull request.

## Prepare the local MCP

Install Node.js 22+ and clone the repository:

```sh
git clone https://github.com/MathBorgess/ai-security-wiki.git
cd ai-security-wiki
npm ci --ignore-scripts
npm run check
npm run demo
```

Use your clone's absolute path in the following commands. They register a server in your chosen host; this documentation does not run them automatically. No model key or Databricks account is required by this reference server.

## Claude Code

```sh
claude mcp add --transport stdio ai-security-wiki -- node /absolute/path/to/ai-security-wiki/src/server.mjs
```

Use `/mcp` in Claude Code to inspect the connection. See the official [local stdio setup documentation](https://code.claude.com/docs/en/mcp#option-3-add-a-local-stdio-server) for installation scopes and workspace approval. The command follows the documented syntax as checked on 2026-10-22; native-host behavior was not tested in this project.

## Codex

```sh
codex mcp add ai-security-wiki -- node /absolute/path/to/ai-security-wiki/src/server.mjs
codex mcp list
```

For a TOML-configured host, use the equivalent entry:

```toml
[mcp_servers.ai-security-wiki]
command = "node"
args = ["/absolute/path/to/ai-security-wiki/src/server.mjs"]
```

Consult the official [MCP configuration documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) for your installed client and environment. This project's executable integration test uses an SDK client; it is not a claim of automatic discovery in every Codex interface.

## Other local MCP hosts

Hosts supporting the `mcpServers` JSON convention can use:

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

Use the host's documented configuration location and reload procedure. If Node is not on its PATH, set `command` to the absolute Node executable. A host that accepts only remote HTTP MCP servers cannot use the local script as a URL. A remote service would require separate transport, identity and abuse-control engineering.

## First useful tool sequence

1. Read `get_reference` with `name: "methodology"` and `name: "source-issues"`.
2. Call `classify_system` with explicit yes/no/unknown architecture features.
3. Pass all established patterns to `scope_risks`, then `build_audit_plan`.
4. Use `investigate_risk` and `get_control` to request evidence and bounded tests.
5. Use `propose_remediation` for a reviewable proposal, and `explain_finding` when asked.

The same workflow is packaged as the [audit skill](../skills/audit-ai-security/SKILL.md). See [the complete MCP contract](mcp.md) and [validation limits](validation.md).
