# OffTranscribe website

Independent website repository for **OffTranscribe: Speech to Text**. The native app source lives in the parent OfflineTranscribe repository and is not deployed here.

Production domain: **https://offtranscribe.luopeike.com** (DNS is case insensitive).

English and Simplified Chinese: home, support, and privacy policy. Contact: **cameoshell09@gmail.com**. Version 1 is free; the app is not publicly released yet. Do not add a download badge until public availability is verified.

## Build and preview

Requires Node 20+, no third-party packages or install step.

```sh
npm run build
npm run check
node scripts/serve.mjs
```

Content: `src/content.mjs`; renderer: `scripts/build.mjs`; styles and original app icon: `public/assets/`. Output `dist/` is ignored. No models, dependencies, audio, credentials, or generated mockups are committed.

## Cloudflare Pages

- Git repository: `qq345386817/OffTranscribe`, production branch `main`.
- Framework: None; build command `npm run build`; output directory `dist`; repository root unchanged.
- Custom domain: `offtranscribe.luopeike.com`.
- No Pages Functions, analytics beacon, forms, cookies, external fonts, or browser storage.
- `_headers` supplies security headers; `_redirects` canonicalizes the named Pages production hostname.
- `404.html` is a real not-found page. Sitemap contains six canonical pages with reciprocal language alternates in HTML.

For Google Search Console use the URL-prefix property `https://offtranscribe.luopeike.com/`, verify ownership, and submit `sitemap.xml`. Submission is not a promise of indexing. Store the public verification file/tag in `public/` when needed; never commit account credentials.

## Publication checks

Run build/check before each push; inspect desktop and mobile in the browser. Verify live HTTPS pages, headers, 404 status, `robots.txt`, sitemap, and the deployed Git commit. Inspect changes in this Git root separately from the native app root.
