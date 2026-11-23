/**
 * TEA HOUSE & SPECIALTY CHAI — BLOG DATA STORE (blog-data.js)
 * Central structured data store for all Tea House Journal articles.
 * Contains 6 complete, original articles with full bodies, subheadings,
 * rich paragraphs, pull quotes, lists, author bios, and related suggestions.
 */

const BLOG_POSTS = [
  {
    id: 'slow-morning',
    slug: 'slow-morning',
    title: 'The Beauty of a Slow Morning: Starting Your Day With Chai',
    category: 'Tea Rituals',
    shortDesc: 'Discover how a simple morning cup of chai can turn an ordinary start into a peaceful and meaningful daily ritual.',
    coverImage: 'assets/images/blog/slow-morning.jpg',
    date: 'October 18, 2026',
    readTime: '5 min read',
    author: {
      name: 'Tea House Editorial Team',
      role: 'Specialty Tea Curators & Storytellers',
      image: 'assets/images/team/team-member-01.jpg',
      bio: 'Dedicated to exploring traditional brewing traditions, culinary heritage, and the restorative power of mindful tea rituals.'
    },
    relatedIds: ['tea-traditions', 'perfect-chai', 'moments-worth-sharing'],
    tags: ['Tea Rituals', 'Mindfulness', 'Morning Routine', 'Slow Living'],
    content: {
      intro: 'In a world that constantly encourages us to move faster, there is something deeply quietly revolutionary about choosing to slow down before the morning rushes in. Long before emails arrive or schedules demand our attention, the simple act of brewing a fresh pot of chai offers an invitation to be entirely present.',
      sections: [
        {
          heading: 'Creating Space Before the Day Begins',
          paragraphs: [
            'A slow morning does not require hours of quiet isolation; it requires only intentionality. When you step up to the stove, crush green cardamom pods between your palms, and listen to the gentle crackle of cinnamon bark entering warm milk, your senses immediately anchor to the present moment.',
            'Unlike push-button beverages prepared in haste, authentic chai demands your gentle attention. You cannot leave it unattended while it simmers to a golden froth. In this brief window of watchful patience, you give your mind room to wake up gently, free from outside pressures.'
          ],
          quote: 'Chai is more than a drink. It is a quiet promise you make to yourself that your morning belongs to you first.'
        },
        {
          heading: 'The Familiar Comfort of Warm Spices',
          paragraphs: [
            'There is a comforting chemistry in traditional morning spices. The gentle sharpness of fresh ginger awakens the senses, while crushed green cardamom brings a soft, fragrant warmth that eases tension. Paired with robust single-origin Assam orthodox leaves and whole milk, the result is a cup that feels both grounding and revitalizing.',
            'Each family and tea stall has its own cherished balance. Finding your personal morning proportion—whether ginger-forward for crisp winter days or cardamom-accented for calm clarity—turns breakfast into a moment of genuine self-care.'
          ],
          list: [
            'Light your flame on medium-low and let the crushed spices release their essential oils naturally.',
            'Watch the steam rise and take three deep breaths before reaching for your phone or device.',
            'Hold your ceramic cup with both hands to feel the soothing warmth before taking your first sip.'
          ]
        },
        {
          heading: 'Carrying the Calm Forward',
          paragraphs: [
            'When you begin your day with an unhurried ritual, the peace you cultivate does not end with the final sip. It stays with you through crowded commutes, intense meetings, and busy afternoons—acting as a quiet reservoir of steady calm.',
            'Tomorrow morning, try setting your alarm just ten minutes earlier. Give yourself the gift of brewing from scratch. You might just find that the most meaningful part of your day happened before the world even started asking for your time.'
          ]
        }
      ],
      conclusion: 'A slow morning is a small sanctuary we build with hot water, crushed spices, and intentional presence. Treat yourself to the warmth you deserve.'
    }
  },
  {
    id: 'tea-traditions',
    slug: 'tea-traditions',
    title: 'A Journey Through Tea Traditions and Timeless Flavours',
    category: 'Tea Culture',
    shortDesc: 'Explore the traditions, familiar flavours, and shared moments that make tea an important part of everyday life.',
    coverImage: 'assets/images/blog/tea-traditions.jpg',
    date: 'October 24, 2026',
    readTime: '6 min read',
    author: {
      name: 'Tea House Editorial Team',
      role: 'Specialty Tea Curators & Storytellers',
      image: 'assets/images/team/team-member-02.jpg',
      bio: 'Documenting the living history, regional heritage, and generational recipes of artisanal chai stalls.'
    },
    relatedIds: ['slow-morning', 'chai-flavours', 'moments-worth-sharing'],
    tags: ['Tea Culture', 'Heritage', 'Chai Wallahs', 'Traditions'],
    content: {
      intro: 'From bustling street corners in Mumbai to quiet mountain verandas in Darjeeling, tea is woven into the very fabric of everyday life. It is the first greeting offered to a guest, the natural punctuation mark between working hours, and the quiet comfort that welcomes travelers home.',
      sections: [
        {
          heading: 'The Social Tapestry of the Chai Stall',
          paragraphs: [
            'In every town and neighbourhood, the local chai stall—or tapri—serves as a democratic meeting ground. Here, professors, construction workers, artists, and neighbours stand shoulder-to-shoulder, waiting for the steaming kettle to pour into traditional cutting glasses.',
            'The rhythm is hypnotic: the brass ladle rising high into the air to aerate the hot brew, the rhythmic clink of glasses, and the warm aroma of ginger and clove drifting into the morning breeze. It is a space where social barriers dissolve into shared conversation.'
          ],
          quote: 'At the chai stall, no one is a stranger for long. A shared glass bridges differences with quiet ease.'
        },
        {
          heading: 'Regional Variations Across the Subcontinent',
          paragraphs: [
            'What makes chai so endlessly fascinating is its refusal to be standardized. Every region brings its native flora, climate, and temperament to the preparation:',
            'In the Kashmir valley, delicate green tea leaves are steeped in samovars with green cardamom, crushed almonds, and saffron to make pink Kashmiri Kahwa. In Gujarat, lemongrass (haree chai) is simmered with milk for an uplifting herbal aroma. In Kolkata, heavy earthen bhar cups impart an unmistakable mineral richness to dark Assam tea.'
          ],
          list: [
            'Kashmiri Kahwa: Saffron, green cardamom, whole almonds, and spring water.',
            'Cutting Chai: Concentrated Assam CTC simmered twice with ginger and heavy milk.',
            'Sulaimani: Spiced black tea with lemon, mint, and a touch of jaggery.',
            'Masala Chai: Balanced blend of cinnamon, cloves, black pepper, and cardamom.'
          ]
        },
        {
          heading: 'Honouring the Past in the Modern Cup',
          paragraphs: [
            'In contemporary tea houses, preserving these traditions is not about nostalgic repetition—it is about honouring the care, patience, and community spirit embedded in every classic preparation.',
            'When we choose whole spices over artificial powders and slow simmer over instant shortcuts, we keep a centuries-old culinary lineage alive, passing down warmth from one generation to the next.'
          ]
        }
      ],
      conclusion: 'Every cup of tea carries the heritage of the soil it grew in and the care of hands that brewed it. Celebrate that timeless story in every sip.'
    }
  },
  {
    id: 'perfect-chai',
    slug: 'perfect-chai',
    title: 'The Art of Brewing the Perfect Cup of Chai',
    category: 'Chai Preparation',
    shortDesc: 'Discover the little details behind a comforting cup, from selecting ingredients to finding the right balance of flavours.',
    coverImage: 'assets/images/blog/perfect-chai.jpg',
    date: 'November 02, 2026',
    readTime: '7 min read',
    author: {
      name: 'Tea House Editorial Team',
      role: 'Specialty Tea Curators & Storytellers',
      image: 'assets/images/team/team-member-02.jpg',
      bio: 'Sharing culinary wisdom and precise steeping guidelines honed over years of artisanal tea service.'
    },
    relatedIds: ['slow-morning', 'chai-flavours', 'chai-pairings'],
    tags: ['Chai Preparation', 'Brewing Guide', 'Spices', 'Artisan Skills'],
    content: {
      intro: 'Brewing a truly memorable cup of chai is equal parts culinary science and patient meditation. While the ingredients are humble—water, tea, milk, spices, and sweetener—the secret to excellence lies in the order, temperature, and timing of each step.',
      sections: [
        {
          heading: 'Selecting Your Foundation: Water, Tea, and Milk',
          paragraphs: [
            'Start with cold, filtered water. Fresh water holds higher oxygen levels, which helps extract the rich tannins and aromatics from tea leaves. The tea itself should be a balanced blend of full-bodied Assam CTC (Crush, Tear, Curl) for strength and color, paired with a pinch of orthodox leaves for nuanced floral top-notes.',
            'For milk, whole dairy milk creates the signature velvety body that emulsifies with the tea oils. If using plant-based alternatives, oat milk and cashew milk provide the creaminess required to balance robust spices without curdling.'
          ]
        },
        {
          heading: 'The Sacred Spice Trinity',
          paragraphs: [
            'Never use pre-ground powdered spice mixes if you can avoid them; ground spices lose their volatile essential oils within days. Freshly crushing whole spices immediately before brewing releases aromas that simply cannot be replicated.',
            'A classic balance begins with three pillars: fresh ginger for spicy heat, green cardamom for sweet aromatic floral notes, and a small quill of cinnamon for mellow richness. A single clove or a cracked black peppercorn can be added when you desire deeper warmth.'
          ],
          quote: 'Freshly crushed spices release their essential oils directly into simmering water, capturing the purest soul of the harvest.'
        },
        {
          heading: 'Step-by-Step Steeping Guidelines',
          paragraphs: [
            'Follow this time-honoured technique to achieve the signature creamy, golden-amber brew:',
            'First, bring your water and crushed spices to a rolling boil for 2 to 3 minutes. This allows the tough plant cell walls of the spices to soften and release their flavours into the water base. Only then do you add the tea leaves, boiling for another 2 minutes until the liquid turns a deep mahogany.'
          ],
          list: [
            'Water to Milk Ratio: 1 part water to 1 part milk (for rich street style) or 1.5 parts water to 1 part milk (for a lighter morning cup).',
            'Infusion Time: Simmer spices in water for 3 minutes before adding tea leaves.',
            'The Rising Froth: After adding milk, let the pot rise to a rolling boil three times, lowering the heat each time.',
            'The High Pour: Strain from a height of 10 to 12 inches to aerate the milk and build a silky microfoam.'
          ]
        },
        {
          heading: 'Finding Your Personal Sweet Spot',
          paragraphs: [
            'Sweetener plays an active role in how spices are perceived on your palate. Natural raw cane sugar (khandsari) or jaggery (gur) highlights the earthy undertones of ginger and clove, while pure wildflower honey adds floral sweetness. Add sweetener toward the end of brewing so its delicate notes are not scorched.'
          ]
        }
      ],
      conclusion: 'Patience is the unseen ingredient in every great cup of chai. Allow the flavours to slow-simmer, and the reward will be unforgettable.'
    }
  },
  {
    id: 'chai-flavours',
    slug: 'chai-flavours',
    title: 'Beyond the Classics: Discovering New Chai Flavours',
    category: 'Flavours & Blends',
    shortDesc: 'From traditional favourites to creative specialty blends, discover different ways to enjoy the familiar warmth of chai.',
    coverImage: 'assets/images/blog/chai-flavours.jpg',
    date: 'November 09, 2026',
    readTime: '6 min read',
    author: {
      name: 'Tea House Editorial Team',
      role: 'Specialty Tea Curators & Storytellers',
      image: 'assets/images/team/team-member-04.jpg',
      bio: 'Blending contemporary botanical inspirations with time-tested regional spices.'
    },
    relatedIds: ['perfect-chai', 'tea-traditions', 'chai-pairings'],
    tags: ['Flavours & Blends', 'Specialty Chai', 'Saffron', 'Iced Chai'],
    content: {
      intro: 'While classic masala chai will always hold a revered place in our hearts, the world of specialty chai offers a vibrant canvas for creative flavour exploration. By introducing delicate botanicals, rich natural extracts, and chilled preparations, chai evolves into an all-day sensory experience.',
      sections: [
        {
          heading: 'The Opulence of Royal Saffron & Turmeric',
          paragraphs: [
            'In ancient court kitchens, chai was reserved as a luxurious restorative elixir. Saffron threads—hand-harvested from purple crocus flowers—impart a luminous golden hue and an unmistakable honey-hay fragrance that elevates milk tea into an opulent celebration.',
            'When blended with fresh golden turmeric, green cardamom, and a scattering of crushed pistachios, saffron chai becomes both visually breathtaking and deeply restorative.'
          ],
          quote: 'Botanicals like saffron and Damask rose transform the earthy warmth of chai into a refined, perfumed celebration.'
        },
        {
          heading: 'Floral Elegance: Damask Rose & Vanilla Bean',
          paragraphs: [
            'For those who prefer a softer, more delicate profile, floral accents create an unexpected romance with tea. Sun-dried pink Damask rose petals introduce subtle Turkish delight sweetness without overpowering the briskness of black tea.',
            'Similarly, whole split Madagascar vanilla beans infuse the dairy milk with creamy, buttery warmth, smoothing out the tannins and creating a dessert-like indulgence that requires little to no added sugar.'
          ]
        },
        {
          heading: 'The Rise of Chilled and Iced Chai',
          paragraphs: [
            'Who says chai belongs only to brisk winter mornings? Iced chai has emerged as a beloved summer sensation. To achieve the perfect iced brew, tea must be prepared double-strength to withstand the melting ice without diluting its spice backbone.',
            'Shaken vigorously over ice with sweetened condensed milk or cold-frothed oat milk, iced masala chai delivers all the familiar comforting spices with an exhilarating, crisp temperature contrast.'
          ],
          list: [
            'Iced Cardamom & Mint: Shaken over crushed ice with fresh garden mint.',
            'Golden Saffron Cream: Chilled saffron tea layered over cold-whipped cream.',
            'Vanilla Cold Brew Chai: Steeped cold for 12 hours for a silky, low-acid finish.'
          ]
        }
      ],
      conclusion: 'Do not hesitate to venture beyond your usual brew. Exploring new flavour profiles opens fresh doors to appreciation for this timeless craft.'
    }
  },
  {
    id: 'chai-pairings',
    slug: 'chai-pairings',
    title: 'Little Treats That Make Every Chai Moment Better',
    category: 'Food & Pairings',
    shortDesc: 'Discover delightful sweet and savoury companions that make a simple tea break even more enjoyable.',
    coverImage: 'assets/images/blog/chai-pairings.jpg',
    date: 'November 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Tea House Editorial Team',
      role: 'Specialty Tea Curators & Storytellers',
      image: 'assets/images/team/team-member-03.jpg',
      bio: 'Curating the culinary harmonies between freshly baked teatime treats and specialty infusions.'
    },
    relatedIds: ['perfect-chai', 'chai-flavours', 'moments-worth-sharing'],
    tags: ['Food & Pairings', 'Tea Time', 'Bakery', 'Savoury Bites'],
    content: {
      intro: 'In tea-house culture across the globe, tea is rarely consumed in isolation. The experience is elevated when paired with a thoughtful bite—a crumbly butter cookie dipped into hot milk, or a hot, flaky savoury pastry that counters the sweetness of the brew.',
      sections: [
        {
          heading: 'The Sacred Art of the Tea Dip',
          paragraphs: [
            'There is an unspoken ritual shared by millions every afternoon: the careful, timed dip of a crisp biscuit into hot chai. Done with precision, the cookie absorbs the fragrant spiced tea without crumbling into the cup, melting on the tongue in a burst of butter, sugar, and cardamon warmth.',
            'Classic Osmania butter cookies, lightly salted nankhatai, and cardamom shortbread are engineered for this exact purpose—firm enough to hold their shape, but absorbent enough to capture the tea\'s soul.'
          ],
          quote: 'The right companion treat balances the bold spices of chai, creating harmony between crisp texture and hot brew.'
        },
        {
          heading: 'Sweet Complements: Spiced Teacakes',
          paragraphs: [
            'When you want a slower, more generous afternoon pause, a slice of cardamom-spiced pound cake or banana walnut loaf makes an impeccable companion. The moist crumb of the cake absorbs the tea\'s warmth, while subtle citrus or cinnamon in the sponge mirrors the aromatics in the pot.'
          ]
        },
        {
          heading: 'The Savoury Counterpoint: Puffs & Samosas',
          paragraphs: [
            'While sweet pairings are beloved, many chai purists argue that the ultimate pairing is savoury. The sharp spices in a golden, crispy mini samosa or the buttery, flaky layers of a vegetable puff create an exhilarating contrast with the rich, milky sweetness of a hot cup.',
            'The contrast of textures—crunchy pastry followed by smooth, hot tea—refreshes the palate with every alternating bite and sip.'
          ],
          list: [
            'Crisp Mini Samosas with mint-coriander chutney + Kadak Adrak Chai.',
            'Flaky Vegetable Puff + Classic Masala Chai.',
            'Cardamom Nankhatai or Butter Cookies + Royal Saffron Chai.',
            'Lemon Pound Cake slice + Fragrant Kashmiri Kahwa.'
          ]
        }
      ],
      conclusion: 'The next time you brew a fresh pot, set out a little plate of something lovely on the side. The combination of flavours will make the ordinary extraordinary.'
    }
  },
  {
    id: 'moments-worth-sharing',
    slug: 'moments-worth-sharing',
    title: 'More Than a Drink: Creating Moments Worth Sharing',
    category: 'Tea House Lifestyle',
    shortDesc: 'Discover how a cup of chai can bring people together, create conversations, and make everyday moments memorable.',
    coverImage: 'assets/images/blog/moments-worth-sharing.jpg',
    date: 'November 21, 2026',
    readTime: '5 min read',
    author: {
      name: 'Tea House Editorial Team',
      role: 'Specialty Tea Curators & Storytellers',
      image: 'assets/images/team/team-member-01.jpg',
      bio: 'Championing community gatherings, unhurried hospitality, and the art of human connection.'
    },
    relatedIds: ['slow-morning', 'tea-traditions', 'chai-pairings'],
    tags: ['Tea House Lifestyle', 'Community', 'Human Connection', 'Warmth'],
    content: {
      intro: 'When someone asks you to have a cup of chai, they are rarely talking about quenching physical thirst. They are inviting you into a shared pause—a space where clocks stop ticking for twenty minutes, guard drops, and honest conversation begins.',
      sections: [
        {
          heading: 'The Universal Catalyst for Conversation',
          paragraphs: [
            'Think back to the most meaningful conversations of your life. More often than not, there was a warm mug resting between your hands. Holding hot tea forces a natural cadence: you pause between thoughts to blow on the surface, you take deliberate sips as you listen, and you remain seated until the cup is empty.',
            'In an era dominated by rapid digital messages and fragmented attention, sharing tea requires physical presence. It is a slow, tangible social anchor that creates safety and comfort.'
          ],
          quote: 'Chai is an open invitation to put away our devices, look one another in the eyes, and say: I have time for you.'
        },
        {
          heading: 'Designing Spaces for Belonging',
          paragraphs: [
            'When we conceptualized the Tea House, our guiding question was simple: how do we create a physical space that feels like the warm living room of an old friend? The answer lay in warm ivory lighting, natural wooden tables, soothing organic greenery, and the gentle, reassuring sound of simmering pots.',
            'Whether friends are reuniting after months apart, coworkers are collaborating over an afternoon idea, or someone is reading a solitary book in a sunlit corner, the atmosphere encourages everyone to exhale.'
          ]
        },
        {
          heading: 'Creating Your Own Shared Moments',
          paragraphs: [
            'You do not need an artisanal café to cultivate this connection. You can bring this spirit into your home or workspace with simple gestures:',
            'Brew a pot large enough to share. Pour it into small earthen cups for your colleagues or family. Notice how the simple question—"Would you like half a cup?"—immediately softens the room.'
          ],
          list: [
            'Host a screen-free afternoon tea hour with friends on weekends.',
            'Keep an extra tin of whole leaf chai at your desk to share with a colleague.',
            'Surprise someone you care about by preparing their favourite blend without being asked.'
          ]
        }
      ],
      conclusion: 'In the end, the tea is merely the vessel. What truly fills the cup is the warmth, laughter, and human connection we choose to pour into it.'
    }
  }
];

