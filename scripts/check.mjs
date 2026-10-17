import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { origin } from '../src/content.mjs';

const root = new URL('../dist/', import.meta.url);
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert.equal(urls.length, 6);
assert.equal(new Set(urls).size, 6);
for (const url of urls) {
  assert.ok(url.startsWith(`${origin}/`));
  const route = new URL(url).pathname;
  const html = await readFile(new URL(`.${route}index.html`, root), 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one H1`);
  assert.ok(html.includes(`<link rel="canonical" href="${url}">`));
  assert.ok(!html.includes('noindex'));
  assert.ok(/<meta name="description" content="[^"]{30,}"/.test(html));
  for (const locale of ['en', 'zh-Hans', 'x-default']) {
    assert.ok(html.includes(`hreflang="${locale}"`));
  }
  const schema = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  assert.equal(JSON.parse(schema[1]).url, url);
  assert.equal((html.match(/<script/g) || []).length, 1, 'No executable or analytics script');
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = match[1];
    await stat(new URL(`.${path}${path.endsWith('/') ? 'index.html' : ''}`, root));
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes(`id="${match[1]}"`), `${route}: missing anchor`);
  }
  if (route.includes('privacy') || route.includes('support')) {
    assert.ok(html.includes('mailto:cameoshell09@gmail.com'));
  }
}
const missing = await readFile(new URL('404.html', root), 'utf8');
assert.ok(missing.includes('content="noindex"'));
assert.ok(!missing.includes('rel="canonical"'));
assert.ok((await readFile(new URL('robots.txt', root), 'utf8')).includes(`${origin}/sitemap.xml`));
console.log('PASS: 6 pages; canonical/hreflang/schema; links/assets/anchors; contact; no tracking; sitemap; 404.');
