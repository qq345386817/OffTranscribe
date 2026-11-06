import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { languages } from './languages.mjs';
export const origin = 'https://offtranscribe.luopeike.com';
export const updated = '2026-11-07';
export const github = 'https://github.com/qq345386817/OffTranscribe';
export const supportEmail = 'cameoshell09@gmail.com';
export const appMetadata = JSON.parse(await readFile(new URL('./app-metadata.json', import.meta.url), 'utf8'));
assert.equal(appMetadata.schemaVersion, 1);
export const content = {};
for (const language of languages) {
  const c = JSON.parse(await readFile(new URL(`./locales/${language.key}.json`, import.meta.url), 'utf8'));
  Object.assign(c, language);
  const metadata = appMetadata.locales[language.key];
  assert.ok(metadata?.ios && metadata?.macos, `Missing metadata: ${language.key}`);
  const paragraphs = metadata.ios.description.split(/\n\s*\n/);
  assert.equal(paragraphs.length, 13, `Review the changed metadata structure: ${language.key}`);
  assert.ok(paragraphs[6].includes('Whisper') && paragraphs[8].includes('iCloud') && paragraphs[11].includes('SRT'));
  const section = index => {
    const [heading, ...lines] = paragraphs[index].split('\n');
    assert.ok(heading && lines.join(' ').trim(), `Missing section ${index}: ${language.key}`);
    return [heading, lines.join(' ').trim()];
  };
  c.appName = metadata.ios.name;
  c.description = metadata.ios.promotional_text;
  c.steps = [1,2,3].map(section);
  c.facts = [5,6,7,8].map(section);
  c.faqs[5][1] = [1,2,4].map(index => section(index)[1]).join(' ');
  c.faqs[6][1] = c.backgroundAnswer;
  c.faqs[9][1] = section(8)[1];
  c.faqs.push([c.notesQuestion, section(3)[1]], [c.syncQuestion, `${section(8)[1]} ${c.cloudPolicy}`]);
  c.policy[0][1] = section(8)[1];
  c.policy[2][1] += ` ${c.photoPermission}`;
  // Retain the ten old fragment IDs when inserting the two new policy sections.
  c.policyIDs = ['policy-1','policy-icloud','policy-notes',...c.policy.slice(1).map((_,i) => `policy-${i+2}`)];
  c.policy = [c.policy[0], [c.cloudHeading,c.cloudPolicy], [c.notesHeading,section(3)[1]], ...c.policy.slice(1)];
  content[language.key] = c;
}
