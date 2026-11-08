# Saidfolio website

## Product and search content — November 7, 2026

The site describes Saidfolio as voice-first records: original audio, transcripts, photos and later additions belong together. The 11-language home/support/privacy content now covers manual organization on all devices, optional on-device generation on eligible devices, PDF record reports, and opt-in iCloud copies. Recording can continue under the iPhone/iPad lock screen, with interruption limitations; transcription still requires the app open. The App Store release remains pending; internal TestFlight availability is not advertised as a public download.

`src/app-metadata.json` snapshots the locally optimized iOS/macOS Fastlane name, subtitle, promotional text and description in all 11 languages. Functional paragraphs used by the site come from that snapshot; website-specific headlines and policy details live in `src/locales/`. It records local draft copy, not an ASC upload. The standalone Pages build does not access the native repository, credentials or private app data.

Run these explicit, read-only-to-the-app operations from the website checkout when app metadata changes:

```sh
node scripts/sync-app-metadata.mjs ..
node scripts/sync-app-metadata.mjs .. --check
npm run build
node scripts/check.mjs ../ios/OfflineTranscribeValidation/Resources/Localizable.xcstrings
```

Keep the 33 canonical URLs and Google/Bing verification tags. The sitemap content date is November 7, 2026. Homepage structured data describes the same visible app features and pre-release state, without invented ratings, reviews or download offers. Native FAQs provide direct answers; no AI ranking or rich-result eligibility is claimed. Google states that its AI search features use the same SEO foundations and require no special AI text files or schema: [official guidance](https://developers.google.com/search/docs/appearance/ai-features).

`deployment.json` exposes the deployed website commit and metadata fingerprint for independent readback. Build output, browser profiles, raw diagnostics and screenshots stay outside Git. Existing design tokens and icon files are preserved. Publication is recorded in DEPLOYMENT.md.

## Website design — October 24, 2026

The site now uses green/mint foundations aligned with the native app, a clearer transcript illustration and three-step workflow, a deep-green privacy section, a support contact panel with native FAQs, and a linked privacy-policy index. Existing product translations, policy text, canonical URLs, verification tag and original icon files are retained. There are still 11 languages and 33 canonical pages; no public download badge or unreleased local-AI promotion was added.

`design-system/` is maintained source: 10 colors, 7 type styles, 8 spacing steps, 3 radii, a shadow, brand guidance and a cover. The build generates CSS variables from its tokens, so production and the design foundations share values. Local editable homepage/support drafts use the `design` skill's `canvas.json` / `.dc.html` format in ignored `website-design/`, with an installed token snapshot. The environment did not expose `design_check`, `design_system_check` or their asset importers: official editor-card validation is **not** claimed. `scripts/check-design.mjs` performs local format, token parity and contrast checks instead.

The production build runs content/link/SEO checks and foundation/contrast checks, with no external packages, application JavaScript or external fonts. Cloudflare may add its existing email-obfuscation helper on contact pages; it is not an application framework or analytics beacon. CSS URLs include content fingerprints to prevent old cached styles from mixing with new HTML. Preview with `npm run preview` or `PORT=4186 npm run preview` if the default port is occupied. Keep screenshots, diagnostics and local design drafts out of Git and deployment. Actual publication status is recorded in DEPLOYMENT.md.

Independent website repository for **Saidfolio: Voice Notes**. The native app source lives in the parent OfflineTranscribe repository and is not deployed here.

Production domain: **https://offtranscribe.luopeike.com** (DNS is case insensitive).

The website matches all 11 app interface languages: English, Simplified Chinese, Traditional Chinese, Japanese, Korean, French, German, Spanish, Portuguese, Hindi, and Arabic. Each has home, support, and privacy policy pages; Arabic uses RTL. Contact: **cameoshell09@gmail.com**. Version 1 is free; the app is not publicly released yet. Do not add a download badge until public availability is verified.

## Build and preview

Requires Node 20+, no third-party packages or install step.

```sh
npm run build
npm run check
# Optional when checked out beside the native app:
node scripts/check.mjs ../ios/OfflineTranscribeValidation/Resources/Localizable.xcstrings
node scripts/serve.mjs
```

Content: `src/content.mjs` and `src/locales/`; locale registry: `src/languages.mjs`; renderer: `scripts/build.mjs`; styles and original app icon: `public/assets/`. Output `dist/` is ignored. No models, dependencies, audio, credentials, or generated mockups are committed.

## Cloudflare Pages

- Git repository: `qq345386817/OffTranscribe`, production branch `main`.
- Framework: None; build command `npm run build`; output directory `dist`; repository root unchanged.
- Custom domain: `offtranscribe.luopeike.com`.
- No Pages Functions, analytics beacon, forms, cookies, external fonts, or browser storage.
- `_headers` supplies security headers. An account-level Cloudflare Bulk Redirect canonicalizes `offtranscribe.pages.dev` to the custom domain, preserving paths and queries; see `DEPLOYMENT.md`.
- `404.html` is a real not-found page. Sitemap contains 33 canonical pages with reciprocal language alternates in HTML.

For Google Search Console use the URL-prefix property `https://offtranscribe.luopeike.com/`, verify ownership, and submit `sitemap.xml`. Submission is not a promise of indexing. Store the public verification file/tag in `public/` when needed; never commit account credentials.

For Bing Webmaster Tools use the same canonical property and `https://offtranscribe.luopeike.com/sitemap.xml`. The renderer includes the public `msvalidate.01` ownership tag in the HTML head; retain it after verification. This does not require linking the Google account or granting access to other Search Console properties. Bing submission and indexing results are recorded separately in DEPLOYMENT.md.

## Publication checks

Run build/check before each push; inspect desktop and mobile in the browser. Verify live HTTPS pages, headers, 404 status, `robots.txt`, sitemap, and the deployed Git commit. Inspect changes in this Git root separately from the native app root.
