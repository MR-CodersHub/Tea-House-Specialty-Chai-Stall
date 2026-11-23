/**
 * TEA HOUSE & SPECIALTY CHAI — LOYALTY PAGE SCRIPT (loyalty.js)
 * Tiers & rewards hydration, interactive digital card progress demo,
 * reward redemption simulation, and scroll reveal animations.
 */

(function () {
  'use strict';

  /**
   * Editable Membership Tiers Data Store
   */
  const TIERS_DATA = [
    {
      id: 'starter',
      name: 'Chai Starter',
      pillClass: 'pill-starter',
      badgeLabel: 'Tier 01 • Welcome',
      tagline: 'Start collecting points & enjoy basic rewards',
      benefits: [
        'Welcome to the loyalty club with 50 bonus leaves',
        'Start collecting loyalty points with every cup',
        'Access to member-only updates & weekly brew guides',
        'Enjoy available basic rewards & birthday treats'
      ],
      isHighlighted: false,
      btnText: 'Join as Starter'
    },
    {
      id: 'enthusiast',
      name: 'Chai Enthusiast',
      pillClass: 'pill-enthusiast',
      badgeLabel: 'Tier 02 • Most Loved',
      tagline: 'Unlock more rewarding experiences & priority treats',
      benefits: [
        'Accelerated points accumulation on specialty blends',
        'Access to selected exclusive monthly offers',
        'Special member treats and seasonal preview tastings',
        'Priority access to selected promotions & limited tins'
      ],
      isHighlighted: true,
      popularLabel: 'Most Popular Choice',
      btnText: 'Aim for Enthusiast'
    },
    {
      id: 'connoisseur',
      name: 'Chai Connoisseur',
      pillClass: 'pill-connoisseur',
      badgeLabel: 'Tier 03 • Signature',
      tagline: 'Premium membership experience & bespoke surprises',
      benefits: [
        'Highest tier points accumulation across the stall',
        'Access to exclusive reward selections & custom blends',
        'Special seasonal surprises & birthday celebration gifts',
        'Invitations to selected member experiences & workshops'
      ],
      isHighlighted: false,
      btnText: 'Explore Connoisseur'
    }
  ];

  /**
   * Editable Rewards Catalog Data Store
   */
  const REWARDS_DATA = [
    {
      id: 'reward-chai',
      title: 'Complimentary Chai Treat',
      desc: 'A fragrant cutting or classic spiced masala chai served in our signature clay cup.',
      points: '[150 Points required]',
      image: 'assets/images/loyalty/reward-chai.jpg',
      category: 'Beverage Perk'
    },
    {
      id: 'reward-snack',
      title: 'Favourite Tea-Time Bite',
      desc: 'Freshly baked cardamom scone or warm mawa butter cookies paired with your drink.',
      points: '[250 Points required]',
      image: 'assets/images/loyalty/reward-snack.jpg',
      category: 'Bakery Perk'
    },
    {
      id: 'reward-mug',
      title: 'Member Ceramic Mug',
      desc: 'Special handcrafted stoneware mug designed by heritage potters for loyal patrons.',
      points: '[400 Points required]',
      image: 'assets/images/loyalty/reward-mug.jpg',
      category: 'Artisan Merchandise'
    },
    {
      id: 'reward-spices',
      title: 'Seasonal Surprise Spice Kit',
      desc: 'Small-batch tin of whole green cardamom, star anise, and single-origin Assam leaves.',
      points: '[600 Points required]',
      image: 'assets/images/loyalty/reward-spices.jpg',
      category: 'Collector Kit'
    }
  ];

  // Interactive Demo State
  let currentDemoPoints = 240;

  document.addEventListener('DOMContentLoaded', function () {
    renderMembershipTiers();
    renderRewardsCatalog();
    initPointsDemo();
    initHeroSmoothScroll();
    initScrollReveals();
  });

  /**
   * Renders the 3 membership tier cards
   */
  function renderMembershipTiers() {
    const gridEl = document.getElementById('membershipTiersGrid');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    TIERS_DATA.forEach((tier, index) => {
      const card = document.createElement('div');
      card.className = `membership-tier-card reveal-on-scroll ${tier.isHighlighted ? 'tier-highlighted' : ''}`;
      card.dataset.delay = (index * 80).toString();

      let popularBadgeHtml = '';
      if (tier.isHighlighted && tier.popularLabel) {
        popularBadgeHtml = `<div class="tier-popular-badge">${escapeHtml(tier.popularLabel)}</div>`;
      }

      const benefitsHtml = tier.benefits.map(b => `
        <li class="tier-benefit-item">
          <i class="bi bi-check2-circle" aria-hidden="true"></i>
          <span>${escapeHtml(b)}</span>
        </li>
      `).join('');

      card.innerHTML = `
        ${popularBadgeHtml}
        <div class="tier-card-header">
          <span class="tier-badge-pill ${tier.pillClass}">${escapeHtml(tier.badgeLabel)}</span>
          <h3 class="tier-card-title">${escapeHtml(tier.name)}</h3>
          <p class="tier-card-tagline">${escapeHtml(tier.tagline)}</p>
        </div>
        <ul class="tier-benefits-list">
          ${benefitsHtml}
        </ul>
        <div class="tier-card-footer">
          <button type="button" class="${tier.isHighlighted ? 'btn-terracotta' : 'btn-forest'}" data-bs-toggle="modal" data-bs-target="#signupModal">
            <span>${escapeHtml(tier.btnText)}</span>
          </button>
        </div>
      `;

      gridEl.appendChild(card);
    });
  }

  /**
   * Renders the 4 interactive reward cards
   */
  function renderRewardsCatalog() {
    const gridEl = document.getElementById('rewardsGrid');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    REWARDS_DATA.forEach((reward, index) => {
      const card = document.createElement('div');
      card.className = 'reward-card reveal-on-scroll';
      card.dataset.delay = (index * 70).toString();

      card.innerHTML = `
        <div class="reward-card-media">
          <img src="${escapeHtml(reward.image)}"
               alt="${escapeHtml(reward.title)}"
               class="reward-card-img"
               loading="lazy">
          <div class="reward-points-badge">
            <i class="bi bi-stars" aria-hidden="true"></i>
            <span>${escapeHtml(reward.points)}</span>
          </div>
        </div>
        <div class="reward-card-body">
          <h3 class="reward-card-title">${escapeHtml(reward.title)}</h3>
          <p class="reward-card-desc">${escapeHtml(reward.desc)}</p>
          <div class="reward-card-footer">
            <button type="button" class="btn-terracotta reward-redeem-btn" data-reward-title="${escapeHtml(reward.title)}">
              <span>Redeem Reward</span>
            </button>
          </div>
        </div>
      `;

      gridEl.appendChild(card);
    });

    // Attach click listener for reward buttons
    gridEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.reward-redeem-btn');
      if (btn) {
        const title = btn.dataset.rewardTitle || 'Selected Reward';
        if (typeof showToast === 'function') {
          showToast(`Reward redemption for "${title}" will be available once your membership is activated.`);
        } else {
          alert(`Reward Redemption Note: Redemption for "${title}" will be available once your membership is activated.`);
        }
      }
    });
  }

  /**
   * Interactive Points & Progress Demo Logic
   */
  function initPointsDemo() {
    const counterEl = document.getElementById('demoPointsCounter');
    const progressBar = document.getElementById('demoProgressBar');
    const percentText = document.getElementById('progressPercentText');
    const milestoneText = document.getElementById('milestoneHintText');
    const cardBadge = document.getElementById('cardTierBadge');
    const dashboardText = document.getElementById('dashboardTierText');
    const addBtn = document.getElementById('addPointsBtn');
    const resetBtn = document.getElementById('resetPointsBtn');

    if (!counterEl || !progressBar || !addBtn || !resetBtn) return;

    updateDemoDisplay(currentDemoPoints, false);

    // Add Demo Points Button (+50)
    addBtn.addEventListener('click', function () {
      const previous = currentDemoPoints;
      currentDemoPoints += 50;
      updateDemoDisplay(currentDemoPoints, true, previous);

      if (typeof showToast === 'function') {
        showToast(`+50 Demo leaves added! You now have ${currentDemoPoints} points.`);
      }
    });

    // Reset Demo Button
    resetBtn.addEventListener('click', function () {
      currentDemoPoints = 240;
      updateDemoDisplay(currentDemoPoints, true);

      if (typeof showToast === 'function') {
        showToast('Demo points reset to baseline (240 points).');
      }
    });

    function updateDemoDisplay(points, animateNumber = true, oldVal = 240) {
      // 1. Calculate Tier and Progress
      let tierName = 'Chai Starter';
      let progressPercent = 0;
      let milestoneMsg = '';

      if (points < 300) {
        tierName = 'Chai Starter';
        progressPercent = Math.min(100, Math.round((points / 300) * 100));
        const needed = 300 - points;
        milestoneMsg = `<i class="bi bi-flag-fill me-1" aria-hidden="true"></i><span>${needed} more points to reach <strong>Chai Enthusiast</strong></span>`;
      } else if (points < 600) {
        tierName = 'Chai Enthusiast';
        progressPercent = Math.min(100, Math.round(((points - 300) / 300) * 100));
        const needed = 600 - points;
        milestoneMsg = `<i class="bi bi-stars me-1" aria-hidden="true"></i><span>${needed} more points to reach <strong>Chai Connoisseur</strong></span>`;
      } else {
        tierName = 'Chai Connoisseur';
        progressPercent = 100;
        milestoneMsg = `<i class="bi bi-trophy-fill me-1 text-warning" aria-hidden="true"></i><span>Maximum tier achieved! <strong>Top Patron Status</strong></span>`;
      }

      // 2. Animate counter number
      if (animateNumber) {
        animateCounter(counterEl, oldVal, points, 400);
      } else {
        counterEl.textContent = points.toString();
      }

      // 3. Update Bar & Percent
      progressBar.style.width = `${progressPercent}%`;
      if (percentText) percentText.textContent = `${progressPercent}%`;
      if (milestoneText) milestoneText.innerHTML = milestoneMsg;

      // 4. Update Card & Dashboard Badges
      if (cardBadge) cardBadge.textContent = tierName;
      if (dashboardText) dashboardText.textContent = tierName;
    }

    function animateCounter(el, start, end, duration) {
      const startTime = performance.now();
      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(start + (end - start) * progress);
        el.textContent = current.toString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = end.toString();
        }
      }
      requestAnimationFrame(step);
    }
  }

  /**
   * Hero smooth scroll button to #rewardsSection
   */
  function initHeroSmoothScroll() {
    const btn = document.getElementById('heroExploreRewardsBtn');
    if (!btn) return;

    btn.addEventListener('click', function (e) {
      const target = document.getElementById('rewardsSection');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
   * HTML escape helper
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
