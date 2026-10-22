# AI Security Wiki

Uma wiki e um MCP para ajudar agentes e pessoas a **entender um sistema de IA, investigar seus riscos e propor correções com evidência**.

Criei este projeto para aprofundar meu aprendizado em segurança de IA e compartilhar uma referência prática de proteção em escala. A base é o Databricks AI Security Framework. O trabalho de organizar, testar e explicar esse conhecimento é uma contribuição independente de Matheus Borges, sem vínculo oficial com o Databricks.

[Abrir a wiki](wiki/index.md) · [Instalar o MCP](docs/mcp.md) · [Conhecer os limites](docs/validation.md)

## Como funciona

1. **Identificar o sistema.** O agente pergunta sobre modelos, treinamento, RAG, provedores externos, memória e ferramentas. Um mesmo sistema pode combinar várias categorias.
2. **Selecionar riscos e controles.** O MCP usa os filtros da planilha oficial e mostra a origem de cada relação. Também destaca lacunas e casos que exigem revisão da arquitetura.
3. **Investigar.** O agente solicita configurações, permissões e rastros relevantes. Sem evidência, o resultado permanece não verificado.
4. **Propor correções.** Cada proposta aponta controles, responsáveis, critérios de teste e necessidade de reversão.
5. **Verificar e explicar.** O agente testa apenas dentro do escopo autorizado e explica o mecanismo, o impacto observado e o risco que permanece.

Exemplo: um assistente consulta documentos internos e pode abrir chamados por uma ferramenta MCP. Um documento contém uma instrução maliciosa para enviar dados a outro destino. O risco deve ser investigado na fronteira entre conteúdo recuperado, decisão do modelo e permissão da ferramenta. Uma correção possível é restringir destinos e operações no serviço que executa a ação. O teste precisa mostrar tanto o bloqueio da ação indevida quanto a continuidade do uso legítimo.

Isso não significa que essa falha existe no seu sistema. É um **exemplo sintético** do tipo de pergunta que a auditoria deve responder.

## O que a versão inclui

Snapshot de 22/10/2026: 97 riscos, 73 controles, 804 relações e sete modelos de implantação. O conteúdo reutilizável está em inglês; o prompt e a ferramenta de explicação orientam o agente a responder em português quando solicitado. Os trechos originais da fonte conservam seu idioma.

Para instalar, siga os comandos do [README principal](README.md). O MCP roda localmente, sem chave de modelo e sem conta Databricks. Ele fornece conhecimento e planos; a inspeção do seu sistema depende das ferramentas e permissões do agente que o utiliza.

## Um cuidado concreto com a fonte

A planilha tem células vazias, relações não recíprocas e marcações discutíveis. Por exemplo, a linha 9.1 de prompt injection está marcada como “No” para RAG. O projeto preserva esse dado e recomenda revisar o risco na arquitetura, sem fingir que a fonte disse outra coisa. [Veja o registro](wiki/source-issues.md).
