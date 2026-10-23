import { mkdir, writeFile, readFile, cp, rm } from 'node:fs/promises';
import { content, origin, updated, github } from '../src/content.mjs';
import { languages } from '../src/languages.mjs';
import { createHash } from 'node:crypto';

const out = new URL('../dist/', import.meta.url);
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(new URL('../public/', import.meta.url), out, { recursive: true });
const tokens = JSON.parse(await readFile(new URL('../design-system/tokens.json', import.meta.url), 'utf8'));
const rules = [];
for (const family of ['color', 'spacing', 'radius', 'shadow']) {
  for (const token of tokens[family].tokens) {
    const value = typeof token.value === 'string' ? token.value : token.value.light;
    rules.push(`--${token.name}:${value.replace(/\{([\w-]+)\}/g, 'var(--$1)')}`);
  }
}
for (const [name, value] of Object.entries(tokens.type.families)) rules.push(`--font-${name}:${value}`);
for (const group of tokens.type.groups) for (const style of group.styles) {
  for (const [key, suffix] of [['fontSize','size'], ['lineHeight','leading'], ['fontWeight','weight'], ['letterSpacing','tracking']]) {
    if (style[key] !== undefined) rules.push(`--${suffix}-${style.name}:${style[key]}`);
  }
}
const tokenCSS = `/* Generated from design-system/tokens.json. */\n:root{${rules.join(';')}}\n`;
const styleCSS = await readFile(new URL('../public/assets/style.css', import.meta.url), 'utf8');
const fingerprint = text => createHash('sha256').update(text).digest('hex').slice(0,12);
const tokenPath = `/assets/tokens.${fingerprint(tokenCSS)}.css`;
const stylePath = `/assets/style.${fingerprint(styleCSS)}.css`;
await writeFile(new URL('assets/tokens.css', out), tokenCSS);
await writeFile(new URL('.' + tokenPath, out), tokenCSS);
await writeFile(new URL('.' + stylePath, out), styleCSS);
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const pathFor = (locale, page) => `${content[locale].prefix}${page ? `${page}/` : ''}`;
const icons = {
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',
  file: '<path d="M14 2H5v20h14V7zM14 2v6h5M8 12h8M8 16h6"/>',
  wave: '<path d="M2 10v4M6 6v12M10 2v20M14 5v14M18 8v8M22 11v2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  download: '<path d="M12 2v13m-5-5 5 5 5-5M4 17v5h16v-5"/>',
  globe: '<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>',
  shield: '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zM8 12l3 3 5-6"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  lock: '<rect x="5" y="10" width="14" height="12" rx="3"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 15v3"/>'
};
const icon = (name, className = '') => `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const arrow = icon('arrow', 'arrow');
const urls = [];

function layout(locale, page, body, title, description, noindex = false) {
  const c = content[locale];
  const canonical = `${origin}${pathFor(locale, page)}`;
  const alternate = Object.keys(content).map(l => `<link rel="alternate" hreflang="${content[l].lang}" href="${origin}${pathFor(l, page)}">`).join('');
  const languageMenu = `<details class="language-menu"><summary>${icon('globe')}<span>${c.menu}</span></summary><ul>${languages.map(l => `<li><a href="${pathFor(l.key, page)}" lang="${l.lang}" hreflang="${l.lang}"${l.key === locale ? ' aria-current="true"' : ''}>${l.name}</a></li>`).join('')}</ul></details>`;
  const nav = `<a href="${c.prefix}#how-it-works">${c.nav[0]}</a><a href="${c.prefix}support/"${page === 'support' ? ' aria-current="page"' : ''}>${c.nav[1]}</a><a href="${c.prefix}privacy/"${page === 'privacy' ? ' aria-current="page"' : ''}>${c.nav[2]}</a>`;
  const schema = { '@context': 'https://schema.org', '@type': page ? 'WebPage' : 'WebSite', name: title, description, url: canonical, inLanguage: c.lang };
  return `<!doctype html>
