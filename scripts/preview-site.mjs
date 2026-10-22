import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, relative, extname } from 'node:path';
import { buildSite } from './site.mjs';

const port = 4173;
const base = '/ai-security-wiki/';
const result = buildSite({ url: `http://127.0.0.1:${port}${base}` });
const types = { '.html': 'text/html; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer((req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!pathname.startsWith(base) || !['GET', 'HEAD'].includes(req.method)) { res.writeHead(404); res.end('Not found'); return; }
    let file = resolve(result.output, pathname.slice(base.length) || 'index.html');
    if (relative(result.output, file).startsWith('..') || !existsSync(file) || !statSync(file).isFile()) {
      res.writeHead(404, { 'Content-Type': types['.html'] }); res.end(readFileSync(resolve(result.output, '404.html'))); return;
    }
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : readFileSync(file));
  } catch { res.writeHead(400); res.end('Bad request'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${port}${base}`));
process.once('SIGINT', () => server.close());
process.once('SIGTERM', () => server.close());