// Helper functions for safely accessing blog data
function getAllBlogPosts() {
  return BLOG_POSTS;
}

function getBlogPostBySlug(slug) {
  if (!slug) return BLOG_POSTS[0];
  var found = BLOG_POSTS.find(function (p) {
    return p.slug === slug || p.id === slug;
  });
  return found || BLOG_POSTS[0];
}

function getRelatedPosts(currentSlug) {
  var post = getBlogPostBySlug(currentSlug);
  if (!post || !post.relatedIds) return BLOG_POSTS.slice(0, 3);
  return BLOG_POSTS.filter(function (p) {
    return post.relatedIds.includes(p.slug) && p.slug !== currentSlug;
  }).slice(0, 3);
}

function getCategoriesWithCount() {
  var counts = {};
  BLOG_POSTS.forEach(function (p) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
}

// Global window exposure & CommonJS export for robustness
if (typeof window !== 'undefined') {
  window.BLOG_POSTS = BLOG_POSTS;
  window.getAllBlogPosts = getAllBlogPosts;
  window.getBlogPostBySlug = getBlogPostBySlug;
  window.getRelatedPosts = getRelatedPosts;
  window.getCategoriesWithCount = getCategoriesWithCount;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BLOG_POSTS: BLOG_POSTS,
    getAllBlogPosts: getAllBlogPosts,
    getBlogPostBySlug: getBlogPostBySlug,
    getRelatedPosts: getRelatedPosts,
    getCategoriesWithCount: getCategoriesWithCount
  };
}

