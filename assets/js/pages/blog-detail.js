/**
 * TEA HOUSE & SPECIALTY CHAI — BLOG DETAIL PAGE SCRIPT (blog-detail.js)
 * Dynamically hydrates blog-detail.html from URL query param ?post=[slug]
 * using the structured data in assets/js/data/blog-data.js.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBlogDetailPage();
});

function initBlogDetailPage() {
  if (typeof getBlogPostBySlug !== 'function') {
    console.error('blog-data.js must be loaded before blog-detail.js');
    return;
  }

  // Parse query parameter: ?post=[slug]
  const urlParams = new URLSearchParams(window.location.search);
  const slugParam = urlParams.get('post');
  const post = getBlogPostBySlug(slugParam);

  if (!post) {
    console.error('No article found for slug:', slugParam);
    return;
  }

  // 1. Update Document Title & Meta
  document.title = `${post.title} | The Tea House Journal`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && post.shortDesc) {
    metaDesc.setAttribute('content', post.shortDesc);
  }

  // 2. Hydrate Header & Meta Bar
  hydrateArticleHeader(post);

  // 3. Hydrate Featured Cover Image
  hydrateArticleCover(post);

  // 4. Hydrate Structured Article Body
  hydrateArticleBody(post);

  // 5. Hydrate Author Profile Card
  hydrateAuthorCard(post);

  // 6. Hydrate Sidebar Widgets
  hydrateSidebarWidgets(post);

  // 7. Hydrate Related Stories Grid
  hydrateRelatedStories(post);
}

/**
 * Hydrates header elements: title, category, intro, date, read time, author
 */
function hydrateArticleHeader(post) {
  const categoryBadge = document.getElementById('articleCategoryBadge');
  const categoryBreadcrumb = document.getElementById('articleCategoryBreadcrumb');
  const titleEl = document.getElementById('articleTitle');
  const introEl = document.getElementById('articleIntro');
  const authorImg = document.getElementById('articleAuthorImg');
  const authorName = document.getElementById('articleAuthorName');
  const dateEl = document.getElementById('articleDate');
  const readTimeEl = document.getElementById('articleReadTime');

  if (categoryBadge) categoryBadge.textContent = post.category;
  if (categoryBreadcrumb) categoryBreadcrumb.textContent = post.category;
  if (titleEl) titleEl.textContent = post.title;
  if (introEl) introEl.textContent = post.shortDesc;

  if (authorImg && post.author) {
    authorImg.src = post.author.image;
    authorImg.alt = post.author.name;
  }
  if (authorName && post.author) authorName.textContent = post.author.name;
  if (dateEl) dateEl.textContent = post.date;
  if (readTimeEl) readTimeEl.textContent = post.readTime;
}

/**
 * Sets the main cover image
 */
function hydrateArticleCover(post) {
  const coverImg = document.getElementById('articleCoverImg');
  if (coverImg) {
    coverImg.src = post.coverImage;
    coverImg.alt = post.title;
  }
}

/**
 * Safely constructs and renders structured article content
 */
function hydrateArticleBody(post) {
  const bodyContainer = document.getElementById('articleBodyContainer');
  if (!bodyContainer || !post.content) return;

  bodyContainer.innerHTML = '';

  // Lead Introduction Paragraph
  if (post.content.intro) {
    const leadP = document.createElement('p');
    leadP.className = 'article-lead-p';
    leadP.textContent = post.content.intro;
    bodyContainer.appendChild(leadP);
  }

  // Structured Sections
  if (Array.isArray(post.content.sections)) {
    post.content.sections.forEach(section => {
      const sectionBlock = document.createElement('section');
      sectionBlock.className = 'article-section-block';

      if (section.heading) {
        const h2 = document.createElement('h2');
        h2.className = 'article-section-heading';
        h2.textContent = section.heading;
        sectionBlock.appendChild(h2);
      }

      if (Array.isArray(section.paragraphs)) {
        section.paragraphs.forEach(pText => {
          const p = document.createElement('p');
          p.className = 'article-paragraph';
          p.textContent = pText;
          sectionBlock.appendChild(p);
        });
      }

      if (section.quote) {
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'article-pull-quote';
        const quoteP = document.createElement('p');
        quoteP.textContent = `"${section.quote}"`;
        blockquote.appendChild(quoteP);
        sectionBlock.appendChild(blockquote);
      }

      if (Array.isArray(section.list) && section.list.length) {
        const ul = document.createElement('ul');
        ul.className = 'article-key-list';
        section.list.forEach(listItem => {
          const li = document.createElement('li');
          li.innerHTML = `
            <i class="bi bi-cup-hot" aria-hidden="true"></i>
            <span>${escapeHtml(listItem)}</span>
          `;
          ul.appendChild(li);
        });
        sectionBlock.appendChild(ul);
      }

      bodyContainer.appendChild(sectionBlock);
    });
  }

  // Conclusion Box
  if (post.content.conclusion) {
    const conclusionBox = document.createElement('div');
    conclusionBox.className = 'article-conclusion-box';
    conclusionBox.innerHTML = `
      <div class="article-conclusion-icon">
        <i class="bi bi-heart" aria-hidden="true"></i>
      </div>
      <p>${escapeHtml(post.content.conclusion)}</p>
    `;
    bodyContainer.appendChild(conclusionBox);
  }
}

