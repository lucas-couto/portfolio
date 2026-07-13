/**
 * main — scroll reveals, mobile menu and hero crosshair.
 * The hero bounding-box sequence is pure CSS; JS only orchestrates
 * progressive enhancements, so the page works fully without it.
 */
(function () {
  'use strict';

  // Enables the hidden state for .reveal only when JS is running,
  // so content stays visible for no-JS users.
  document.documentElement.classList.add('js');

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll reveals ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector('.nav-burger');
  var menu = document.getElementById('mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      });
    });
  }

  /* ---------- Hero crosshair (desktop only) ---------- */
  var hero = document.querySelector('.hero');
  var crosshair = document.querySelector('.hero-crosshair');
  var supportsHover = window.matchMedia('(hover: hover)').matches;
  if (hero && crosshair && supportsHover && !reducedMotion) {
    var lineX = crosshair.querySelector('.ch-x');
    var lineY = crosshair.querySelector('.ch-y');
    hero.addEventListener('mousemove', function (event) {
      var rect = hero.getBoundingClientRect();
      lineX.style.transform = 'translateY(' + (event.clientY - rect.top) + 'px)';
      lineY.style.transform = 'translateX(' + (event.clientX - rect.left) + 'px)';
    });
  }
})();
