/**
 * TEA HOUSE & SPECIALTY CHAI - REUSABLE NAVBAR COMPONENT (navbar.js)
 * Injects the responsive two-level navigation bar into #navbar-placeholder.
 * Handles sticky scroll, mobile drawer, active page highlighting, profile dropdown,
 * and integrates with theme/direction toggles.
 */

(function () {
  'use strict';

  const navbarTemplate = `
<header class="site-header" id="siteHeader">
  <!-- 1. Top Information Bar -->
  <div class="top-info-bar">
    <div class="container">
      <ul class="top-info-left">
        <li class="top-info-item">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span class="top-address">42 Heritage Lane, Fort, Mumbai</span>
        </li>
        <li class="top-info-item top-hours">
          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          <span>Mon – Sun: 7:00 AM – 10:00 PM</span>
        </li>
      </ul>

      <div class="top-info-item d-none d-lg-block">
        <span class="tagline-quote">"A Perfect Cup, A Better Moment."</span>
      </div>

      <ul class="top-info-right">
        <li class="top-info-item">
          <div class="social-links-top">
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- 2. Main Navigation Bar -->
  <nav class="main-navbar" aria-label="Main navigation">
    <div class="container navbar-inner">
      <!-- Brand Logo -->
      <a href="index.html" class="navbar-brand-custom">
        <img class="brand-logo-image" src="assets/images/logo/logo.png" alt="">
        <div class="brand-text-block">
          <span class="brand-name">Tea House</span>
          <span class="brand-sub">SPECIALTY CHAI</span>
        </div>
      </a>

      <!-- 7 Navigation Links (Exact order required) -->
      <ul class="navbar-nav-links" id="mainNavLinks">
        <li><a href="index.html" class="nav-link-custom" data-page="index">Home 1</a></li>
        <li><a href="home2.html" class="nav-link-custom" data-page="home2">Home 2</a></li>
        <li><a href="about.html" class="nav-link-custom" data-page="about">About Us</a></li>
        <li><a href="menu.html" class="nav-link-custom" data-page="menu">Menu</a></li>
        <li><a href="blog.html" class="nav-link-custom" data-page="blog">Blog</a></li>
        <li><a href="contact.html" class="nav-link-custom" data-page="contact">Contact</a></li>
        <li><a href="loyalty.html" class="nav-link-custom" data-page="loyalty">Loyalty</a></li>
      </ul>

      <!-- Right Controls: RTL Toggle, Light/Dark Toggle, Profile Dropdown -->
      <div class="navbar-actions">
        <!-- RTL / LTR Toggle -->
        <button type="button" class="nav-action-btn" id="rtlToggleBtn" aria-label="Switch to RTL layout" title="Switch to RTL layout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 8h16m-4-4 4 4-4 4M20 16H4m4-4-4 4 4 4"/>
          </svg>
          <span id="rtlToggleText">RTL</span>
        </button>

        <!-- Theme Toggle -->
        <button type="button" class="nav-action-btn" id="themeToggleBtn" aria-label="Toggle dark mode" title="Toggle Dark/Light Mode">
          <svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.02-.39-1.41 0z"/></svg>
          <span id="themeToggleText">Dark</span>
        </button>

        <!-- Profile Dropdown -->
        <div class="profile-dropdown-wrapper">
          <button type="button" class="profile-trigger-btn" id="profileDropdownBtn" aria-expanded="false" aria-haspopup="true" aria-label="Account profile">
            <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </button>
          <ul class="profile-menu" id="profileDropdownMenu">
            <li>
              <a href="login.html">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10 17l5-5-5-5v3H3v4h7v3zm9-14H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
                <span>Login</span>
              </a>
            </li>
            <li>
              <a href="signup.html">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Mobile Hamburger Toggle -->
        <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Drawer Backdrop -->
  <div class="mobile-drawer-backdrop" id="mobileDrawerBackdrop"></div>

  <!-- Mobile Navigation Drawer -->
  <div class="mobile-navigation-drawer" id="mobileNavDrawer" aria-hidden="true">
    <div>
      <div class="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
        <a href="index.html" class="navbar-brand-custom">
          <img class="brand-logo-image" src="assets/images/logo/logo.png" alt="">
          <div class="brand-text-block">
            <span class="brand-name">Tea House</span>
            <span class="brand-sub">SPECIALTY CHAI</span>
          </div>
        </a>
        <button type="button" class="btn-close" id="mobileDrawerClose" aria-label="Close menu"></button>
      </div>

      <ul class="nav flex-column gap-2 mb-4" id="mobileNavLinks">
        <li class="nav-item"><a href="index.html" class="nav-link-custom d-block py-2" data-page="index">Home 1</a></li>
        <li class="nav-item"><a href="home2.html" class="nav-link-custom d-block py-2" data-page="home2">Home 2</a></li>
        <li class="nav-item"><a href="about.html" class="nav-link-custom d-block py-2" data-page="about">About Us</a></li>
        <li class="nav-item"><a href="menu.html" class="nav-link-custom d-block py-2" data-page="menu">Menu</a></li>
        <li class="nav-item"><a href="blog.html" class="nav-link-custom d-block py-2" data-page="blog">Blog</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link-custom d-block py-2" data-page="contact">Contact</a></li>
        <li class="nav-item"><a href="loyalty.html" class="nav-link-custom d-block py-2" data-page="loyalty">Loyalty</a></li>
      </ul>
    </div>

    <div class="pt-3 border-top">
      <div class="d-flex gap-2 mb-3">
        <a class="btn btn-outline-secondary w-50 py-2" href="login.html">Login</a>
        <a class="btn btn-primary w-50 py-2" style="background-color: var(--nav-accent); border-color: var(--nav-accent);" href="signup.html">Sign Up</a>
      </div>
      <p class="small text-muted mb-0 text-center">42 Heritage Lane, Fort, Mumbai<br>Mon – Sun: 7am – 10pm</p>
    </div>
  </div>
</header>
`;

  function renderNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
      placeholder.insertAdjacentHTML('beforebegin', navbarTemplate);
      placeholder.remove();
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarTemplate);
    }

    initNavbarInteractions();
    if (window.initThemeToggle) {
      window.initThemeToggle();
    }
    if (window.initLanguageToggle) {
      window.initLanguageToggle();
    }
    if (window.initThemeAndDirection) {
      window.initThemeAndDirection();
    }
  }

  function initNavbarInteractions() {
    // 1. Highlight current active page
    highlightActivePage();

    // 2. Sticky scroll shadow & header padding
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        siteHeader?.classList.add('scrolled');
      } else {
        siteHeader?.classList.remove('scrolled');
      }
    }, { passive: true });

    // 3. Profile Dropdown
    const profileBtn = document.getElementById('profileDropdownBtn');
    const profileMenu = document.getElementById('profileDropdownMenu');

    if (profileBtn && profileMenu) {
      profileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = profileMenu.classList.contains('show');
        if (isOpen) {
          profileMenu.classList.remove('show');
          profileBtn.setAttribute('aria-expanded', 'false');
        } else {
          profileMenu.classList.add('show');
          profileBtn.setAttribute('aria-expanded', 'true');
        }
      });

      document.addEventListener('click', function (e) {
        if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
          profileMenu.classList.remove('show');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // 4. Mobile Navigation Drawer
    const mobileToggle = document.getElementById('mobileNavToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    const mobileBackdrop = document.getElementById('mobileDrawerBackdrop');
    const mobileClose = document.getElementById('mobileDrawerClose');

    function openMobileMenu() {
      mobileToggle?.classList.add('active');
      mobileToggle?.setAttribute('aria-expanded', 'true');
      mobileDrawer?.classList.add('active');
      mobileDrawer?.setAttribute('aria-hidden', 'false');
      mobileBackdrop?.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent page background scrolling
    }

    function closeMobileMenu() {
      mobileToggle?.classList.remove('active');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      mobileDrawer?.classList.remove('active');
      mobileDrawer?.setAttribute('aria-hidden', 'true');
      mobileBackdrop?.classList.remove('active');
      document.body.style.overflow = '';
    }

    mobileToggle?.addEventListener('click', function () {
      if (mobileDrawer?.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileClose?.addEventListener('click', closeMobileMenu);
    mobileBackdrop?.addEventListener('click', closeMobileMenu);

    // Close mobile menu when a mobile nav link is clicked
    document.querySelectorAll('#mobileNavLinks .nav-link-custom').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function highlightActivePage() {
    let currentPage = document.body.getAttribute('data-current-page') || '';
    if (!currentPage) {
      const path = window.location.pathname;
      const file = path.split('/').pop().toLowerCase();
      if (!file || file === '' || file === 'index.html') {
        currentPage = 'index';
      } else {
        currentPage = file.replace('.html', '');
      }
    }

    const navLinks = document.querySelectorAll('.nav-link-custom[data-page]');
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // Self-execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
  } else {
    renderNavbar();
  }
})();
