# Publication record — 2026-10-17

## Website redesign — October 24, 2026

User authorized redesign using the design and design-system skills, followed by direct publication after verification. New foundations and website implementation are ready for the existing Git-integrated Cloudflare Pages project; publication is recorded below after verifying the deployed result.

Local checks completed: 11 languages / 33 canonical pages, native app locale parity, original icon and policy copy retained, matching canonical / hreflang / JSON-LD / verification tag, resource links, fragments, 404 and no executable / tracking scripts. Thirteen specified foreground/background pairs meet at least 4.5:1 (minimum 5.33:1). All 33 routes were observed at 320×740 with no horizontal overflow: 31 through DOM dimensions and two through the documented browser CDP layout metrics. Additional desktop views and Arabic RTL were visually inspected. Native FAQ expansion, privacy section navigation and matching-page language navigation were exercised. A language dropdown that initially overflowed at 320px was corrected by separating it from the translated navigation row.

Browser automation intermittently timed out; failed attempts were not counted as passes. Subsequent fresh-tab and documented layout checks supplied the missing observations. Skill-specific editor check/import tools were unavailable, so no official design-card validation or imported asset library is claimed. The editable draft uses a plain wordmark; the production site retains its original real icon.

Local drafts, raw checks and captures remain in ignored workspace paths. The website keeps its existing 33 URLs; sitemap lastmod advances to October 24 for the redesign. No new Search Console property or duplicate sitemap submission is needed for unchanged URLs, and no new indexing result is claimed. The public Apple US lookup returned zero results on this date; pre-release copy and absence of download badges are retained. This does not establish availability in every storefront.

## Repository and sitemap maintenance — October 18, 2026

- Rebuilt and checked all 11 languages / 33 pages, including parity with the native app language catalog.
- Fetched the live `sitemap.xml`: it is byte-for-byte identical to the generated file and has 33 unique canonical URLs. Live `robots.txt` points to the canonical custom-domain sitemap. One initial TLS probe timed out; the retry succeeded.
- Refreshed the existing Search Console property: `/sitemap.xml` reports **Success**, **33 discovered pages**, and last read October 17. No URL or sitemap change is required, so no duplicate submission was made. Discovered pages do not prove indexing.
- The native iOS app and both model asset packs were submitted for App Store review on October 18. Keep the site's pre-release wording and omit public download badges until public availability is verified. The macOS app was not submitted.
- This maintenance changes documentation only; generated `dist/`, local checks, browser captures, models and dependencies remain untracked. The site is committed and pushed from this independent Git root.

## Multilingual update — October 17, 2026

The site now matches the app's 11 interface locales. All 33 home/support/privacy pages are fully translated, with reciprocal hreflang, matching-page language navigation, localized titles, and Arabic RTL. English remains x-default. The locale checker can verify the native app catalog when its path is supplied.

### Canonical hostname redirect

The original absolute-host `_redirects` declaration did not redirect live Pages requests and was removed. An account-level Bulk Redirect was added to the existing enabled `pages_dev_2_luopeike_com` rule / `tacti_beat` list, preserving its 20 prior entries:

- Source: `offtranscribe.pages.dev/`; target: `https://offtranscribe.luopeike.com/`; status: 301.
- Preserve query string, subpath matching, preserve path suffix: enabled.
- Include subdomains: disabled, so preview deployment hosts are outside this requested scope.
- Live HTTPS `/fr/support/?source=redirect-check` returned 301 to exactly the matching custom-domain URL on October 17.

This setting is managed in Cloudflare, not by the generated site files.

The following sections retain the initial two-language publication evidence. Updated checks and deployment evidence are recorded below after release.

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

## Multilingual production verification

- Commits `d508a0b` (11-language implementation) and `7105026` (canonical-host configuration record) pushed separately to `main`. Production now serves the 33-URL sitemap.
- Build/content/link/schema checks and native catalog parity check passed for all 11 languages.
- Chrome at 320×740: all 33 pages checked with no horizontal overflow after fixing the waveform grid minimum width. At 390×844, Arabic RTL was visually inspected. Same-page Arabic-to-French privacy navigation and keyboard language navigation passed. Production Japanese page and canonical-host redirect verified in Chrome; no injected analytics scripts found.
- Google Search Console sitemap re-submitted successfully on October 17; report now shows **33 discovered pages**. This remains discovery evidence, not indexing confirmation.
- Python urllib HTTP probes were rejected with 403 responses or timed out; these failed probes were retained. A separate curl request for French support returned 200 with security headers. No site security rules were weakened for automated probes.
- Raw checks/screenshots remain outside this independent repo in the parent ignored `.cache/website-release/`.