/**
 * Hydrates author card in the bio section
 */
function hydrateAuthorCard(post) {
  if (!post.author) return;

  const authorCardImg = document.getElementById('authorCardImg');
  const authorCardRole = document.getElementById('authorCardRole');
  const authorCardName = document.getElementById('authorCardName');
  const authorCardBio = document.getElementById('authorCardBio');

  if (authorCardImg) {
    authorCardImg.src = post.author.image;
    authorCardImg.alt = post.author.name;
  }
  if (authorCardRole) authorCardRole.textContent = post.author.role;
  if (authorCardName) authorCardName.textContent = post.author.name;
  if (authorCardBio) authorCardBio.textContent = post.author.bio;
}

/**
 * Hydrates sidebar categories with counts and recent stories
 */
function hydrateSidebarWidgets(post) {
  // 1. Categories Widget
  const catListContainer = document.getElementById('sidebarCategoryList');
  if (catListContainer && typeof getCategoriesWithCount === 'function') {
    const catCounts = getCategoriesWithCount();
    catListContainer.innerHTML = '';

    Object.keys(catCounts).forEach(cat => {
      const isCurrent = cat.toLowerCase() === post.category.toLowerCase();
      const li = document.createElement('li');
      li.className = `detail-cat-item ${isCurrent ? 'is-current' : ''}`;
      li.innerHTML = `
        <a href="blog.html?category=${encodeURIComponent(cat)}">
          <span>${escapeHtml(cat)}</span>
          <span class="detail-cat-count">${catCounts[cat]}</span>
        </a>
      `;
      catListContainer.appendChild(li);
    });
  }

  // 2. Recent Stories Widget
  const recentContainer = document.getElementById('sidebarRecentList');
  if (recentContainer && typeof getAllBlogPosts === 'function') {
    const allPosts = getAllBlogPosts();
    // Exclude current article, take top 4
    const recentPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 4);

    recentContainer.innerHTML = '';
    recentPosts.forEach(recentItem => {
      const itemEl = document.createElement('a');
      itemEl.href = `blog-detail.html?post=${encodeURIComponent(recentItem.slug)}`;
      itemEl.className = 'detail-recent-item';
      itemEl.innerHTML = `
        <div class="detail-recent-thumb">
          <img src="${escapeHtml(recentItem.coverImage)}" alt="${escapeHtml(recentItem.title)}" loading="lazy">
        </div>
        <div class="detail-recent-info">
          <span class="detail-recent-category">${escapeHtml(recentItem.category)}</span>
          <h5 class="detail-recent-title">${escapeHtml(recentItem.title)}</h5>
          <span class="detail-recent-date">${escapeHtml(recentItem.date)}</span>
        </div>
      `;
      recentContainer.appendChild(itemEl);
    });
  }
}

/**
 * Hydrates related stories cards at the bottom of the article
 */
function hydrateRelatedStories(post) {
  const relatedGrid = document.getElementById('relatedGrid');
  if (!relatedGrid || typeof getRelatedPosts !== 'function') return;

  const related = getRelatedPosts(post.slug);
  if (!related || !related.length) return;

  relatedGrid.innerHTML = '';
  related.forEach((relPost, idx) => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
      <div class="blog-card-media">
        <img src="${escapeHtml(relPost.coverImage)}"
             alt="${escapeHtml(relPost.title)}"
             class="blog-card-img"
             loading="lazy">
        <span class="blog-card-category">${escapeHtml(relPost.category)}</span>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <i class="bi bi-calendar3" aria-hidden="true"></i>
          <span>${escapeHtml(relPost.date)}</span>
          <span class="blog-card-dot" aria-hidden="true">•</span>
          <i class="bi bi-clock" aria-hidden="true"></i>
          <span>${escapeHtml(relPost.readTime)}</span>
        </div>
        <h3 class="blog-card-title">
          <a href="blog-detail.html?post=${encodeURIComponent(relPost.slug)}" class="stretched-link-custom">
            ${escapeHtml(relPost.title)}
          </a>
        </h3>
        <p class="blog-card-desc">
          ${escapeHtml(relPost.shortDesc)}
        </p>
        <div class="blog-card-footer">
          <a href="blog-detail.html?post=${encodeURIComponent(relPost.slug)}" class="blog-card-link">
            <span>Read Story</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    `;
    relatedGrid.appendChild(card);
  });
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
