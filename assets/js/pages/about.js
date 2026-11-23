/**
 * TEA HOUSE & SPECIALTY CHAI — ABOUT PAGE INTERACTIONS (about.js)
 * Manages: scroll reveals, team card injection, testimonial carousel.
 * Pure Vanilla JavaScript ES6+ · Zero external dependencies.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────────────────
     DATA: Team Members
     Update this array with real team information when available.
     ───────────────────────────────────────────────────────────────────────── */
  const TEAM_DATA = [
    {
      name: 'Team Member 01',
      role: 'Founder & Tea Experience Lead',
      bio: 'Passionate about creating welcoming chai experiences. Believes every cup tells a story worth sharing.',
      img: 'assets/images/team/team-member-01.jpg',
      imgAlt: 'Team Member 01 — Tea House',
      initial: 'T'
    },
    {
      name: 'Team Member 02',
      role: 'Head Chai Artisan',
      bio: 'Dedicated to crafting authentic blends using time-honoured techniques and carefully sourced ingredients.',
      img: 'assets/images/team/team-member-02.jpg',
      imgAlt: 'Team Member 02 — Tea House',
      initial: 'C'
    },
    {
      name: 'Team Member 03',
      role: 'Guest Experience Manager',
      bio: 'Ensures every visit feels personal, warm, and memorable — from the first greeting to the final sip.',
      img: 'assets/images/team/team-member-03.jpg',
      imgAlt: 'Team Member 03 — Tea House',
      initial: 'G'
    },
    {
      name: 'Team Member 04',
      role: 'Blend Development Specialist',
      bio: 'Explores traditional and contemporary chai profiles to bring new, exciting flavours to every season.',
      img: 'assets/images/team/team-member-04.jpg',
      imgAlt: 'Team Member 04 — Tea House',
      initial: 'B'
    }
  ];

  /* ─────────────────────────────────────────────────────────────────────────
     DATA: Testimonials
     Replace placeholder names and text with real customer feedback.
     ───────────────────────────────────────────────────────────────────────── */
  const TESTIMONIAL_DATA = [
    {
      text: 'A lovely place to slow down and enjoy a comforting cup of chai. The atmosphere makes every visit feel special and unhurried.',
      name: 'Guest Name 01',
      label: 'Regular Guest',
      initial: 'G'
    },
    {
      text: 'The flavours, presentation, and welcoming experience make this more than just an ordinary tea break — it feels like a real moment of calm.',
      name: 'Guest Name 02',
      label: 'Tea Enthusiast',
      initial: 'G'
    },
    {
      text: 'A beautiful spot to catch up with friends and enjoy a peaceful moment over a good cup of chai. We always leave feeling refreshed.',
      name: 'Guest Name 03',
      label: 'Loyal Guest',
      initial: 'G'
    },
    {
      text: 'Every cup feels handcrafted with real care. The warmth of the place and the quality of the chai make it a truly special experience.',
      name: 'Guest Name 04',
      label: 'First-time Visitor',
      initial: 'G'
    },
    {
      text: 'The kind of place you discover and immediately want to return to. Warm, honest, and genuinely comforting from start to finish.',
      name: 'Guest Name 05',
      label: 'Tea Lover',
      initial: 'G'
    }
  ];

  /* ─────────────────────────────────────────────────────────────────────────
     SCROLL REVEAL (IntersectionObserver)
     ───────────────────────────────────────────────────────────────────────── */
  function initScrollReveals() {
    var elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ─────────────────────────────────────────────────────────────────────────
     TEAM CARDS
     ───────────────────────────────────────────────────────────────────────── */
  function renderTeam() {
    var grid = document.getElementById('teamGrid');
    if (!grid) return;

    var html = TEAM_DATA.map(function (member, idx) {
      return [
        '<div class="ab-team-card reveal-on-scroll" data-delay="' + (idx * 80) + '">',
        '  <div class="ab-team-img-wrap">',
        '    <img src="' + member.img + '" alt="' + member.imgAlt + '" class="ab-team-img" loading="lazy">',
        '    <div class="ab-team-img-overlay" aria-hidden="true"></div>',
        '  </div>',
        '  <div class="ab-team-info">',
        '    <span class="ab-team-role">' + member.role + '</span>',
        '    <h3 class="ab-team-name">' + member.name + '</h3>',
        '    <p class="ab-team-bio">' + member.bio + '</p>',
        '  </div>',
        '</div>'
      ].join('\n');
    }).join('\n');

    grid.innerHTML = html;
  }

  /* ─────────────────────────────────────────────────────────────────────────
     TESTIMONIAL CAROUSEL
     ───────────────────────────────────────────────────────────────────────── */
  function initTestimonials() {
    var track  = document.getElementById('testimonialTrack');
    var dotsEl = document.getElementById('testimonialDots');
    var prevBtn = document.getElementById('testimonialPrev');
    var nextBtn = document.getElementById('testimonialNext');

    if (!track || !dotsEl || !prevBtn || !nextBtn) return;

    var currentIndex = 0;
    var visibleCount = getVisibleCount();

    // Build cards
    var cardsHtml = TESTIMONIAL_DATA.map(function (t) {
      return [
        '<div class="ab-testimonial-card" role="tabpanel">',
        '  <span class="ab-testimonial-quote-mark" aria-hidden="true">\u201C</span>',
        '  <p class="ab-testimonial-text">' + t.text + '</p>',
        '  <div class="ab-testimonial-author">',
        '    <div class="ab-author-avatar" aria-hidden="true">' + t.initial + '</div>',
        '    <div>',
        '      <span class="ab-author-name">' + t.name + '</span>',
        '      <span class="ab-author-label">' + t.label + '</span>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('\n');
    }).join('\n');
    track.innerHTML = cardsHtml;

    // Build dots
    var totalSlides = Math.ceil(TESTIMONIAL_DATA.length / visibleCount);
    function buildDots() {
      visibleCount  = getVisibleCount();
      totalSlides   = Math.ceil(TESTIMONIAL_DATA.length / visibleCount);
      currentIndex  = Math.min(currentIndex, totalSlides - 1);
      dotsEl.innerHTML = '';
      for (var i = 0; i < totalSlides; i++) {
        var btn = document.createElement('button');
        btn.className = 'ab-dot' + (i === currentIndex ? ' is-active' : '');
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        btn.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
        btn.setAttribute('data-index', i);
        btn.addEventListener('click', function () {
          goTo(parseInt(this.getAttribute('data-index'), 10));
        });
        dotsEl.appendChild(btn);
      }
    }

    function getVisibleCount() {
      if (window.innerWidth >= 992) return 3;
      if (window.innerWidth >= 576) return 2;
      return 1;
    }

    function getCardWidth() {
      var cards = track.querySelectorAll('.ab-testimonial-card');
      if (!cards.length) return 0;
      var style = getComputedStyle(track);
      var gap = parseFloat(style.gap) || 24;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function goTo(index) {
      currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
      var offset = currentIndex * visibleCount * getCardWidth();
      track.style.transform = 'translateX(-' + offset + 'px)';
      updateNav();
    }

    function updateNav() {
      var dots = dotsEl.querySelectorAll('.ab-dot');
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === currentIndex);
        d.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
      });
      prevBtn.disabled = currentIndex <= 0;
      nextBtn.disabled = currentIndex >= totalSlides - 1;
    }

    prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); });
    nextBtn.addEventListener('click', function () { goTo(currentIndex + 1); });

    // Touch / swipe
    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { goTo(currentIndex + (diff > 0 ? 1 : -1)); }
    }, { passive: true });

    // Responsive rebuild
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        buildDots();
        goTo(currentIndex);
      }, 200);
    });

    buildDots();
    goTo(0);
  }

  /* ─────────────────────────────────────────────────────────────────────────
     INIT
     ───────────────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    renderTeam();
    initTestimonials();
    // Scroll reveals run after team + testimonial cards are injected
    requestAnimationFrame(function () {
      initScrollReveals();
    });
  });

})();
