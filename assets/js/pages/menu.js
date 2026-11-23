
/**
 * TEA HOUSE & SPECIALTY CHAI — MENU PAGE INTERACTIONS (menu.js)
 * Clean, modular, zero-dependency Vanilla JavaScript (ES6+).
 * Manages category navigation scroll-spy, smooth scrolling,
 * interactive order buttons, and scroll reveals.
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. SCROLL REVEALS
     -------------------------------------------------------------------------- */
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
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* --------------------------------------------------------------------------
     2. CATEGORY NAVIGATION SCROLL SPY & SMOOTH SCROLL
     -------------------------------------------------------------------------- */
  function initCategoryNav() {
    var navPills = document.querySelectorAll('.menu-cat-pill');
    var navWrapper = document.querySelector('.menu-cat-nav-wrapper');
    if (!navPills.length) return;

    var categorySections = [];
    navPills.forEach(function (pill) {
      var targetId = pill.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        var sec = document.querySelector(targetId);
        if (sec) {
          categorySections.push({ pill: pill, section: sec, id: targetId.substring(1) });
        }
      }
    });

    // Smooth scroll with offset for sticky navbar + cat bar
    navPills.forEach(function (pill) {
      pill.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          var targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            var navHeight = navWrapper ? navWrapper.offsetHeight : 60;
            var headerOffset = 80 + navHeight; // navbar ~70px + navWrapper
            var elementPosition = targetEl.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Update active pill immediately
            setActivePill(pill);
          }
        }
      });
    });

    function setActivePill(activePill) {
      navPills.forEach(function (p) {
        p.classList.remove('is-active');
        p.setAttribute('aria-selected', 'false');
      });
      activePill.classList.add('is-active');
      activePill.setAttribute('aria-selected', 'true');

      // Scroll horizontal nav so active pill is visible
      var scrollContainer = document.querySelector('.menu-cat-nav-scroll');
      if (scrollContainer) {
        var pillLeft = activePill.offsetLeft;
        var pillWidth = activePill.offsetWidth;
        var containerWidth = scrollContainer.offsetWidth;
        scrollContainer.scrollTo({
          left: pillLeft - (containerWidth / 2) + (pillWidth / 2),
          behavior: 'smooth'
        });
      }
    }

    // Scroll spy on scroll
    if ('IntersectionObserver' in window) {
      var spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var activeId = entry.target.id;
            categorySections.forEach(function (item) {
              if (item.id === activeId) {
                setActivePill(item.pill);
              }
            });
          }
        });
      }, {
        threshold: 0.25,
        rootMargin: '-100px 0px -50% 0px'
      });

      categorySections.forEach(function (item) {
        spyObserver.observe(item.section);
      });
    }
  }

  /* --------------------------------------------------------------------------
     3. INTERACTIVE ORDER / TASTING LIST BUTTONS
     -------------------------------------------------------------------------- */
  function initOrderButtons() {
    var orderButtons = document.querySelectorAll('.menu-order-btn');
    if (!orderButtons.length) return;

    orderButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var name = this.getAttribute('data-name') || 'Item';
        var price = this.getAttribute('data-price') || '';

        // Animate button temporarily
        var icon = this.querySelector('i');
        if (icon) {
          icon.className = 'bi bi-check-lg';
          this.style.backgroundColor = 'var(--color-accent-terracotta)';
          this.style.borderColor = 'var(--color-accent-terracotta)';
          this.style.color = '#FFFFFF';
        }

        var self = this;
        setTimeout(function () {
          if (icon) {
            icon.className = 'bi bi-plus-lg';
            self.style.backgroundColor = '';
            self.style.borderColor = '';
            self.style.color = '';
          }
        }, 1200);

        // Show toast notification
        showToast(name + ' (' + price + ') added to your tasting list!');
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. TOAST NOTIFICATION
     -------------------------------------------------------------------------- */
  function showToast(message) {
    var container = document.getElementById('toastNotificationContainer');
    if (!container) return;

    var toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white bg-dark border-0 show';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.style.backgroundColor = '#123D2E !important';
    toastEl.style.borderRadius = '12px';
    toastEl.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    toastEl.style.marginBottom = '0.5rem';

    toastEl.innerHTML = [
      '<div class="d-flex align-items-center" style="background:#123D2E; border-radius:12px; padding:0.75rem 1.25rem;">',
      '  <i class="bi bi-cup-hot-fill me-2" style="color:#C87538; font-size:1.1rem;"></i>',
      '  <div class="toast-body p-0 flex-grow-1" style="font-family:var(--font-sans); font-size:0.9rem; color:#F7F4EA;">',
      message,
      '  </div>',
      '  <button type="button" class="btn-close btn-close-white ms-3" data-bs-dismiss="toast" aria-label="Close" style="font-size:0.75rem;"></button>',
      '</div>'
    ].join('\n');

    container.appendChild(toastEl);

    var closeBtn = toastEl.querySelector('.btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        toastEl.remove();
      });
    }

    setTimeout(function () {
      toastEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toastEl.style.opacity = '0';
      toastEl.style.transform = 'translateY(10px)';
      setTimeout(function () {
        toastEl.remove();
      }, 400);
    }, 3000);
  }

  /* --------------------------------------------------------------------------
     DOM READY
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveals();
    initCategoryNav();
    initOrderButtons();
  });

})();