<html lang="${c.lang}" dir="${c.dir || 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="theme-color" content="${tokens.color.tokens.find(t => t.name === 'canvas').value}"><meta name="google-site-verification" content="pv4XuOXnl0JMd90xPgUzJcC5JU2HUZamajjTr78mhSY">${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">${alternate}<link rel="alternate" hreflang="x-default" href="${origin}${pathFor('en', page)}">`}<meta property="og:type" content="website"><meta property="og:site_name" content="OffTranscribe"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/assets/app-icon.png"><meta property="og:image:width" content="1024"><meta property="og:image:height" content="1024"><meta name="twitter:card" content="summary"><link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon.png"><link rel="apple-touch-icon" href="/assets/touch-icon.png"><link rel="stylesheet" href="${tokenPath}"><link rel="stylesheet" href="${stylePath}"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script></head>
<body><a class="skip" href="#main">${c.skip}</a><header class="site-header"><div class="wrap header"><a class="brand" href="${c.prefix}"><img src="/assets/favicon.png" alt="" width="32" height="32">OffTranscribe</a><nav aria-label="${c.navigation}">${nav}</nav>${languageMenu}</div></header>${body}<footer class="wrap footer"><div><a class="brand footer-brand" href="${c.prefix}">OffTranscribe</a><p class="footer-formats" dir="ltr">TXT · Markdown · SRT</p></div><nav aria-label="${c.navigation}"><a href="${c.prefix}support/">${c.nav[1]}</a><a href="${c.prefix}privacy/">${c.nav[2]}</a><a href="${github}">GitHub</a></nav><p>${c.footer}</p></footer></body></html>`;
}

