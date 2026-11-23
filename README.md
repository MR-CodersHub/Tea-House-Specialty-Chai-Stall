# Tea House & Specialty Chai Stall Website

An editorial, magazine-style web experience for a premium **Tea House & Specialty Chai Stall**, faithfully reproducing the visual aesthetic, layout composition, typography hierarchy, and organic design language of the high-end reference design.

---

## 1. Technology Requirements (Zero-Dependency Frontend)

Strictly built using:
- **HTML5** & semantic markup
- **CSS3** (CSS custom properties, modern CSS grid, flexbox, smooth curves, animations)
- **Vanilla JavaScript (ES6+)** (Zero frameworks, zero node/npm build tools, modular architecture)
- **Bootstrap 5.3 (CDN)** (Responsive grid & modal utilities)
- **Bootstrap Icons (CDN)** (Minimal vector icons)
- **Google Fonts (CDN)**:
  - *Cormorant Garamond* (Editorial serif headings)
  - *Manrope* (Oversized bold display typography)
  - *DM Sans* (Clean, readable body & navigation)
  - *Caveat* (Editorial script accents)

### Zero Build Tools & Zero Node.js
- Runs directly in any modern web browser or via standard static servers (Live Server, VS Code, Python HTTP server, GitHub Pages, Apache, Nginx).
- No `package.json`, `node_modules`, or compiler required.

---

## 2. Visual Style & Color Palette

- **Primary Background**: Warm ivory / off-white (`#F7F4EA`)
- **Primary Text**: Deep forest green (`#123D2E`)
- **Secondary Green**: Sage green (`#A7B397`)
- **Accent Color**: Terracotta / warm orange (`#C87538`)
- **Secondary Background**: Light beige (`#EAE6D9`)
- **Footer Background**: Deep forest green (`#123D2E`)
- **Full Dark Mode**: Deep midnight tea green (`#0D261C` / `#133327`) with soft cream typography and calibrated contrast.
- **RTL Support**: Full bidirectional support (LTR and RTL) with instant toggle and `localStorage` persistence.

---

## 3. Professional Project File Structure

```text
tea-house/
│
├── index.html                   # Master Home 1 Landing Page
├── home2.html                   # Home 2 – Specialty Chai Stall Experience
├── about.html                   # About Us & Heritage
├── menu.html                    # Handcrafted Chai & Fresh Blends Menu
├── blog.html                    # Tea Journal & Blog
├── contact.html                 # Visit Our Stall & Connect
├── loyalty.html                 # Tea House Loyalty Circle & Rewards
│
├── components/
│   ├── navbar.html              # Clean reference markup for Navbar
│   └── footer.html              # Clean reference markup for Footer
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Global tokens, base resets, buttons, modals & RTL
│   │   ├── navbar.css           # 2-level sticky navigation & mobile drawer
│   │   ├── footer.css           # Organic wave forest green footer
│   │   ├── responsive.css       # Mobile & tablet media queries
│   │   └── pages/               # Page-specific modular stylesheets
│   │       ├── home1.css        # Home 1 section layouts (Hero, Benefits, Special, Blends, Customizer)
│   │       ├── home2.css        # Home 2 specific styles
│   │       ├── about.css        # About page styles
│   │       ├── menu.css         # Menu page styles
│   │       ├── blog.css         # Blog page styles
│   │       ├── contact.css      # Contact page styles
│   │       └── loyalty.css      # Loyalty page styles
│   │
│   ├── js/
│   │   ├── theme.js             # Dark / Light mode toggle with localStorage
│   │   ├── language.js          # RTL / LTR layout direction with localStorage
│   │   ├── navbar.js            # Dynamic reusable navbar renderer & mobile drawer
│   │   ├── footer.js            # Dynamic reusable footer renderer
│   │   ├── main.js              # Shared utilities (toast notification system)
│   │   └── pages/               # Page-specific modular JavaScript
│   │       ├── home1.js         # Home 1 scroll reveal, Chai Customizer, and buttons
│   │       ├── home2.js         # Home 2 interactions
│   │       ├── about.js         # About page interactions
│   │       ├── menu.js          # Menu page interactions
│   │       ├── blog.js          # Blog page interactions
│   │       ├── contact.js       # Contact page interactions
│   │       └── loyalty.js       # Loyalty page interactions
│   │
│   ├── images/
│   │   ├── logo/                # Tea House logo mark
│   │   ├── hero/                # Overhead chai flatlays & commercial tea photography
│   │   ├── benefits/            # Freshly brewed tea glasses & spice bowls
│   │   ├── products/            # Artisanal packages & teapots
│   │   ├── blends/              # Standing signature blend pouches
│   │   ├── ingredients/         # Tea leaves, spices, and pyramid bags
│   │   ├── blog/                # Blog post imagery
│   │   ├── decorations/         # Leaf flourishes and curved ribbons
│   │   ├── home1-header.png     # Reference header asset (preserved)
│   │   ├── home1-2s.png         # Benefits section almond/botanical asset
│   │   └── home1-s3.png         # Transparent cutout product arrangement
│   │
│   └── icons/                   # Vector icon assets
│
└── README.md
```

