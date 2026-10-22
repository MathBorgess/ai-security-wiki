import test from 'node:test';
import assert from 'node:assert/strict';
import { vulnerableRead, authorizedRead } from '../examples/tenant-boundary.mjs';

test('synthetic before/after: deny cross-tenant effects without breaking legitimate access', () => {
  const principal = { tenant: 'tenant-a' };
  const inducedArguments = { documentId: 'doc-b', tenant: 'tenant-b' };
  assert.equal(vulnerableRead(inducedArguments), 'SYNTHETIC B');
  assert.throws(() => authorizedRead(principal, inducedArguments), /not authorized/);
  assert.equal(authorizedRead(principal, { documentId: 'doc-a' }), 'SYNTHETIC A');
  assert.throws(() => authorizedRead(null, { documentId: 'doc-a' }), /Unauthenticated/);
});
