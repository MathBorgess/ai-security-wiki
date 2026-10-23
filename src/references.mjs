import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Only reviewed, bundled public documents. Caller input never becomes a file path.
export const references = {
  index: 'wiki/index.md', methodology: 'wiki/methodology.md', 'agent-security': 'wiki/agent-security.md',
  glossary: 'wiki/glossary.md', 'finding-template': 'wiki/templates/finding.md', 'source-issues': 'wiki/source-issues.md',
  'source-register': 'wiki/sources.md', toolkit: 'wiki/toolkit.md',
  skill: 'skills/audit-ai-security/SKILL.md', personality: 'skills/audit-ai-security/references/personality.md',
  methods: 'skills/audit-ai-security/references/methods.md', 'review-rubric': 'skills/audit-ai-security/references/review-rubric.md',
  'skill-sources': 'skills/audit-ai-security/references/sources.md',
  'security-research': 'wiki/research/index.md', pentagi: 'wiki/research/pentagi.md',
  'cloudflare-audit': 'wiki/research/cloudflare-security-audit.md', 'red-blue-field': 'wiki/research/red-blue-field.md',
  'evidence-playbook': 'guides/evidence-driven-audit.md', 'coverage-template': 'wiki/templates/coverage-ledger.md',
};
export const researchSources = JSON.parse(readFileSync(new URL('../sources/research.json', import.meta.url), 'utf8'));
const sourceIds = {
  'security-research': ['S7', 'S8', 'S9'], pentagi: ['S7'], 'cloudflare-audit': ['S8'], 'red-blue-field': ['S9'],
  'evidence-playbook': ['S7', 'S8', 'S9'], 'coverage-template': ['S8'],
};
const aliases = {
  pentagi: 'PentestAGI pentest investigation investigacao',
  'cloudflare-audit': 'security audit skill auditoria seguranca verificacao',
  'evidence-playbook': 'audit evidence hypothesis cobertura hipotese correcao reteste',
  'coverage-template': 'coverage ledger cobertura auditoria',
};
export function readReference(name) {
  if (!Object.hasOwn(references, name)) throw new Error('Unknown reference');
  return readFileSync(fileURLToPath(new URL(`../${references[name]}`, import.meta.url)), 'utf8');
}
export const referenceRecords = Object.entries(references).map(([name, path]) => {
  const text = readReference(name);
  return {
    id: `REF-${name}`, name, path, uri: `dasf://wiki/${name}`,
    title: text.match(/^# (.+)$/m)?.[1] || name,
    provenance: {
      type: 'project-authored-reference',
      inspected_on: sourceIds[name] ? researchSources.inspected_on : null,
      source_ids: sourceIds[name] || [],
      sources: (sourceIds[name] || []).map(id => researchSources.sources.find(s => s.id === id)),
      attribution: 'Project synthesis; consult document citations. Not an official DASF mapping or a verified target finding.',
    },
    text, aliases: aliases[name] || '',
  };
});
export const researchReferences = referenceRecords.filter(r => Object.hasOwn(sourceIds, r.name));
export const referenceSummary = ({ text, aliases, ...summary }) => summary;
