import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

// Explicit local operation. Cloudflare builds use the checked-in snapshot and
// never require access to the parent application repository or ASC credentials.
const parent = process.argv[2];
assert.ok(parent && !parent.startsWith('--'), 'Usage: node scripts/sync-app-metadata.mjs <app checkout> [--check]');
const mapping = { en:'en-US', zh:'zh-Hans', 'zh-Hant':'zh-Hant', ja:'ja', ko:'ko', fr:'fr-FR', de:'de-DE', es:'es-ES', pt:'pt-BR', hi:'hi', ar:'ar-SA' };
const snapshot = { schemaVersion: 1, source: 'local Fastlane metadata; not a statement of live App Store copy', locales: {} };
for (const [locale, storeLocale] of Object.entries(mapping)) {
  const entry = { storeLocale };
  for (const platform of ['ios', 'macos']) {
    const fields = {};
    for (const field of ['name', 'subtitle', 'promotional_text', 'description']) {
      const text = (await readFile(resolve(parent, 'fastlane', `metadata_${platform}`, storeLocale, `${field}.txt`), 'utf8')).trim();
      assert.ok(text, `${platform}/${storeLocale}/${field} is empty`);
      fields[field] = text;
    }
    entry[platform] = { ...fields, sha256: createHash('sha256').update(JSON.stringify(fields)).digest('hex') };
  }
  assert.equal(entry.ios.name, entry.macos.name, `${locale}: app name differs by platform`);
  assert.equal(entry.ios.subtitle, entry.macos.subtitle, `${locale}: shared subtitle differs`);
  assert.deepEqual(entry.ios.description.split(/\n\s*\n/).slice(1), entry.macos.description.split(/\n\s*\n/).slice(1), `${locale}: platform-specific features require website copy review`);
  snapshot.locales[locale] = entry;
}
const output = new URL('../src/app-metadata.json', import.meta.url);
const text = JSON.stringify(snapshot, null, 2) + '\n';
if (process.argv.includes('--check')) assert.equal(await readFile(output, 'utf8'), text, 'Website metadata snapshot is stale; rerun sync-app-metadata');
else await writeFile(output, text);
console.log(`${process.argv.includes('--check') ? 'Verified' : 'Updated'} 11 locales / 22 platform metadata sets; no ASC or app file writes.`);
