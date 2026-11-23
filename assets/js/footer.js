/**
 * Renders the shared Tea House footer and handles its newsletter form.
 */

(function () {
  'use strict';

  const footerContact = {
    address: 'Visit Our Tea House',
    email: 'hello@teahouse.com',
    phone: '+91 XXXXX XXXXX',
    hours: 'Daily | 8:00 AM – 10:00 PM',
    directionsUrl: ''
  };

  const directionsMarkup = footerContact.directionsUrl
    ? `<a class="site-footer__directions" href="${footerContact.directionsUrl}" target="_blank" rel="noopener">Get Directions</a>`
    : '';

  const footerTemplate = `
<footer class="site-footer" id="siteFooter">
  <div class="site-footer__inner">
    <div class="site-footer__columns">
      <section class="site-footer__column site-footer__brand" aria-labelledby="footerBrandTitle">
        <a class="site-footer__brand-link" href="index.html" aria-label="Tea House home">
          <img class="site-footer__logo" src="assets/images/logo/logo.png" alt="">
          <span class="site-footer__brand-copy">
            <span class="site-footer__brand-name" id="footerBrandTitle">Tea House</span>
            <span class="site-footer__tagline">SPECIALTY CHAI</span>
          </span>
        </a>
        <p class="site-footer__description">Experience the warmth of authentic chai at Tea House. From traditional masala chai to our signature blends, every cup is prepared to bring people together and make everyday moments special.</p>
        <nav class="site-footer__socials" aria-label="Social media">
          <a href="https://instagram.com" class="site-footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.05 1.26.07 1.64.07 4.85s-.02 3.58-.07 4.84c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.26-.07-1.64-.07-4.84s.01-3.59.07-4.85c.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07Zm0 2.16c-3.26 0-3.67.01-4.95.07-2.18.1-3.19 1.13-3.29 3.3-.06 1.28-.07 1.69-.07 4.3s.01 3.02.07 4.3c.1 2.17 1.11 3.2 3.29 3.3 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c2.17-.1 3.19-1.13 3.29-3.3.06-1.28.07-1.69.07-4.3s-.01-3.02-.07-4.3c-.1-2.17-1.12-3.2-3.29-3.3-1.28-.06-1.69-.07-4.95-.07Zm0 3.68a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5.2-3.58a1.18 1.18 0 1 1 0 2.36 1.18 1.18 0 0 1 0-2.36Z"/></svg>
          </a>
          <a href="https://facebook.com" class="site-footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.42c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.72-1.79 1.76v2.32h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0Z"/></svg>
          </a>
          <a href="https://youtube.com" class="site-footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z"/></svg>
          </a>
          <a href="https://pinterest.com" class="site-footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5A10.5 10.5 0 0 0 8.18 21.78c-.02-.83 0-1.83.2-2.73l1.45-6.14s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.77 1.53 1.7 0 1.03-.66 2.58-1 4.02-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.58-2.75 3.58-6.02 0-2.48-1.67-4.33-4.7-4.33-3.43 0-5.57 2.56-5.57 5.42 0 .99.29 1.69.74 2.23.2.25.23.35.16.63l-.23.93c-.08.3-.32.4-.59.29-1.64-.67-2.4-2.46-2.4-4.48 0-3.33 2.81-7.32 8.39-7.32 4.49 0 7.45 3.25 7.45 6.74 0 4.62-2.57 8.08-6.36 8.08-1.27 0-2.47-.69-2.88-1.47l-.83 3.31c-.25.91-.74 1.81-1.19 2.52A10.5 10.5 0 1 0 12 1.5Z"/></svg>
          </a>
        </nav>
      </section>

      <nav class="site-footer__column" aria-labelledby="footerQuickLinksTitle">
        <h2 class="site-footer__heading" id="footerQuickLinksTitle">Quick Links</h2>
        <ul class="site-footer__link-list" id="footerNavLinks">
          <li><a class="site-footer__text-link footer-nav-link" data-page="index" href="index.html">Home 1</a></li>
          <li><a class="site-footer__text-link footer-nav-link" data-page="home2" href="home2.html">Home 2</a></li>
          <li><a class="site-footer__text-link footer-nav-link" data-page="about" href="about.html">About Us</a></li>
          <li><a class="site-footer__text-link footer-nav-link" data-page="menu" href="menu.html">Menu</a></li>
          <li><a class="site-footer__text-link footer-nav-link" data-page="blog" href="blog.html">Blog</a></li>
          <li><a class="site-footer__text-link footer-nav-link" data-page="contact" href="contact.html">Contact</a></li>
          <li><a class="site-footer__text-link footer-nav-link" data-page="loyalty" href="loyalty.html">Loyalty</a></li>
        </ul>
      </nav>

      <nav class="site-footer__column" aria-labelledby="footerMenuTitle">
        <h2 class="site-footer__heading" id="footerMenuTitle">Explore Our Menu</h2>
        <ul class="site-footer__link-list">
          <li><a class="site-footer__text-link" href="menu.html">Classic Chai</a></li>
          <li><a class="site-footer__text-link" href="menu.html">Masala Chai</a></li>
          <li><a class="site-footer__text-link" href="menu.html">Ginger Chai</a></li>
          <li><a class="site-footer__text-link" href="menu.html">Elaichi Chai</a></li>
          <li><a class="site-footer__text-link" href="menu.html">Green Tea</a></li>
          <li><a class="site-footer__text-link" href="menu.html">Specialty Blends</a></li>
        </ul>
      </nav>

      <section class="site-footer__column" aria-labelledby="footerContactTitle">
        <h2 class="site-footer__heading" id="footerContactTitle">Get In Touch</h2>
        <ul class="site-footer__contact-list">
          <li><span class="site-footer__contact-label">Address</span><span class="site-footer__contact-value">${footerContact.address}</span></li>
          <li><span class="site-footer__contact-label">Email</span><a class="site-footer__contact-value" href="mailto:${footerContact.email}">${footerContact.email}</a></li>
          <li><span class="site-footer__contact-label">Phone</span><span class="site-footer__contact-value">${footerContact.phone}<small class="site-footer__note">Replace with a verified business number.</small></span></li>
          <li><span class="site-footer__contact-label">Opening Hours</span><span class="site-footer__contact-value">${footerContact.hours}</span></li>
        </ul>
        ${directionsMarkup}
      </section>
    </div>

    <section class="site-footer__newsletter" aria-labelledby="footerNewsletterTitle">
      <div class="site-footer__newsletter-copy">
        <h2 class="site-footer__heading" id="footerNewsletterTitle">Stay Connected With Tea House</h2>
        <p>Get the latest updates on our specialty chai, new flavours, exclusive offers, and tea experiences.</p>
      </div>
      <form class="site-footer__newsletter-form" id="footerNewsletterForm" novalidate>
        <label class="site-footer__visually-hidden" for="footerNewsletterEmail">Email address</label>
        <input id="footerNewsletterEmail" name="email" type="email" autocomplete="email" placeholder="Your email address" required>
        <button type="submit">Subscribe</button>
        <p class="site-footer__newsletter-message" id="footerNewsletterMessage" aria-live="polite"></p>
      </form>
    </section>

    <div class="site-footer__bottom">
      <p class="site-footer__copyright">© 2026 Tea House. All Rights Reserved.</p>
      <div class="site-footer__legal" aria-label="Legal information">
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
    </div>
  </div>
</footer>
`;

  function renderFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.innerHTML = footerTemplate;
    } else {
      document.body.insertAdjacentHTML('beforeend', footerTemplate);
    }

    highlightActiveFooterLink();
    initializeNewsletterForm();
  }

  function initializeNewsletterForm() {
    const form = document.getElementById('footerNewsletterForm');
    const emailInput = document.getElementById('footerNewsletterEmail');
    const message = document.getElementById('footerNewsletterMessage');

    if (!form || !emailInput || !message) {
      return;
    }

    emailInput.addEventListener('input', function () {
      emailInput.setCustomValidity('');
      message.textContent = '';
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      emailInput.value = emailInput.value.trim();
      emailInput.setCustomValidity('');

      if (!emailInput.value) {
        emailInput.setCustomValidity('Enter your email address.');
        emailInput.reportValidity();
        return;
      }

      if (!emailInput.validity.valid) {
        emailInput.setCustomValidity('Enter a valid email address.');
        emailInput.reportValidity();
        return;
      }

      message.textContent = 'Newsletter sign-up is not connected yet. No email was sent.';
    });
  }

  function highlightActiveFooterLink() {
    let currentPage = document.body.getAttribute('data-current-page') || '';
    if (!currentPage) {
      const file = window.location.pathname.split('/').pop().toLowerCase();
      currentPage = !file || file === 'index.html' ? 'index' : file.replace('.html', '');
    }

    document.querySelectorAll('.footer-nav-link[data-page]').forEach(function (link) {
      if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
