# Publication record — 2026-10-17

## Production

- Independent repository: `https://github.com/qq345386817/OffTranscribe`, branch `main`.
- Cloudflare Pages project: `offtranscribe`, Git integration and automatic production deployment enabled.
- Build: `npm run build`; output: `dist`; no dependency installation required.
- Production: `https://offtranscribe.luopeike.com/`.
- CNAME: `offtranscribe` → `offtranscribe.pages.dev`, proxied, automatic TTL.
- Initial content commit: `0c822b0`; public Google verification commit: `a3674b0`.
- App availability remains **pre-release**. Website publication does not submit or release the app.
- Support email explicitly provided by the owner: `cameoshell09@gmail.com`.

## Search Console

- URL-prefix property: `https://offtranscribe.luopeike.com/`.
- Ownership verified using the public HTML meta tag in the generated head. Keep it in future deployments.
- `sitemap.xml` submitted on October 17, 2026; Google reported **Success** and **6 discovered pages**.
- Discovery/submission is not confirmation that pages are indexed. New-resource reports initially show processing.

## Privacy and edge configuration

No website analytics or executable application JavaScript is included in source. JSON-LD is structured metadata, not tracking. The Pages project's own Web Analytics was already disabled, but the apex domain had RUM automatic injection enabled excluding EU visitors. Browser inspection found an automatically injected Cloudflare beacon.

A Configuration Rule was deployed, named **OffTranscribe - disable automatic analytics**:

```text
(http.host eq "offtranscribe.luopeike.com")
Action: Disable Real User Monitoring (RUM)
```

The rule is Active and matches only this hostname. Other luopeike.com websites retain their settings. A fresh production browser load subsequently contained only the JSON-LD script, with no analytics beacon. Hosting/security request processing remains covered in the privacy policy.

References: [Cloudflare Configuration Rules settings](https://developers.cloudflare.com/rules/configuration-rules/settings/), [Web Analytics rule precedence](https://developers.cloudflare.com/web-analytics/configuration-options/rules/), [Google sitemap reporting](https://support.google.com/webmasters/answer/7451001).

## Verification

- `npm run build` and `npm run check`: pass, six canonical pages, valid language alternates and structured data, linked resources and fragments, contact links, real noindex 404, sitemap and robots.txt.
- Chrome browser inspection: homepage, workflow jump, support FAQ open/close, email link destination, English/Chinese matching-page switch, Chinese privacy page.
- Desktop design comparison at the concept's actual 1080 px width; responsive checks at 390 × 844 and 320 × 740, no horizontal overflow. Temporary viewport override reset afterward.
- Live HTTP checks: English home/support/privacy and Chinese support/privacy return 200; robots.txt and sitemap return 200; a nonexistent URL returns 404. Initial propagation produced a temporary 522, and one later Chinese homepage request timed out; these failed observations were retained separately from successful browser/GSC checks.
- Live response headers include CSP and `X-Content-Type-Options: nosniff`.
- No claims of whole-device zero network, universal accuracy, guaranteed background completion, or an already-live App Store release.

## Visual comparison ledger

The built-in Image Gen tool produced the selected compact full-page concept. The concept is a layout reference, not an app screenshot or a website bitmap. The site is semantic HTML/CSS, with the project's existing original app icon. Concept and browser-rendered screenshots were both inspected with `view_image`.

| Comparison | Render check / adjustment |
| --- | --- |
| Copy | Exact hero heading, description, workflow CTA, sample sentence, and pre-release/free note retained; no additional hero eyebrow or fake download badge |
| Layout | Two-column hero, single transcript sheet, lavender three-step band, open privacy section, quiet footer |
| Typography | Initial hero was too small; increased desktop scale to match the concept and corrected hero spacing |
| Palette | True white canvas, near-black text, lavender band, purple waveform; no added gradient or tint |
| Frames and icons | One transcript frame; line icons retain microphone/document/waveform meanings; no default card grid |
| Responsive | Hero and privacy columns stack; numbered steps become rows; header stays usable at 320 px |
| Interactions | CTA scroll, native FAQ disclosure, corresponding-language links and real mailto destination work |

Intentional deviations: use the existing app icon in the header; replace the concept's Apple logo with a neutral check icon to avoid implying endorsement; expand model facts with real sizes, installation space, support limits and accurate privacy wording; add a policy link. The additional copy makes the page taller than the concept. No material visual defects were left in the inspected views.

The local concept, screenshots and raw checks are kept in the parent project's ignored `.cache/website-release/`, outside this repository and deployment. No models, audio, generated concept images, screenshots, credentials or third-party dependencies are committed.
