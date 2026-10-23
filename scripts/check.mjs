import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { content, origin } from '../src/content.mjs';
import { languages } from '../src/languages.mjs';

const root = new URL('../dist/', import.meta.url);
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
assert.equal(urls.length, languages.length * 3);
assert.equal(new Set(urls).size, urls.length);
assert.equal(languages.length, 11);
if (process.argv[2]) {
  const catalog = JSON.parse(await readFile(process.argv[2], 'utf8'));
  const entry = Object.values(catalog.strings).find(e => e.localizations);
  assert.deepEqual(languages.map(l => l.app).sort(), Object.keys(entry.localizations).sort(), 'Website and app locale sets differ');
}
for (const language of languages) {
  const c = content[language.key];
  for (const field of ['title','description','headline','intro','cta','availability','privacyHeading','privacyIntro','supportTitle','supportDescription','supportLead','contact','contactWarning','policyTitle','policyDescription','policyLead','effective','externalPolicies']) {
    assert.ok(typeof c[field] === 'string' && c[field].trim(), `${language.key}: ${field}`);
  }
  for (const [field, count] of [['nav',3],['sample',3],['steps',3],['facts',4],['faqs',10],['policy',10]]) {
    assert.equal(c[field].length, count, `${language.key}: ${field} count`);
    assert.ok(c[field].flat().every(text => typeof text === 'string' && text.trim()));
  }
  if (!['en','zh'].includes(language.key)) assert.notEqual(c.policyLead, content.en.policyLead, 'Untranslated privacy policy');
}
for (const url of urls) {
  assert.ok(url.startsWith(`${origin}/`));
  const route = new URL(url).pathname;
  const html = await readFile(new URL(`.${route}index.html`, root), 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one H1`);
  assert.ok(html.includes(`<link rel="canonical" href="${url}">`));
  assert.ok(!html.includes('noindex'));
  assert.match(html, /href="\/assets\/tokens\.[a-f0-9]{12}\.css"/);
  assert.match(html, /href="\/assets\/style\.[a-f0-9]{12}\.css"/);
  assert.ok(/<meta name="description" content="[^"]{30,}"/.test(html));
  for (const locale of [...languages.map(l => l.lang), 'x-default']) {
    assert.ok(html.includes(`hreflang="${locale}"`));
  }
  const language = languages.find(l => url === `${origin}${l.prefix}` || url.startsWith(`${origin}${l.prefix}support/`) || url.startsWith(`${origin}${l.prefix}privacy/`));
  assert.ok(html.includes(`lang="${language.lang}" dir="${language.dir || 'ltr'}"`));
  assert.ok(html.includes('name="google-site-verification"'));
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
console.log(`PASS: ${languages.length} languages / ${urls.length} pages; complete translated content; app locale parity when supplied; canonical/hreflang/schema; links/assets/anchors; RTL; contact; no tracking; sitemap; 404.`);
