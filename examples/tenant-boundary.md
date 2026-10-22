# A concrete synthetic failure and correction

An agent can call a document-reading tool. Tenant A should never read tenant B’s document, even if the model asks for its ID. [The local example](tenant-boundary.mjs) contains only two in-memory synthetic records.

The vulnerable function looks up the document ID without checking the authenticated tenant. A bad instruction in retrieved content could influence the model’s next tool call; the missing authorization is what allows the side effect. The corrected function matches both the requested document and the tenant from the service’s authenticated context. A `tenant` field supplied in tool arguments cannot replace the authenticated principal.

Run `node --test test/tenant-boundary.test.mjs`. The test first demonstrates the cross-tenant read against the deliberately vulnerable baseline. It then verifies the denial against the corrected boundary, confirms that a legitimate read still works, and rejects missing authentication.

This illustrates [DASF-R-13.2](../wiki/risks/13.2.md), [DASF-R-13.3](../wiki/risks/13.3.md), [DASF-5](../wiki/controls/5.md) and [DASF-64](../wiki/controls/64.md). The example is a project-authored adaptation. It is not a full MCP authorization server, a real LLM attack evaluation or evidence that a production agent is protected.

## Explicação em português

O erro está na ferramenta que lê documentos: ela confia apenas no identificador solicitado e não confere a quem o documento pertence. Se o agente pedir o documento de outro cliente, a função vulnerável devolve o conteúdo.

A correção usa a identidade autenticada pelo serviço para limitar a busca ao cliente certo. O teste mostra três coisas separadas: a versão vulnerável permite a leitura indevida; a versão corrigida bloqueia essa tentativa; e a leitura legítima continua funcionando. Na aplicação real, ainda seria necessário verificar a autenticação, os demais caminhos de acesso e os registros da operação.