---

## 4. Home 1 Sections & Reference Fidelity

1. **Top Information & Main Navigation Bar**:
   - Two-level sticky navbar with business hours, address, quote, and social links.
   - 7 primary navigation links (`Home 1`, `Home 2`, `About Us`, `Menu`, `Blog`, `Contact`, `Loyalty`).
   - Active page highlight (`data-current-page`), Dark/Light mode toggle, RTL/LTR toggle, Profile dropdown with Login/Signup modals.
   - Accessible offcanvas mobile navigation drawer with auto scroll-lock.
2. **Hero Section (Exact Reference Match)**:
   - Left side: "A MORE NATURAL YOU", bold headline **"PURE CHAI."**, supporting text, and terracotta rounded CTA button.
   - Flowing curved sage-green ribbon shape and vertical editorial label *"TEA FOR A BETTER YOU"*.
   - Right side: Overhead commercial tea still-life photography (`hero-tea.png`) seamlessly sitting on warm ivory background without artificial cards.
   - Right margin: Vertical editorial label *"SIP · NOURISH · REPEAT"*.
3. **Benefits Section (Naturally Better Chai)**:
   - 3-column editorial grid: freshly brewed tea glass on left, serif headline *"Naturally Better Chai"* with 3 circular icon benefit items, and almonds/spices bowl with handwritten script *"Plants · People · Better Days"* on right.
4. **Featured Special (Oversized Typographic Showcase)**:
   - Giant centered background text: **"AUTHENTIC"** in muted sage green.
   - Flowing terracotta decorative wave line across lower section.
   - Left column: *"Featured Special"*, *"Signature Masala Chai"*, description, price (₹149), and *"Shop Now"* button.
   - Center-right column: Transparent cutout product arrangement (`home1-s3.png`) with ceramic teapot and artisan pouch.
   - Vertical side labels *"FROM NATURE TO YOUR CUP"* and *"REAL TEA REAL GOOD LIVING"*.
5. **Signature Blends Section**:
   - 3 distinct standing product packages side-by-side: *Ginger Elaichi Chai* (Sage Green), *Classic Masala Chai* (Deep Forest Green), and *Golden Turmeric Chai* (Terracotta Orange) with interactive "+ Add to Tray" buttons.
6. **Create Your Perfect Chai (Interactive Customizer)**:
   - 3-step horizontal workflow: *1. Pick a Base*, *2. Add a Flavour*, *3. Choose Your Style*, with circular ingredient previews.
   - "Good Things Steep Here" script accent and interactive Chai Studio Modal with live blend summary, dynamic price calculator, and toast notification.
7. **The Art of Making Chai (New Editorial Section)**:
   - Asymmetrical editorial layout with left-side organic tea preparation still-life and right-side interactive 3-stage progression.
   - Large decorative background numerals (`01`, `02`, `03`), continuous vertical timeline indicator, and dynamic image switching on hover/click.
8. **Final Premium CTA Section**:
   - Deep forest green curved card immediately before the footer.
   - Headline *"Make Every Moment a Chai Moment."*, supporting text, subtle botanical leaf flourish, and dual CTAs (*"Explore Our Menu"* and *"Join Our Loyalty Club"*).
9. **Organic Wave Footer**:
   - Deep forest green (`#123D2E`) background with organic scalloped wave SVG header.
   - Brand story, navigation columns, newsletter signup, and business credentials.
