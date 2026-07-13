# HANDOFF — lucas-couto.com

## Current state (2026-07-13)

Personal landing page rebuilt from scratch. Static site, no build step:
`index.html` + `css/styles.css` + `js/main.js` + `js/i18n.js` + `assets/`.

- Visual concept: computer-vision annotation tool (dark `#0a0e14`, green accent `#22c55e`, bounding boxes with class/score labels over the hero photo).
- Bilingual EN/PT: EN lives in the HTML (`data-i18n` keys), PT lives in `js/i18n.js`. Choice persisted in `localStorage`.
- Fonts: Space Grotesk (display), JetBrains Mono (labels/metrics), Inter (body), via Google Fonts.
- Deploy: GitHub Pages with custom domain (`CNAME` → lucas-couto.com).

## Verified

- Tag balance, single `h1`, all images have `alt`.
- Breakpoints 375 / 768 / 1440 checked in Chrome; no horizontal overflow.
- PT toggle works and persists across reloads; zero console errors.
- `prefers-reduced-motion` renders everything static.

## Deliberate decisions

- Specific tool/vendor names (segmentation frameworks, message brokers, cloud providers, web frameworks) were intentionally replaced with macro areas ("detection algorithms", "message queues", "cloud") to avoid exposing employer stack details. Do not reintroduce them.

## Pending

- `logo.jpg` and `workspace.jpg` at the root are leftovers from the old site (photo now lives in `assets/lucas-couto.jpg`, 79 KB). Safe to delete.
- Run a real Lighthouse pass after deploy (target ≥ 90 in all four categories).
- Commit and push to publish.
