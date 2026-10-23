import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { buildSite, DEFAULT_URL, publicSources, renderMarkdown, siteUrl } from '../scripts/site.mjs';

const temporary = mkdtempSync(join(tmpdir(), 'ai-security-site-test-'));
const build = buildSite({ output: join(temporary, 'public') });
const read = path => readFileSync(join(build.output, path), 'utf8');
after(() => rmSync(temporary, { recursive: true }));

test('static site exposes every source record in HTML and Markdown without JavaScript', () => {
  assert.equal(build.referenceCount, 170);
  assert.equal(build.pageCount, publicSources().length);
  const home = read('index.html');
  assert.equal((home.match(/<tr data-kind=/g) || []).length, 170);
  for (const page of build.pages) {
    const file = new URL(page.url).pathname.replace('/ai-security-wiki/', '') || 'index.html';
    const html = read(file);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file);
    assert.ok(html.includes(`<link rel="canonical" href="${page.url}">`));
    assert.ok(html.includes(`<link rel="alternate" type="text/markdown" href="${page.markdown}">`));
    assert.ok(html.includes('<meta name="description" content="'));
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema.url, page.url);
    assert.equal(schema.author.name, 'Matheus Borges');
    const markdown = read(new URL(page.markdown).pathname.replace('/ai-security-wiki/', ''));
    assert.ok(markdown.includes('# '));
  }
});

test('published internal links, alternates, assets and sitemap resolve to generated files', () => {
  const failures = [];
  for (const page of build.pages) {
    const file = new URL(page.url).pathname.replace('/ai-security-wiki/', '') || 'index.html';
    for (const [, raw] of read(file).matchAll(/(?:href|src)="([^"]+)"/g)) {
      const url = new URL(raw.replace(/&amp;/g, '&'), page.url);
      if (url.origin !== new URL(DEFAULT_URL).origin) continue;
      const target = decodeURIComponent(url.pathname.replace('/ai-security-wiki/', '')) || 'index.html';
      if (!existsSync(resolve(build.output, target))) failures.push(`${file} -> ${target}`);
      if (url.hash && target.endsWith('.html') && existsSync(resolve(build.output, target))) {
        const id = decodeURIComponent(url.hash.slice(1));
        if (!read(target).includes(`id="${id}"`)) failures.push(`${file} -> ${target}#${id}`);
      }
    }
  }
  assert.deepEqual(failures, []);
  assert.equal((read('sitemap.xml').match(/<loc>/g) || []).length, build.pageCount);
  for (const page of build.pages) assert.ok(read('sitemap.xml').includes(`<loc>${page.url}</loc>`));
});

test('untrusted Markdown cannot inject HTML, script URLs, images or event handlers', () => {
  const text = '# Test\n<script>alert(1)</script>\n<img src=x onerror=alert(1)>\n\n[x](javascript:alert(1))\n\n![tracking](https://example.com/pixel.png)';
  const result = renderMarkdown(text, 'wiki/test.md', new Set(), siteUrl()).html;
  assert.ok(!result.includes('<script>'));
  assert.ok(!result.includes('<img'));
  assert.ok(!result.includes('href="javascript:'));
  assert.ok(result.includes('&lt;script&gt;'));
  assert.ok(result.includes('href="https://example.com/pixel.png"'));
});

test('deployment is allowlisted and does not publish source code or private run configuration', () => {
  for (const path of ['src/server.mjs', 'node_modules', '.git', '.impeccable', 'private', 'audits', 'PRODUCT.md', 'sources/compendium.json']) assert.ok(!existsSync(join(build.output, path)), path);
  assert.ok(existsSync(join(build.output, 'data/catalog.json')));
  assert.ok(!existsSync(join(build.output, 'robots.txt')));
  assert.ok(read('robots.example.txt').includes('Example only'));
  assert.ok(read('404.html').includes('content="noindex"'));
  for (const path of ['wiki/research/jason-haddix.html', 'wiki/research/jhaddix-inventory.html', 'skills/map-attack-surface/SKILL.html', 'skills/map-attack-surface/references/methods.md']) assert.ok(existsSync(join(build.output, path)), path);
  assert.ok(!existsSync(join(build.output, 'skills/map-attack-surface/evals')));
  assert.ok(!existsSync(join(build.output, 'skills/map-attack-surface/agents')));
  assert.ok(read('index.html').includes('wiki/research/jason-haddix.html'));
  assert.ok(read('llms.txt').includes('skills/map-attack-surface/SKILL.md'));
});

test('site origin configuration validates schemes and protects non-generated output', () => {
  assert.throws(() => siteUrl('javascript:alert(1)'));
  assert.throws(() => siteUrl('https://name:secret@example.com/'));
  assert.throws(() => siteUrl('https://example.com/?token=value'));
  assert.throws(() => buildSite({ output: temporary }), /unmarked/);
  assert.equal(siteUrl('https://example.com/docs').href, 'https://example.com/docs/');
});
