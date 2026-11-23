/**
 * TEA HOUSE & SPECIALTY CHAI - HOME 2 PAGE INTERACTIONS (home2.js)
 * Clean, Modular, Dependency-free Vanilla JavaScript (ES6+)
 * Manages the interactive Mood Selector and scroll reveals for Home 2.
 */

(function () {
  'use strict';

  // Mood Selector Data Mapping
  const MOOD_DATA = {
    comfort: {
      tag: 'RECOMMENDED FOR COMFORT',
      title: 'Classic Masala Chai',
      desc: 'When you crave reassurance and home-style warmth. Robust Assam orthodox leaves slow-boiled with crushed green cardamom pods, cinnamon quills, whole cloves, and rich dairy milk.',
      price: '₹149',
      pills: [
        { icon: 'bi-droplet-half', text: 'Full Body' },
        { icon: 'bi-fire', text: 'Medium Spice' },
        { icon: 'bi-cup', text: 'Whole Milk Brew' }
      ],
      img: 'assets/images/home2/moments/moment-catchup.jpg',
      alt: 'Classic Masala Chai served in a ceramic cup'
    },
    energy: {
      tag: 'RECOMMENDED FOR ENERGY',
      title: 'Kadak Adrak Cutting Chai',
      desc: 'An invigorating shot of sharp crushed ginger, crushed black peppercorns, and heavy Assam CTC tea simmered twice for an electrifying midday awakening.',
      price: '₹129',
      pills: [
        { icon: 'bi-lightning-charge', text: 'High Caffeine' },
        { icon: 'bi-fire', text: 'Sharp Ginger' },
        { icon: 'bi-speedometer2', text: 'Fast Kick' }
      ],
      img: 'assets/images/home2/experience/pause-cutting-glass.jpg',
      alt: 'Kadak Adrak Cutting Chai in a traditional glass'
    },
    calm: {
      tag: 'RECOMMENDED FOR CALM',
      title: 'Kashmiri Kahwa & Saffron',
      desc: 'A soothing, fragrant green tea infused with whole green cardamom, cinnamon bark, crushed almonds, and delicate saffron strands steeped in hot spring water.',
      price: '₹189',
      pills: [
        { icon: 'bi-flower1', text: 'Floral Aroma' },
        { icon: 'bi-moon-stars', text: 'Gentle Green Base' },
        { icon: 'bi-gem', text: 'Saffron & Almonds' }
      ],
      img: 'assets/images/home2/moments/moment-morning.jpg',
      alt: 'Kashmiri Kahwa & Saffron infused tea'
    },
    flavour: {
      tag: 'RECOMMENDED FOR FLAVOUR',
      title: 'Royal Golden Saffron Chai',
      desc: 'An opulent festival of flavours: slow-steeped rose petals, freshly ground green cardamom, star anise, turmeric golden milk, and a crown of pistachio slivers.',
      price: '₹199',
      pills: [
        { icon: 'bi-stars', text: 'Complex Spices' },
        { icon: 'bi-heart-pulse', text: 'Turmeric Golden' },
        { icon: 'bi-trophy', text: 'Royal Blend' }
      ],
      img: 'assets/images/home2/moments/moment-evening.png',
      alt: 'Royal Golden Saffron Chai still life'
    }
  };


  /**
   * Initializes Hero Section Entrance Animations
   * Staggered reveal using data-anim-delay attributes.
   * Respects prefers-reduced-motion.
   */
  function initHeroEntrance() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var fadeUps      = document.querySelectorAll('.h2-anim-fade-up');
    var expands      = document.querySelectorAll('.h2-anim-expand');
    var revealRights = document.querySelectorAll('.h2-anim-reveal-right');

    if (prefersReduced) {
      fadeUps.forEach(function(el)      { el.classList.add('is-h2-visible'); });
      expands.forEach(function(el)      { el.classList.add('is-h2-visible'); });
      revealRights.forEach(function(el) { el.classList.add('is-h2-visible'); });
      return;
    }

    // Set initial hidden states via inline style so CSS transition kicks in
    fadeUps.forEach(function(el) {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(28px)';
    });
    expands.forEach(function(el) {
      el.style.opacity         = '0';
      el.style.transform       = 'scaleX(0)';
      el.style.transformOrigin = 'left center';
    });
    revealRights.forEach(function(el) {
      el.style.opacity   = '0';
      el.style.transform = 'translateX(32px)';
    });

    function triggerReveal(el) {
      var delay = parseInt(el.getAttribute('data-anim-delay') || '0', 10);
      setTimeout(function() {
        el.classList.add('is-h2-visible');
        el.style.opacity   = '';
        el.style.transform = '';
      }, 60 + delay);
    }

    fadeUps.forEach(triggerReveal);
    expands.forEach(triggerReveal);
    revealRights.forEach(triggerReveal);
  }

  /**
   * Initializes interactive Chai Mood Selector
   */
  function initMoodSelector() {
    const tabButtons = document.querySelectorAll('.h2-mood-tab-btn');
    const resultTag = document.getElementById('moodResultTag');
    const resultTitle = document.getElementById('moodResultTitle');
    const resultDesc = document.getElementById('moodResultDesc');
    const resultPrice = document.getElementById('moodResultPrice');
    const resultProfile = document.getElementById('moodResultProfile');
    const resultImg = document.getElementById('moodResultImg');

    if (!tabButtons.length || !resultTag || !resultTitle || !resultDesc || !resultPrice || !resultImg) {
      return;
    }

    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const moodKey = this.getAttribute('data-mood');
        const moodInfo = MOOD_DATA[moodKey];

        if (!moodInfo) return;

        // Update active button state
        tabButtons.forEach(btn => btn.classList.remove('is-selected'));
        this.classList.add('is-selected');

        // Smooth transition animation
        const animatedElements = [resultTag, resultTitle, resultDesc, resultPrice, resultProfile, resultImg];
        animatedElements.forEach(el => {
          if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(8px)';
            el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          }
        });

        setTimeout(function () {
          // Update texts and details
          resultTag.textContent = moodInfo.tag;
          resultTitle.textContent = moodInfo.title;
          resultDesc.textContent = moodInfo.desc;
          resultPrice.textContent = moodInfo.price;

          // Update profile badges
          if (resultProfile && moodInfo.pills) {
            resultProfile.innerHTML = moodInfo.pills.map(p => `
              <span class="h2-profile-pill">
                <i class="bi ${p.icon}"></i> ${p.text}
              </span>
            `).join('');
          }

          // Update image
          resultImg.src = moodInfo.img;
          resultImg.alt = moodInfo.alt;

          // Fade back in
          animatedElements.forEach(el => {
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }
          });
        }, 220);
      });
    });
  }

  /**
   * Initializes Scroll Reveal Animations via IntersectionObserver
   */
  function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      reveals.forEach(el => el.classList.add('is-visible'));
    }
  }

  // DOM Content Loaded Handler
  document.addEventListener('DOMContentLoaded', function () {
    initHeroEntrance();
    initMoodSelector();
    initScrollReveals();
  });
})();
