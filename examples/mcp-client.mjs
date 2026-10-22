import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { fileURLToPath } from 'node:url';

const client = new Client({ name: 'ai-security-wiki-demo', version: '0.1.0' });
try {
  await client.connect(new StdioClientTransport({ command: process.execPath, args: [fileURLToPath(new URL('../src/server.mjs', import.meta.url))] }));
  const classification = await client.callTool({ name: 'classify_system', arguments: {
    predictive_ml: 'no', retrieval: 'yes', fine_tuning: 'no', pretraining: 'no', foundation_model: 'yes', external_provider: 'yes', agent_actions: 'yes',
  } });
  const classified = classification.structuredContent;
  const scope = await client.callTool({ name: 'scope_risks', arguments: { deployment_patterns: classified.deployment_patterns } });
  const investigation = await client.callTool({ name: 'investigate_risk', arguments: { risk_id: '13.1' } });
  console.log(JSON.stringify({ example: 'Synthetic support agent; no target inspected or changed', classification: classified.status,
    deployment_patterns: classified.deployment_patterns, risks: scope.structuredContent.risk_count, controls: scope.structuredContent.control_count,
    architecture_review_candidates: scope.structuredContent.architecture_review_candidates.map(r => r.id),
    investigation: { risk: investigation.structuredContent.risk.id, status: investigation.structuredContent.assessment_status, memory_check: investigation.structuredContent.controls.find(c => c.control_id === 'DASF-72') },
  }, null, 2));
} finally { await client.close(); }
