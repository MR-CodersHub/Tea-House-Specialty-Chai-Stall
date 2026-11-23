/**
 * TEA HOUSE & SPECIALTY CHAI — BLOG LISTING PAGE SCRIPT (blog.js)
 * Hydrates the blog cards grid from central blog-data.js,
 * handles interactive category filtering with smooth transitions,
 * category URL query parameter parsing, and scroll reveal animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBlogGrid();
  initCategoryFilters();
  initScrollReveals();
});

/**
 * Hydrates the 6-article cards grid from central BLOG_POSTS store
 */
function initBlogGrid() {
  const gridContainer = document.getElementById('blogGrid');
  if (!gridContainer || typeof getAllBlogPosts !== 'function') return;

  const posts = getAllBlogPosts();
  if (!posts || !posts.length) return;

  // Clear any existing content
  gridContainer.innerHTML = '';

  posts.forEach((post, index) => {
    const cardEl = createBlogCardElement(post, index);
    gridContainer.appendChild(cardEl);
  });
}

/**
 * Creates an individual article card element
 * @param {Object} post Article data object
 * @param {number} index Order index for stagger animation
 * @returns {HTMLElement} Article element
 */
function createBlogCardElement(post, index) {
  const article = document.createElement('article');
  article.className = 'blog-card reveal-on-scroll';
  article.dataset.category = post.category;
  article.dataset.slug = post.slug;
  article.setAttribute('data-delay', (index * 80).toString());

  article.innerHTML = `
    <div class="blog-card-media">
      <img src="${escapeHtml(post.coverImage)}"
           alt="${escapeHtml(post.title)}"
           class="blog-card-img"
           loading="${index < 3 ? 'eager' : 'lazy'}">
      <span class="blog-card-category">${escapeHtml(post.category)}</span>
    </div>
    <div class="blog-card-body">
      <div class="blog-card-meta">
        <i class="bi bi-calendar3" aria-hidden="true"></i>
        <span>${escapeHtml(post.date)}</span>
        <span class="blog-card-dot" aria-hidden="true">•</span>
        <i class="bi bi-clock" aria-hidden="true"></i>
        <span>${escapeHtml(post.readTime)}</span>
      </div>
      <h3 class="blog-card-title">
        <a href="blog-detail.html?post=${encodeURIComponent(post.slug)}" class="stretched-link-custom">
          ${escapeHtml(post.title)}
        </a>
      </h3>
      <p class="blog-card-desc">
        ${escapeHtml(post.shortDesc)}
      </p>
      <div class="blog-card-footer">
        <a href="blog-detail.html?post=${encodeURIComponent(post.slug)}" class="blog-card-link" aria-label="Read full article: ${escapeHtml(post.title)}">
          <span>Read Full Story</span>
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  `;

  return article;
}

/**
 * Handles category filtering logic
 */
function initCategoryFilters() {
  const navContainer = document.getElementById('journalCategories');
  if (!navContainer) return;

  const filterButtons = navContainer.querySelectorAll('.blog-cat-pill');
  const gridContainer = document.getElementById('blogGrid');
  if (!filterButtons.length || !gridContainer) return;

  // Check URL query parameters for ?category=
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');

  if (initialCategory) {
    let matchedButton = null;
    filterButtons.forEach(btn => {
      const filterVal = btn.dataset.filter;
      if (filterVal && filterVal.toLowerCase() === initialCategory.toLowerCase()) {
        matchedButton = btn;
      }
    });

    if (matchedButton) {
      setActiveFilter(matchedButton, filterButtons);
      filterCards(matchedButton.dataset.filter, gridContainer);
    }
  }

  // Click listener for each category button
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const filterValue = button.dataset.filter;
      setActiveFilter(button, filterButtons);
      filterCards(filterValue, gridContainer);

      // Smoothly scroll active button into horizontal view if overflowing on mobile
      button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });
}

/**
 * Sets active class and aria-selected state
 */
function setActiveFilter(activeBtn, allButtons) {
  allButtons.forEach(btn => {
    btn.classList.remove('is-active');
    btn.setAttribute('aria-selected', 'false');
  });
  activeBtn.classList.add('is-active');
  activeBtn.setAttribute('aria-selected', 'true');
}

/**
 * Smoothly filters cards in the grid
 */
function filterCards(filterValue, gridContainer) {
  const cards = gridContainer.querySelectorAll('.blog-card');
  const isAll = !filterValue || filterValue.toLowerCase() === 'all';

  cards.forEach(card => {
    const cardCategory = card.dataset.category || '';
    const matches = isAll || cardCategory.toLowerCase() === filterValue.toLowerCase();

    if (matches) {
      card.style.display = 'flex';
      // Slight delay to trigger CSS fade-in
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        card.style.pointerEvents = 'auto';
      });
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px) scale(0.97)';
      card.style.pointerEvents = 'none';
      setTimeout(() => {
        if (card.style.opacity === '0') {
          card.style.display = 'none';
        }
      }, 250);
    }
  });
}

/**
 * Scroll reveal observer for elements with .reveal-on-scroll
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

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
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/**
 * Safe HTML escaping
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
