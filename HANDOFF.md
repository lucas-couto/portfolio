# HANDOFF — lucas-couto.com

## Current state (2026-07-14)

Personal landing page. Static site, no build step:
`index.html` + `css/styles.css` + `js/{main,i18n,analytics}.js` + `assets/`.

- Visual concept: computer-vision annotation tool (dark `#0a0e14`, green accent `#22c55e`, bounding boxes with class/score labels over the hero photo).
- Bilingual EN/PT: EN lives in the HTML (`data-i18n` keys), PT lives in `js/i18n.js`. Choice persisted in `localStorage`.
- Fonts: now SELF-HOSTED variable woff2 (latin subset) in `assets/fonts/` — Space Grotesk, JetBrains Mono, Inter. Google Fonts removed; the only external resource is the Umami script.
- Analytics: Umami Cloud (cookieless, website id `2d0fa7cc-…55b7`) + `js/analytics.js` (ES module): UTM/referrer attribution in `sessionStorage`, attached to every event; declarative click tracking via `data-track`/`data-track-*` delegation; `section_view` (≥50% of section OR section covers ≥50% of viewport — tall sections can't hit ratio 0.5) and `scroll_depth` (25/50/75/100 via sentinel rail + IntersectionObserver). `i18n.js` keeps `data-track-lang` on CV links in sync.
- SEO: title/description tuned, OG/Twitter cards point to `assets/og-image.png` (1200×630, generated in the bounding-box style), JSON-LD `Person` + 2 `ScholarlyArticle`, google-site-verification placeholder comment in `<head>`, sitemap lastmod bumped.
- Deploy: GitHub Pages with custom domain (`CNAME` → lucas-couto.com).

## Verified (2026-07-14, local server + Chrome)

- Zero console errors; only external hosts hit: `cloud.umami.is`, `gateway.umami.is`.
- UTM attribution captured (`?utm_source=linkedin…` → every event carries `source/medium/campaign`); `direct` fallback path in place.
- `cv_download` reports `lang: en/pt` correctly after language toggle; `lang_toggle` fires with `to`.
- All 7 sections fire `section_view` once per session (incl. `research`, taller than viewport); `scroll_depth:100` fires at bottom.
- Self-hosted fonts load (verified via `document.fonts`).
- Note: IntersectionObserver/rAF are throttled in background tabs — events looked missing until the tab was rendered; not a code issue.

## Deliberate decisions

- Specific tool/vendor names replaced with macro areas ("detection algorithms", "message queues", "cloud") to avoid exposing employer stack details. Do not reintroduce them.
- Old `logo.jpg` / `workspace.jpg` deleted (leftovers from old site).

## Pending

- Commit and push to publish (working tree has all changes uncommitted).
- Run a real Lighthouse pass after deploy (target ≥ 95 Performance/SEO).
- Google Search Console: verify via DNS TXT; fall back to meta tag placeholder in `<head>` if needed.
- Confirm events arriving in the Umami Cloud dashboard after deploy (local test events were sent from `localhost` hostname).
