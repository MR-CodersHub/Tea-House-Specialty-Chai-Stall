/**
 * TEA HOUSE & SPECIALTY CHAI - THEME HANDLER (theme.js)
 * Manages Light / Dark mode switching with persistence via localStorage.
 * Frontend-only vanilla JavaScript (Zero dependencies).
 */

(function () {
  'use strict';

  const THEME_KEY = 'teahouse_theme';

  // Apply saved theme immediately to prevent flashing on page load
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  window.initThemeToggle = function () {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeText = document.getElementById('themeToggleText');

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_KEY, theme);
      if (themeText) {
        themeText.textContent = theme === 'dark' ? 'Light' : 'Dark';
      }
      if (themeBtn) {
        themeBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
        themeBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`);
      }
    }

    // Sync UI with current theme attribute
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(currentTheme);

    if (themeBtn && !themeBtn.hasAttribute('data-theme-bound')) {
      themeBtn.setAttribute('data-theme-bound', 'true');
      themeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(activeTheme);
      });
    }
  };

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initThemeToggle);
  } else {
    window.initThemeToggle();
  }
})();