for (const [locale, c] of Object.entries(content)) {
  const bars = [8,16,30,48,62,42,24,16,20,36,50,30,18,14,26,46,34,26,40,54,48,28,20,18,30,42,24,14,10,18,26,14,22,30,18,8];
  const headline = c.headline.split('<br>').map((line, i) => `<span${i ? ' class="headline-accent"' : ''}>${line}</span>`).join(' ');
  const hero = `<main id="main"><section class="wrap hero"><div class="hero-copy"><p class="eyebrow platform-label" dir="ltr">iPhone · iPad · Mac</p><h1>${headline}</h1><p class="intro">${c.intro}</p><div class="hero-actions"><a class="button" href="#how-it-works">${c.cta}${arrow}</a><a class="button button-secondary" href="${c.prefix}support/">${c.nav[1]}${arrow}</a></div><p class="availability"><span class="status-dot" aria-hidden="true"></span>${c.availability}</p></div><div class="preview-stage"><figure class="transcript"><div class="transcript-top">${icon('file')}<figcaption>${c.sample[0]}</figcaption>${icon('lock', 'preview-lock')}</div><div class="transcript-content"><p class="time" dir="ltr">00:12</p><p class="sample">${c.sample[1]}</p></div><div class="waveform" aria-hidden="true">${bars.map(height => `<i style="--height:${height}px"></i>`).join('')}</div><div class="transcript-bottom"><span dir="ltr">TXT · MD · SRT</span>${icon('check')}</div></figure><p class="illustrative">${c.sample[2]}</p></div></section><section class="platform-strip" aria-label="${c.facts[2][0]}"><div class="wrap platform-inner"><span dir="ltr">iOS / iPadOS 26+</span><span dir="ltr">macOS 26+</span><span dir="ltr">TXT · Markdown · SRT</span></div></section><section class="wrap workflow" id="how-it-works" aria-labelledby="workflow-heading"><div class="section-heading"><p class="eyebrow">OffTranscribe</p><h2 id="workflow-heading">${c.nav[0]}</h2></div><div class="steps-inner">${c.steps.map(([title, text], i) => `<article class="step"><div class="step-top"><span class="number" dir="ltr">0${i + 1}</span>${icon(['mic', 'file', 'wave'][i])}</div><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section><section class="privacy-band"><div class="wrap privacy-overview"><div class="privacy-copy">${icon('shield', 'privacy-mark')}<h2>${c.privacyHeading}</h2><p>${c.privacyIntro}</p><a class="text-link" href="${c.prefix}privacy/">${c.nav[2]}${arrow}</a></div><ul class="facts">${c.facts.map(([title, text], i) => `<li>${icon(['check', 'download', 'globe', 'lock'][i])}<div><h3>${title}</h3><p>${text}</p></div></li>`).join('')}</ul></div></section></main>`;
  const support = `<main id="main" class="document support-page wrap"><div class="page-heading"><p class="eyebrow">${c.nav[1]}</p><h1>${c.supportTitle}</h1><p class="lead">${c.supportLead}</p></div><div class="support-layout"><aside class="contact"><div class="contact-icon">${icon('wave')}</div><h2>${c.contact}</h2><a class="button" href="mailto:cameoshell09@gmail.com">${c.contact}${arrow}</a><a class="email" href="mailto:cameoshell09@gmail.com">cameoshell09@gmail.com</a><p>${c.contactWarning}</p></aside><div class="faq">${c.faqs.map(([question, answer]) => `<details><summary><span>${question}</span>${icon('plus', 'plus')}</summary><p>${answer}</p></details>`).join('')}</div></div><p class="document-end"><a href="${c.prefix}privacy/">${c.nav[2]}${arrow}</a></p></main>`;
  const privacy = `<main id="main" class="document privacy-page wrap"><div class="page-heading"><p class="eyebrow">${c.nav[2]}</p><h1>${c.policyTitle}</h1><p class="lead">${c.policyLead}</p><p class="updated">${c.effective}</p></div><div class="policy-layout"><details class="policy-index" open><summary>${c.nav[2]}${icon('plus', 'plus')}</summary><nav aria-label="${c.nav[2]}">${c.policy.map(([title], i) => `<a href="#policy-${i + 1}"><span dir="ltr">${String(i + 1).padStart(2,'0')}</span>${title}</a>`).join('')}</nav></details><div class="policy-prose">${c.policy.map(([title, text], i) => `<section id="policy-${i + 1}"><h2>${title}</h2><p>${text}</p></section>`).join('')}<p class="document-end"><a href="mailto:cameoshell09@gmail.com">cameoshell09@gmail.com</a> · <a href="${c.prefix}support/">${c.nav[1]}</a></p><p class="external-policies">${c.externalPolicies} <a href="https://www.apple.com/legal/privacy/">Apple</a> · <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a> · <a href="https://policies.google.com/privacy">Google</a> · <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub</a></p></div></div></main>`;
  for (const [page, body, title, description] of [
    ['', hero, c.title, c.description],
    ['support', support, `${c.nav[1]} — OffTranscribe`, c.supportDescription],
    ['privacy', privacy, `${c.nav[2]} — OffTranscribe`, c.policyDescription]
  ]) {
    const route = pathFor(locale, page);
    const dir = new URL(`.${route}`, out);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL('index.html', dir), layout(locale, page, body, title, description));
    urls.push(route);
  }
}

await writeFile(new URL('404.html', out), layout('en', '', '<main id="main" class="document wrap"><div class="page-heading"><h1>This page isn’t here.</h1><p><a class="button" href="/">Back to OffTranscribe</a></p></div></main>', 'Page not found — OffTranscribe', 'Return to OffTranscribe.', true));
await writeFile(new URL('sitemap.xml', out), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(route => `<url><loc>${origin}${route}</loc><lastmod>${updated}</lastmod></url>`).join('')}</urlset>\n`);
await writeFile(new URL('robots.txt', out), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Built ${urls.length} canonical pages, design tokens, a real 404, sitemap, and robots.txt.`);
