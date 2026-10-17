import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { content, origin, updated, github } from '../src/content.mjs';

const out = new URL('../dist/', import.meta.url);
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(new URL('../public/', import.meta.url), out, { recursive: true });
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const pathFor = (locale, page) => `${content[locale].prefix}${page ? `${page}/` : ''}`;
const icons = {
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',
  file: '<path d="M14 2H5v20h14V7zM14 2v6h5M8 12h8M8 16h6"/>',
  wave: '<path d="M2 10v4M6 6v12M10 2v20M14 5v14M18 8v8M22 11v2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  download: '<path d="M12 2v13m-5-5 5 5 5-5M4 17v5h16v-5"/>',
  globe: '<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>',
  shield: '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zM8 12l3 3 5-6"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const chevron = '<span aria-hidden="true">›</span>';
const urls = [];

function layout(locale, page, body, title, description, noindex = false) {
  const c = content[locale];
  const canonical = `${origin}${pathFor(locale, page)}`;
  const alternate = Object.keys(content).map(l => `<link rel="alternate" hreflang="${content[l].lang}" href="${origin}${pathFor(l, page)}">`).join('');
  const nav = `<a href="${c.prefix}#how-it-works">${c.nav[0]}</a><a href="${c.prefix}support/"${page === 'support' ? ' aria-current="page"' : ''}>${c.nav[1]}</a><a href="${c.prefix}privacy/"${page === 'privacy' ? ' aria-current="page"' : ''}>${c.nav[2]}</a>`;
  const schema = { '@context': 'https://schema.org', '@type': page ? 'WebPage' : 'WebSite', name: title, description, url: canonical, inLanguage: c.lang };
  return `<!doctype html>
<html lang="${c.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="theme-color" content="#ffffff"><meta name="google-site-verification" content="pv4XuOXnl0JMd90xPgUzJcC5JU2HUZamajjTr78mhSY">${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">${alternate}<link rel="alternate" hreflang="x-default" href="${origin}${pathFor('en', page)}">`}<meta property="og:type" content="website"><meta property="og:site_name" content="OffTranscribe"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}/assets/app-icon.png"><meta property="og:image:width" content="1024"><meta property="og:image:height" content="1024"><meta name="twitter:card" content="summary"><link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon.png"><link rel="apple-touch-icon" href="/assets/touch-icon.png"><link rel="stylesheet" href="/assets/style.css"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script></head>
<body><a class="skip" href="#main">${c.skip}</a><header><div class="wrap header"><a class="brand" href="${c.prefix}"><img src="/assets/favicon.png" alt="" width="32" height="32">OffTranscribe</a><nav aria-label="${locale === 'zh' ? '主导航' : 'Main navigation'}">${nav}<a class="language" href="${pathFor(locale === 'en' ? 'zh' : 'en', page)}" lang="${locale === 'en' ? 'zh-Hans' : 'en'}">${c.otherLabel}</a></nav></div></header>${body}<footer class="wrap"><a class="brand footer-brand" href="${c.prefix}">OffTranscribe</a><div><a href="${c.prefix}support/">${c.nav[1]}</a><a href="${c.prefix}privacy/">${c.nav[2]}</a><a href="${github}">GitHub</a><span>${c.footer}</span></div></footer></body></html>`;
}

for (const [locale, c] of Object.entries(content)) {
  const bars = [8,16,30,48,62,42,24,16,20,36,50,30,18,14,26,46,34,26,40,54,48,28,20,18,30,42,24,14,10,18,26,14,22,30,18,8];
  const hero = `<main id="main"><section class="wrap hero"><div class="hero-copy"><h1>${c.headline}</h1><p class="intro">${c.intro}</p><a class="button" href="#how-it-works">${c.cta}${chevron}</a><p class="availability">${c.availability}</p></div><figure class="transcript"><figcaption>${c.sample[0]}</figcaption><p class="time">00:12</p><p class="sample">${c.sample[1]}</p><div class="waveform" aria-hidden="true">${bars.map(height => `<i style="--height:${height}px"></i>`).join('')}</div><p class="illustrative">${c.sample[2]}</p></figure></section><section class="steps" id="how-it-works" aria-label="${c.nav[0]}"><div class="wrap steps-inner">${c.steps.map(([title, text], i) => `<div class="step"><span class="number">0${i + 1}</span><h2>${title}</h2>${icon(['mic', 'file', 'wave'][i])}<p>${text}</p></div>`).join('')}</div></section><section class="wrap privacy-overview"><div><h2>${c.privacyHeading}</h2><p>${c.privacyIntro}</p><a class="text-link" href="${c.prefix}privacy/">${c.nav[2]} ${chevron}</a></div><ul class="facts">${c.facts.map(([title, text], i) => `<li>${icon(['check', 'download', 'globe', 'shield'][i])}<div><h3>${title}</h3><p>${text}</p></div></li>`).join('')}</ul></section></main>`;
  const support = `<main id="main" class="document wrap"><h1>${c.supportTitle}</h1><p class="lead">${c.supportLead}</p><div class="contact"><a class="button" href="mailto:cameoshell09@gmail.com">${c.contact}${chevron}</a><a class="email" href="mailto:cameoshell09@gmail.com">cameoshell09@gmail.com</a><p>${c.contactWarning}</p></div><div class="faq">${c.faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div><p class="document-end"><a href="${c.prefix}privacy/">${c.nav[2]} ${chevron}</a></p></main>`;
  const privacy = `<main id="main" class="document wrap"><h1>${c.policyTitle}</h1><p class="lead">${c.policyLead}</p><p class="updated">${c.effective}</p>${c.policy.map(([title, text]) => `<section><h2>${title}</h2><p>${text}</p></section>`).join('')}<p class="document-end"><a href="mailto:cameoshell09@gmail.com">cameoshell09@gmail.com</a> · <a href="${c.prefix}support/">${c.nav[1]}</a></p><p>${c.externalPolicies} <a href="https://www.apple.com/legal/privacy/">Apple</a> · <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a> · <a href="https://policies.google.com/privacy">Google</a> · <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub</a></p></main>`;
  for (const [page, body, title, description] of [
    ['', hero, c.title, c.description],
    ['support', support, `${locale === 'zh' ? '支持' : 'Support'} — OffTranscribe`, c.supportDescription],
    ['privacy', privacy, `${locale === 'zh' ? '隐私政策' : 'Privacy Policy'} — OffTranscribe`, c.policyDescription]
  ]) {
    const route = pathFor(locale, page);
    const dir = new URL(`.${route}`, out);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL('index.html', dir), layout(locale, page, body, title, description));
    urls.push(route);
  }
}

await writeFile(new URL('404.html', out), layout('en', '', '<main id="main" class="document wrap"><h1>This page isn’t here.</h1><p><a class="button" href="/">Back to OffTranscribe</a></p></main>', 'Page not found — OffTranscribe', 'Return to OffTranscribe.', true));
await writeFile(new URL('sitemap.xml', out), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(route => `<url><loc>${origin}${route}</loc><lastmod>${updated}</lastmod></url>`).join('')}</urlset>\n`);
await writeFile(new URL('robots.txt', out), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Built ${urls.length} canonical pages, a real 404, sitemap, and robots.txt.`);
