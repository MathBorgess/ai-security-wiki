# Security policy and threat model

This project distributes reference content and a local stdio MCP server. Its assets are the integrity of the catalog, faithful source attribution, the host’s filesystem/process boundary and the distinction between guidance and authority.

The runtime reads a bundled catalog and allowlisted Markdown files. It has no network fetch, shell execution, target connector, arbitrary-path read, remediation action or persistent audit store. Tool schemas bound inputs, IDs resolve through catalog maps, and the stdio transport caps the unread buffer at 1 MiB. Dependency versions are locked and installation scripts are unnecessary.

Trust assumptions: users review the checkout and dependencies before running it; the local process has the host account’s privileges; the host controls tool invocation and its own logs. A compromised checkout or dependency can exceed the behavior promised by this code. Catalog hashes detect accidental divergence, not a malicious maintainer who changes both data and hashes.

Retrieved descriptions, tool examples and caller observations remain untrusted data. They do not authorize actions by a connected agent. Server annotations are descriptive hints. The agent’s actual enforcement boundaries belong in its host and downstream services.

Residual risks include source errors, outdated external documentation, misleading source mappings, model misinterpretation, dependency vulnerabilities and overconfidence in unexecuted checks. See [source issues](wiki/source-issues.md) and [validation](docs/validation.md).

If you find a vulnerability in this project, use GitHub’s **Report a vulnerability** feature when available. Otherwise open an issue containing only a minimal nonsensitive description and ask for a private coordination channel. Do not publish live credentials, customer information or an exploit against an unrelated target in an issue.
