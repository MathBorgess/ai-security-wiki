// Synthetic, in-memory demonstration. No network, credentials or real customer data.
const records = [
  { id: 'doc-a', tenant: 'tenant-a', text: 'SYNTHETIC A' },
  { id: 'doc-b', tenant: 'tenant-b', text: 'SYNTHETIC B' },
];

export function vulnerableRead({ documentId }) {
  return records.find(r => r.id === documentId)?.text;
}

export function authorizedRead(authenticatedPrincipal, { documentId }) {
  // The principal comes from the authenticated service context, not model arguments.
  if (!authenticatedPrincipal?.tenant) throw new Error('Unauthenticated');
  const record = records.find(r => r.id === documentId && r.tenant === authenticatedPrincipal.tenant);
  if (!record) throw new Error('Not found or not authorized');
  return record.text;
}
