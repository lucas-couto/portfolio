/**
 * analytics — provider-agnostic event layer over Umami.
 *
 * Attribution: UTM params (or referrer/direct) are captured once per
 * session and attached to every event, so any event can be segmented
 * by traffic source. Elements opt in to click tracking declaratively
 * via data-track / data-track-* attributes; nothing binds listeners
 * to individual buttons.
 *
 * Delivery on page exit: all tracked exits are target="_blank",
 * mailto: or download links, so the page never unloads mid-request;
 * Umami itself sends with fetch keepalive as a safety net.
 */

const ATTRIBUTION_KEY = 'attribution';
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];

function readStorage(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (err) {
    return null; /* private mode */
  }
}

function writeStorage(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch (err) {
    /* private mode */
  }
}

function computeAttribution() {
  const query = new URLSearchParams(window.location.search);
  const utm = {};
  UTM_PARAMS.forEach((param) => {
    const value = query.get(param);
    if (value) utm[param.replace('utm_', '')] = value;
  });
  if (Object.keys(utm).length > 0) return utm;

  if (document.referrer) {
    try {
      const host = new URL(document.referrer).hostname;
      if (host && host !== window.location.hostname) return { source: host };
    } catch (err) {
      /* malformed referrer */
    }
  }
  return { source: 'direct' };
}

function getAttribution() {
  const stored = readStorage(ATTRIBUTION_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      /* corrupted entry — recompute below */
    }
  }
  const attribution = computeAttribution();
  writeStorage(ATTRIBUTION_KEY, JSON.stringify(attribution));
  return attribution;
}

export function track(event, props = {}) {
  const payload = { ...getAttribution(), ...props };
  if (window.umami) window.umami.track(event, payload);
}

/* ---------- Declarative click tracking ---------- */
document.addEventListener(
  'click',
  (clickEvent) => {
    const el = clickEvent.target.closest('[data-track]');
    if (!el) return;
    const props = {};
    for (const { name, value } of el.attributes) {
      if (name.startsWith('data-track-')) {
        props[name.slice('data-track-'.length)] = value;
      }
    }
    track(el.getAttribute('data-track'), props);
  },
  true,
);

/* ---------- section_view: >=50% visible, once per session ---------- */
// Sections taller than the viewport can never reach a 0.5 ratio, so a
// section also counts as viewed once it covers half of the viewport.
const sections = document.querySelectorAll('main section[id]');
if ('IntersectionObserver' in window && sections.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const coversHalfViewport =
          entry.intersectionRect.height >= window.innerHeight * 0.5;
        if (entry.intersectionRatio < 0.5 && !coversHalfViewport) return;
        const section = entry.target.id;
        sectionObserver.unobserve(entry.target);
        if (readStorage(`seen_section_${section}`)) return;
        writeStorage(`seen_section_${section}`, '1');
        track('section_view', { section });
      });
    },
    { threshold: [0.1, 0.2, 0.3, 0.4, 0.5] },
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

/* ---------- scroll_depth: 25 / 50 / 75 / 100 percent ---------- */
if ('IntersectionObserver' in window) {
  // Zero-width absolute rail spanning the full document height, with one
  // sentinel per milestone — IntersectionObserver instead of scroll math.
  document.body.style.position = 'relative';
  const rail = document.createElement('div');
  rail.setAttribute('aria-hidden', 'true');
  rail.style.cssText =
    'position:absolute;top:0;left:0;width:0;height:100%;pointer-events:none;';
  const sentinels = new Map();
  [25, 50, 75, 100].forEach((percent) => {
    const sentinel = document.createElement('div');
    sentinel.style.cssText = `position:absolute;left:0;width:1px;height:1px;top:calc(${percent}% - 1px);`;
    sentinels.set(sentinel, percent);
    rail.appendChild(sentinel);
  });
  document.body.appendChild(rail);

  const depthObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      depthObserver.unobserve(entry.target);
      track('scroll_depth', { percent: sentinels.get(entry.target) });
    });
  });
  sentinels.forEach((percent, sentinel) => depthObserver.observe(sentinel));
}

// Exposed for non-module scripts (i18n.js, main.js) and console debugging.
window.track = track;
