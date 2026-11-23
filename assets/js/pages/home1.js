/**
 * TEA HOUSE & SPECIALTY CHAI - HOME 1 INTERACTIONS (home1.js)
 * Page-specific interactions for Home 1: Scroll animations, Chai Customizer,
 * Toast Notifications, and Blend action buttons.
 * Frontend-only vanilla JavaScript (Zero dependencies).
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initSmoothAnchors();
    initChaiBuilder();
    initActionButtons();
    initArtOfChaiStages();
  });

  // 1. Scroll Reveal Animations
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
  }

  // 2. Smooth Scrolling for Internal Anchor Links
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]:not([data-bs-toggle])').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          const headerOffset = 90;
          const elementPosition = targetElem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // 3. Interactive Chai Customizer Modal Logic
  function initChaiBuilder() {
    const builderModal = document.getElementById('chaiBuilderModal');
    if (!builderModal) return;

    const baseInputs = builderModal.querySelectorAll('input[name="chaiBase"]');
    const spiceInputs = builderModal.querySelectorAll('input[name="chaiSpice"]');
    const styleInputs = builderModal.querySelectorAll('input[name="chaiStyle"]');
    const summaryBase = document.getElementById('summaryBase');
    const summarySpices = document.getElementById('summarySpices');
    const summaryStyle = document.getElementById('summaryStyle');
    const summaryPrice = document.getElementById('summaryPrice');

    function updateSummary() {
      let baseVal = 'Classic Assam Tea';
      baseInputs.forEach(input => {
        if (input.checked) baseVal = input.value;
      });

      const selectedSpices = [];
      spiceInputs.forEach(input => {
        if (input.checked) selectedSpices.push(input.value);
      });
      const spicesVal = selectedSpices.length > 0 ? selectedSpices.join(', ') : 'None selected';

      let styleVal = 'Strong Kadak Chai';
      styleInputs.forEach(input => {
        if (input.checked) styleVal = input.value;
      });

      if (summaryBase) summaryBase.textContent = baseVal;
      if (summarySpices) summarySpices.textContent = spicesVal;
      if (summaryStyle) summaryStyle.textContent = styleVal;

      const basePrice = 120;
      const spiceCost = selectedSpices.length * 15;
      const total = basePrice + spiceCost;
      if (summaryPrice) summaryPrice.textContent = `₹${total}`;
    }

    baseInputs.forEach(input => input.addEventListener('change', updateSummary));
    spiceInputs.forEach(input => input.addEventListener('change', updateSummary));
    styleInputs.forEach(input => input.addEventListener('change', updateSummary));

    const orderBtn = document.getElementById('orderCustomChaiBtn');
    orderBtn?.addEventListener('click', function () {
      const bsModal = bootstrap.Modal.getInstance(builderModal);
      bsModal?.hide();
      showToast('Custom chai added to your tray! Our brewmaster will steep it to perfection.');
    });

    updateSummary();
  }

  // 4. Quick Action Buttons & Toasts
  function initActionButtons() {
    // Blend mini buttons
    document.querySelectorAll('.btn-blend-mini').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const blendName = this.getAttribute('data-blend-name') || 'Signature Blend';
        showToast(`Added ${blendName} pouch (100g) to your order tray!`);
      });
    });
  }

  // 5. The Art of Making Chai Interactive Stages
  function initArtOfChaiStages() {
    const stageItems = document.querySelectorAll('.art-stage-item');
    const activeImage = document.getElementById('artActiveImage');
    if (!stageItems.length || !activeImage) return;

    stageItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        activateStage(this);
      });
      item.addEventListener('click', function () {
        activateStage(this);
      });
    });

    function activateStage(stageElem) {
      stageItems.forEach(s => s.classList.remove('is-active'));
      stageElem.classList.add('is-active');

      const newSrc = stageElem.getAttribute('data-img');
      const newAlt = stageElem.getAttribute('data-alt');

      if (newSrc && activeImage.getAttribute('src') !== newSrc) {
        activeImage.style.opacity = '0.35';
        activeImage.style.transform = 'scale(0.97)';
        setTimeout(() => {
          activeImage.src = newSrc;
          if (newAlt) activeImage.alt = newAlt;
          activeImage.style.opacity = '1';
          activeImage.style.transform = 'scale(1)';
        }, 180);
      }
    }
  }
})();
