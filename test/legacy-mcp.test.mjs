import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

test('2025-11-25 MCP handshake and tool call remain interoperable', { timeout: 10000 }, async () => {
  const child = spawn(process.execPath, [fileURLToPath(new URL('../src/server.mjs', import.meta.url))], { stdio: ['pipe', 'pipe', 'pipe'] });
  const lines = createInterface({ input: child.stdout });
  const pending = new Map(); let id = 0;
  lines.on('line', line => {
    const value = JSON.parse(line);
    if (value.id !== undefined && pending.has(value.id)) { pending.get(value.id)(value); pending.delete(value.id); }
  });
  const call = (method, params) => new Promise(resolve => {
    id += 1; pending.set(id, resolve); child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
  try {
    const init = await call('initialize', { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'legacy-reference-test', version: '1' } });
    assert.equal(init.result.protocolVersion, '2025-11-25');
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
    const list = await call('tools/list', {}); assert.equal(list.result.tools.length, 10);
    const result = await call('tools/call', { name: 'get_risk', arguments: { risk_id: '13.1' } });
    assert.equal(result.result.structuredContent.risk.id, 'DASF-R-13.1');
  } finally {
    lines.close(); child.stdin.end(); child.kill('SIGTERM');
  }
});
