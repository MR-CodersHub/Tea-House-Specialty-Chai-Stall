/**
 * TEA HOUSE & SPECIALTY CHAI — CONTACT PAGE SCRIPT (contact.js)
 * Client-side validation, editable office timings schedule hydration,
 * map placeholder interactivity, and smooth scroll reveals.
 */

(function () {
  'use strict';

  /**
   * Editable Office Timings Data Store
   * Easy to update without modifying HTML markup.
   */
  const OFFICE_TIMINGS = [
    { day: 'Monday', hours: '[Add opening and closing time]', badge: 'Weekday Morning', isWeekend: false },
    { day: 'Tuesday', hours: '[Add opening and closing time]', badge: 'Weekday Morning', isWeekend: false },
    { day: 'Wednesday', hours: '[Add opening and closing time]', badge: 'Midweek Brew', isWeekend: false },
    { day: 'Thursday', hours: '[Add opening and closing time]', badge: 'Weekday Evening', isWeekend: false },
    { day: 'Friday', hours: '[Add opening and closing time]', badge: 'Weekend Kickoff', isWeekend: false },
    { day: 'Saturday', hours: '[Add opening and closing time]', badge: 'Artisan Workshop', isWeekend: true },
    { day: 'Sunday', hours: '[Add opening and closing time]', badge: 'Sunday Chai Circle', isWeekend: true }
  ];

  document.addEventListener('DOMContentLoaded', function () {
    initOfficeTimings();
    initContactFormValidation();
    initMapInteraction();
    initHeroScroll();
    initScrollReveals();
  });

  /**
   * Renders the weekly office timings schedule into #timingsScheduleGrid
   */
  function initOfficeTimings() {
    const gridEl = document.getElementById('timingsScheduleGrid');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    OFFICE_TIMINGS.forEach(item => {
      const row = document.createElement('div');
      row.className = 'timing-row';

      row.innerHTML = `
        <div class="timing-day-group">
          <span class="timing-day-name">${escapeHtml(item.day)}</span>
          <span class="timing-badge ${item.isWeekend ? 'badge-weekend' : ''}">${escapeHtml(item.badge)}</span>
        </div>
        <div class="timing-time-val">${escapeHtml(item.hours)}</div>
      `;

      gridEl.appendChild(row);
    });
  }

  /**
   * Form validation with comprehensive inline feedback and integration-ready handling
   */
  function initContactFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const phoneInput = document.getElementById('contactPhone');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmitBtn');
    const alertBox = document.getElementById('contactFormAlert');

    // Email regex (RFC 5322 compliant standard subset)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    // Real-time blur validation
    if (nameInput) {
      nameInput.addEventListener('blur', () => validateField(nameInput, val => val.trim().length >= 2, 'Please enter your full name (at least 2 characters).', 'nameFeedback'));
      nameInput.addEventListener('input', () => clearFieldFeedback(nameInput, 'nameFeedback'));
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => validateField(emailInput, val => emailRegex.test(val.trim()), 'Please enter a valid email address (e.g. name@domain.com).', 'emailFeedback'));
      emailInput.addEventListener('input', () => clearFieldFeedback(emailInput, 'emailFeedback'));
    }

    if (phoneInput) {
      phoneInput.addEventListener('blur', () => {
        const val = phoneInput.value.trim();
        if (val.length > 0) {
          validateField(phoneInput, v => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/.test(v.replace(/\s+/g, '')), 'Please enter a valid phone number (at least 7 digits).', 'phoneFeedback');
        } else {
          clearFieldFeedback(phoneInput, 'phoneFeedback');
        }
      });
      phoneInput.addEventListener('input', () => clearFieldFeedback(phoneInput, 'phoneFeedback'));
    }

    if (subjectInput) {
      subjectInput.addEventListener('blur', () => validateField(subjectInput, val => val.trim().length >= 3, 'Please specify a subject for your enquiry.', 'subjectFeedback'));
      subjectInput.addEventListener('input', () => clearFieldFeedback(subjectInput, 'subjectFeedback'));
    }

    if (messageInput) {
      messageInput.addEventListener('blur', () => validateField(messageInput, val => val.trim().length >= 10, 'Please write a message with at least 10 characters.', 'messageFeedback'));
      messageInput.addEventListener('input', () => clearFieldFeedback(messageInput, 'messageFeedback'));
    }

    // Form Submission Handler
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate all required fields
      const isNameValid = validateField(nameInput, val => val.trim().length >= 2, 'Please enter your full name (at least 2 characters).', 'nameFeedback');
      const isEmailValid = validateField(emailInput, val => emailRegex.test(val.trim()), 'Please enter a valid email address.', 'emailFeedback');
      const isPhoneValid = !phoneInput.value.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/.test(phoneInput.value.trim().replace(/\s+/g, ''));
      if (!isPhoneValid) {
        validateField(phoneInput, () => false, 'Please enter a valid phone number.', 'phoneFeedback');
      }
      const isSubjectValid = validateField(subjectInput, val => val.trim().length >= 3, 'Please specify a subject for your enquiry.', 'subjectFeedback');
      const isMessageValid = validateField(messageInput, val => val.trim().length >= 10, 'Please write a message with at least 10 characters.', 'messageFeedback');

      const isFormValid = isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid;

      if (!isFormValid) {
        // Focus first invalid element
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }

        if (alertBox) {
          alertBox.className = 'contact-form-alert alert-danger';
          alertBox.innerHTML = `
            <i class="bi bi-exclamation-triangle-fill flex-shrink-0" aria-hidden="true"></i>
            <div>Please correct the errors in the highlighted fields before submitting.</div>
          `;
          alertBox.classList.remove('d-none');
        }
        return;
      }

      // Valid state: show loading state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        <span>Formatting Message...</span>
      `;

      // Simulate preparation & show honest integration-ready message
      setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        const senderName = nameInput.value.trim();
        const senderSubject = subjectInput.value.trim();

        if (alertBox) {
          alertBox.className = 'contact-form-alert alert-info-ready';
          alertBox.innerHTML = `
            <i class="bi bi-check-circle-fill text-success fs-5 flex-shrink-0" aria-hidden="true"></i>
            <div>
              <strong>Enquiry Form Validated:</strong> Thank you, <em>${escapeHtml(senderName)}</em>!
              Your message regarding <strong>"${escapeHtml(senderSubject)}"</strong> has been validated and prepared for dispatch.
              <br><small class="text-muted mt-1 d-block">
                Integration Note: A backend endpoint or email service integration (e.g. Formspree, EmailJS, or server-side API) is required to deliver messages to your designated inbox.
              </small>
            </div>
          `;
          alertBox.classList.remove('d-none');
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset form inputs & valid classes
        form.reset();
        [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(inp => {
          if (inp) {
            inp.classList.remove('is-valid', 'is-invalid');
          }
        });

        // Trigger global toast if helper exists
        if (typeof showToast === 'function') {
          showToast(`Message details validated for ${senderName}!`);
        }
      }, 600);
    });
  }

  /**
   * Helper to validate a specific input
   */
  function validateField(inputEl, conditionFn, errorMsg, feedbackId) {
    if (!inputEl) return false;
    const value = inputEl.value;
    const isValid = conditionFn(value);
    const feedbackEl = document.getElementById(feedbackId);

    if (isValid) {
      inputEl.classList.remove('is-invalid');
      inputEl.classList.add('is-valid');
      if (feedbackEl) {
        feedbackEl.textContent = '';
        feedbackEl.classList.remove('is-visible');
      }
      return true;
    } else {
      inputEl.classList.remove('is-valid');
      inputEl.classList.add('is-invalid');
      if (feedbackEl) {
        feedbackEl.textContent = errorMsg;
        feedbackEl.classList.add('is-visible');
      }
      return false;
    }
  }

  /**
   * Clears feedback while user is typing
   */
  function clearFieldFeedback(inputEl, feedbackId) {
    if (!inputEl) return;
    inputEl.classList.remove('is-invalid');
    const feedbackEl = document.getElementById(feedbackId);
    if (feedbackEl) {
      feedbackEl.classList.remove('is-visible');
    }
  }

  /**
   * Map interaction & Get Directions button feedback
   */
  function initMapInteraction() {
    const directionsBtn = document.getElementById('getDirectionsBtn');
    if (!directionsBtn) return;

    directionsBtn.addEventListener('click', function () {
      if (typeof showToast === 'function') {
        showToast('Opening Google Maps navigation to 42 Heritage Lane...');
      }
    });
  }

  /**
   * Hero smooth scroll button to #contactFormSection
   */
  function initHeroScroll() {
    const scrollBtn = document.getElementById('heroScrollBtn');
    if (!scrollBtn) return;

    scrollBtn.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  /**
   * Scroll reveal observer
   */
  function initScrollReveals() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, parseInt(delay, 10));
            obs.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      });

      elements.forEach(el => observer.observe(el));
    } else {
      elements.forEach(el => el.classList.add('is-visible'));
    }
  }

  /**
   * Safe HTML escaping helper
   */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

})();
