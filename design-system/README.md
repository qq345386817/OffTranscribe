# OffTranscribe

Quiet, readable tools for turning a conversation into something useful. This website system aligns with the native app's green accent while preserving its actual icon and international, local-first positioning. It is a new website direction, not a full export of the native UI or a third-party component library.

## Content fundamentals

Lead with recording → transcription → listening, editing and exporting. Use concrete verbs. Keep Apple system recognition as the default and Whisper as an explicit optional download. Call Turbo experimental. Never invent accuracy, speed, user counts, store availability or zero-network promises. The illustrative transcript is labelled as an illustration and must never look like a real user's recording or a measured result. Unreleased local AI features are not advertised as shipped.

## Visual foundations

Use `canvas` around `paper` reading surfaces, `ink` for primary copy and `muted` for secondary copy. The `brand` value is the native light accent. Use `mint` to frame the illustrative transcript, and `deep` only for the privacy section, paired with `paper` headings and `on-deep` body copy. `line` is decorative, not a readable text or control color. Status uses `signal` plus written copy. No gradients, stock photos, invented testimonials, emoji icons or grids of repetitive floating cards.

Use the native sans stack, with `display` for short headlines, `section` for section headings, `lead` for introductions and `body` for documents. Keep prose around 65 characters wide. Arabic and Indic text use natural tracking and appropriate line height. Use `metadata` for step numbers and isolated LTR time / format labels. All navigation and disclosures have at least 44px touch targets and a visible `brand` focus ring. Preserve browser zoom, reduced motion, keyboard navigation and native details / summary behavior.

Spacing follows the 4px grid: `space-4` for compact insets, `space-6` and `space-8` for panel padding, `space-12` and `space-20` for section separation. Controls use `radius-control`; paper uses `radius-sheet`; only the large preview surround uses `radius-stage`. Limit `shadow-sheet` to the specimen and overlay menu.

## Iconography and real assets

Reuse the website's original app PNG files unchanged in production. New diagrams use inline, decorative, 1.6px stroke SVG microphone, document, waveform, shield and arrow symbols. Arrows mirror with reading direction; time codes and format abbreviations remain LTR. Do not imitate Apple's badges or imply endorsement.

The skill's asset importer is unavailable in this environment, so the icon is not copied into this design system's asset library. The editable design boards use the plain OffTranscribe wordmark rather than a replacement logo. No font files are required: this system uses operating-system fonts and makes no external font requests.

## Inventory and consumption

`tokens.json` is the single source for 10 colors, 7 text styles, 8 spacing tokens, 3 radii and one shadow. The website build reads this file and generates its deployable CSS variables. The editable design board installs a token snapshot under its own `ds/offtranscribe/` directory. No JavaScript component bundle is supplied; use semantic native HTML, with static structure styled by these foundations. There is no library global to mount.

Scope not synced: legacy purple colors and old ad-hoc spacing are intentionally replaced, and native app components are not extracted or simulated as a component library. Original image files remain in website source. The skill-specific `design_system_check` and asset import tools are unavailable; local schema, token parity, contrast and website-browser checks are recorded separately and must not be described as official editor validation.
