import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, relative } from 'node:path';
import { ROOT } from '../src/knowledge.mjs';

function markdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['node_modules', '.git', '_site', '.impeccable'].includes(entry.name)) return [];
    const path = resolve(dir, entry.name);
    return entry.isDirectory() ? markdownFiles(path) : entry.name.endsWith('.md') ? [path] : [];
  });
}

test('local wiki and skill links resolve inside the public repository', () => {
  const failures = [];
  for (const path of markdownFiles(ROOT)) {
    const text = readFileSync(path, 'utf8').replace(/```[\s\S]*?```/g, '');
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^(https?:|mailto:|dasf:)/.test(target)) continue;
      const resolved = resolve(dirname(path), decodeURIComponent(target));
      if (relative(ROOT, resolved).startsWith('..') || !existsSync(resolved)) failures.push(`${relative(ROOT, path)} -> ${target}`);
    }
  }
  assert.deepEqual(failures, []);
});
