# Publication record — 2026-10-17

## Saidfolio product and search update — November 7, 2026

This revision aligns all 11 languages / 33 canonical pages with the locally optimized app metadata and current implementation. It publishes the Saidfolio identity, voice-first records, photos and additions, manual notes with eligible-device generation, PDF reports, and optional iCloud copies. The policy distinguishes on-device processing from opt-in storage transfer, retained cloud versions and device-only audio cleanup. The old foreground-only recording statement is corrected with interruption limits.

The app remains pre-release: a fresh ASC readback found only the rejected 1.0 store drafts and internal TestFlight 1.0.0 (18). No public download button, review/rating claim, unconditional AI availability or sync timing guarantee is introduced. The website metadata snapshot is local draft copy; this workflow does not upload it to ASC or change the app.

Before publication, npm build, native-app locale parity and metadata snapshot checks pass. Isolated Chrome tests pass 99 page/viewport cases (1440/390/320), image loading, console health, FAQ expansion, language navigation, Arabic RTL and privacy anchors. The Browser plugin is absent and the CUA Chrome host is unavailable; existing Chrome with a temporary headless profile is used without installing dependencies or accessing the user's browser profile. Raw diagnostics stay out of Git.

Canonical paths, Google verification, the existing Cloudflare Pages project, domain redirect and security settings are retained. The sitemap lastmod changes to November 7 for the changed content. Existing GSC property and sitemap URLs remain valid; no new submission or indexing result is claimed. Google guidance does not require special AI text files or AI-only schema. Software structured data reflects visible text and pre-release status, without fabricated offers, ratings or reviews.

Pages publishes main through the existing Git integration. Independently compare the production `deployment.json` commit and metadataSHA256 with this checkout to establish the live revision; local build or Git push alone is not deployment proof. The parent app's `validation/runs/2026-11-07/website-seo/` records the actual deployment readback and any network failures for this publication.

## Repository publication checks — November 2, 2026

User authorized separate categorized commits/pushes for the native and website repositories. This website's only pending change was the October 29 GSC diagnosis above; publication checks are recorded separately. npm run build passes all 11 languages / 33 canonical pages, content/link/SEO and local design/contrast checks. No website source, sitemap, routing or security settings changed. dist, dependencies and raw browser/network evidence stay ignored; documentation files pass size/credential/gitlink and whitespace checks. Use an ordinary fast-forward push to this repository's origin/main and verify remote HEAD independently of the parent repository. Git publication does not establish a new Cloudflare production deployment or new indexing status.

## GSC indexing alert — October 29, 2026

The October 26 Search Console notification reports Not Found (404); its sole example is Cloudflare's `/cdn-cgi/l/email-protection` helper, absent from our sitemap. It is not a content page and does not need indexing or a fabricated replacement. Existing email protection remains enabled.

The October 23 aggregate report shows 29 indexed and five excluded URLs. Today's URL Inspection already shows the Simplified Chinese and Korean homepages indexed. German and Simplified Chinese privacy pages remain unindexed, but both passed Google's live indexability test; individual indexing requests were accepted into the priority crawl queue. Requests do not prove indexing. Sitemap status is Success, last read October 26, with 33 discovered pages; fetched sitemap bytes match the current build. No duplicate submission or sitemap edits.

Bounded HTTP probes obtained 200, matching canonical and no HTML noindex for 32 of 33 canonical pages across initial and retry observations; Arabic privacy remained a local TLS timeout, not a pass or established origin failure. Pages.dev returned the expected 301 preserving path/query. No source/configuration change, deployment, commit or push; sanitized findings are in the parent project's `validation/runs/2026-10-29/gsc-indexing/RESULTS.md`, with raw evidence in its ignored cache.

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

## Website redesign published — October 24, 2026

The `design` and `design-system` workflows produced native-app green/mint foundations, homepage/support drafts, and redesigned home, support and privacy templates in all 11 languages. Production consumes `design-system/tokens.json`; local editable `website-design/` drafts and raw screenshots are ignored. No dependencies, model files, account secrets, or app code were added. Product translations and policy claims remain within the existing release scope.

The website-only commits `5b12374`, `583fbc9`, `1c1ecfb` and `d49dc4e` were pushed to `main`. Cloudflare Pages reported **success** for implementation commit `d49dc4e7b00c4f241eb6203a27d9cecd3dd29bf0`, deployment `2f691fb2-0b97-43c9-a5d2-fd31d606d4fd`. The final documentation-only follow-up does not alter generated HTML or styles.

Verification completed:

- Build/content/link/fragment/schema checks, native-app locale parity, local design-format/token-copy parity and 13 readable color-pair contrast checks passed (minimum 5.33:1). Dedicated `design_check` / `design_system_check` tools were unavailable; official editor-card validation is not claimed.
- Chrome checked all 33 canonical routes at 320×740 without horizontal overflow, plus desktop pages and Arabic RTL. FAQ expansion, privacy index links, same-page language switching and homepage workflow navigation passed. Narrow-screen language-menu overflow was found and fixed before publication.
- Initial live visual inspection exposed cached purple CSS mixed with new green HTML. Content-fingerprinted stylesheet URLs fixed this; a normal reload in the **same affected Chrome session** showed the green design and both new stylesheet URLs. Current files are `tokens.8a00dc29c1fd.css` and `style.62a8e2f41417.css`.
- All 33 live canonical routes returned 200 with correct canonical URLs, expected stylesheet fingerprints and security headers. Two requests timed out initially and passed targeted retries; failed attempts remain in local evidence. The two hashed CSS files, robots.txt and sitemap match local bytes; an unknown path returns 404.
- Contact pages contain the existing Cloudflare `email-decode.min.js` helper alongside JSON-LD; homepage HTML matches the build exactly, while email-transformed support/privacy HTML is not claimed byte-identical. No analytics script was observed. Chrome confirmed the live support link resolves to `mailto:cameoshell09@gmail.com`. This matches [Cloudflare's documented email-obfuscation behavior](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/); no security settings were changed.
- `https://offtranscribe.pages.dev/fr/support/?source=redesign-check` returns **301** to exactly `https://offtranscribe.luopeike.com/fr/support/?source=redesign-check`. Earlier probes using the default Python user agent received 403; explicit-user-agent checks passed. These are separate observations, not a confirmed diagnosis of the earlier responses.
- Sitemap retains the same 33 canonical URLs with the redesign date as lastmod. The existing property and sitemap URL are unchanged; no duplicate GSC property/submission was created and no new indexing claim is made. Public availability of the app was not confirmed, so the site retains pre-release wording without an App Store download badge.

Raw browser/HTTP evidence, retained failed attempts, and before/after cache screenshots are in the parent ignored `.cache/website-redesign-2026-10-24/`. `production-desktop.jpg` shows the corrected live design; `production-mixed-cache-before-fix.jpg` preserves the initial cache defect. Website publication does not upload, submit, withdraw or release the native app.

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
