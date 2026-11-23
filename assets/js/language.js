/**
 * TEA HOUSE & SPECIALTY CHAI - LANGUAGE & DIRECTION HANDLER (language.js)
 * Manages RTL / LTR layout direction switching with persistence via localStorage.
 * Frontend-only vanilla JavaScript (Zero dependencies).
 */

(function () {
  'use strict';

  const DIR_KEY = 'teahouse_direction';

  // Apply saved direction immediately to prevent layout shift
  const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

  window.initLanguageToggle = function () {
    const rtlBtn = document.getElementById('rtlToggleBtn');
    const rtlText = document.getElementById('rtlToggleText');

    function applyDirection(direction) {
      document.documentElement.setAttribute('dir', direction);
      localStorage.setItem(DIR_KEY, direction);
      if (rtlText) {
        rtlText.textContent = direction === 'rtl' ? 'LTR' : 'RTL';
      }
      if (rtlBtn) {
        rtlBtn.setAttribute('title', `Switch to ${direction === 'rtl' ? 'LTR' : 'RTL'} layout`);
        rtlBtn.setAttribute('aria-label', `Switch to ${direction === 'rtl' ? 'LTR' : 'RTL'} layout`);
      }
    }

    // Sync UI with current direction attribute
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    applyDirection(currentDir);

    if (rtlBtn && !rtlBtn.hasAttribute('data-dir-bound')) {
      rtlBtn.setAttribute('data-dir-bound', 'true');
      rtlBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const activeDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(activeDir);
      });
    }
  };

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initLanguageToggle);
  } else {
    window.initLanguageToggle();
  }
})();
