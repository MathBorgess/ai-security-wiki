# MCP security checklist for clients, servers and tools

MCP connects a model-facing client to tools and resources. An audit needs to distinguish the **client**, the **server**, the **identity used downstream**, and the **operation actually authorized**. This project-authored checklist connects the [DASF agent risks](../wiki/components/13.md) to concrete evidence requests.

## Start with the trust boundaries

Draw user → agent host → MCP client → MCP server → downstream API or data store. Name the principal at each hop. Record transport, server origin, tool permissions, credentials, tenants, logs and approval requirements. A read-only annotation describes a tool; the downstream service must enforce the permission.

| Review area | What to inspect | Useful test | DASF starting point |
|---|---|---|---|
| Server identity | Expected origin, ownership and authenticated connection | Reject an unexpected server or identity | [Malicious connection, 13.26](../wiki/risks/13.26.md), [server validation, 13.29](../wiki/risks/13.29.md) |
| Tool definitions | Provenance and review of names, descriptions and schema changes | Treat hostile metadata as data; reject unauthorized tool changes | [Tool poisoning, 13.18](../wiki/risks/13.18.md) |
| Credentials | Audience, scope, lifetime, storage and downstream use | Reject wrong-audience or expired credentials | [Token exposure, 13.19](../wiki/risks/13.19.md), [confused deputy, 13.17](../wiki/risks/13.17.md) |
| Authorization | Tenant, actor, action and resource checks at execution time | Deny cross-tenant access while allowing legitimate access | [Excessive permissions, 13.22](../wiki/risks/13.22.md), [DASF-64](../wiki/controls/64.md) |
| Content and outputs | Untrusted tool results, retrieval and rendering paths | Keep output content from becoming an instruction or executable markup | [Prompt injection, 13.16](../wiki/risks/13.16.md), [client execution, 13.32](../wiki/risks/13.32.md) |
| Sessions and approvals | Actor binding, expiry and exact approved arguments | Reject replay and changes after approval | [Session/state management, 13.34](../wiki/risks/13.34.md) |
| Supply chain | Pinned artifacts, provenance and update review | Detect changed dependencies and review a version update | [Supply chain, 13.21](../wiki/risks/13.21.md), [patching, 13.35](../wiki/risks/13.35.md) |

## Local stdio and remote services have different exposure

A local stdio server is a process started by the host. Review what executable runs, its dependencies, environment and operating-system permissions. A local command can still be dangerous even without a public listening port.

A remote MCP service adds network-facing authentication, authorization, transport, origin and abuse-control concerns. Use the protocol's current [security guidance](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) alongside the DASF controls for [custom servers](../wiki/controls/69.md) and [external servers](../wiki/controls/70.md).

## A concrete correction proposal

**Synthetic scenario:** a support tool accepts `tenant_id` from model-generated arguments and reads the requested tenant without checking the authenticated caller. The enforcement defect is the missing authorization check, regardless of whether a malicious prompt caused the call.

Bind the permitted tenant to verified request identity, enforce resource ownership in the service, and reject mismatches. Keep a test for a legitimate same-tenant request. The [local example](../examples/tenant-boundary.md) shows this narrow before/after behavior.

## Use this project's MCP as a reference

The AI Security Wiki server reads its bundled catalog, returns evidence requests and proposes checks. It does not inspect your MCP servers or apply patches. [Integration instructions](../docs/clients.md) explain local setup; [the audit workflow](../wiki/methodology.md) explains how the calling agent uses it.
