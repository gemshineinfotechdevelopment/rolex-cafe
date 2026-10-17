const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. :root variables
const rootRegex = /:root\s*\{[\s\S]*?--shadow-hover:[^;]+;\s*\}/;

const rootReplacement = `:root {
  /* Aesthetic Dark Cream & Burnished Gold System */
  --color-canvas: #DDD0BC;             /* Aesthetic warm dark cream canvas */
  --color-canvas-subtle: #E8DECC;      /* Subtle lighter toasted cream surface */
  --color-canvas-alt: #D4C5AF;         /* Deep toasted cream accent surface */
  --color-surface: #F7F1E6;            /* Warm soft cream card surface */
  --color-surface-hover: #EFE7DA;      /* Elevated card hover surface */
  --color-border-warm: rgba(168, 120, 32, 0.25);
  --color-border-subtle: rgba(168, 120, 32, 0.14);
  
  /* Text Tones (Deep roasted espresso & warm cocoa for maximum elegance & readability) */
  --color-espresso: #24150E;           /* Deep roasted espresso for crisp headings */
  --color-mocha: #523F34;              /* Warm gentle cocoa for body copy */
  --color-sand: #766355;               /* Muted warm taupe for captions & metadata */
  
  /* Antique Burnished Gold */
  --color-gold: #A87520;               /* Classic burnished gold */
  --color-gold-light: #C58F2E;         /* Warm luminous gold */
  --color-gold-dark: #875C14;          /* Deep bronze gold */
  --color-gold-glow: rgba(168, 120, 32, 0.25);
  --color-gold-subtle: rgba(168, 120, 32, 0.1);

  --color-lavender: #A87520;
  --color-lavender-light: #C58F2E;
  --color-lavender-dark: #875C14;
  --color-lavender-glow: rgba(168, 120, 32, 0.25);
  --color-lavender-subtle: rgba(168, 120, 32, 0.1);

  /* Radiant Theme Gradients */
  --gradient-radiant: linear-gradient(135deg, #C58F2E 0%, #A87520 100%);
  --gradient-radiant-hover: linear-gradient(135deg, #D49D3A 0%, #946517 100%);
  --gradient-gold: linear-gradient(135deg, #C58F2E 0%, #A87520 100%);
  --gradient-headline: linear-gradient(135deg, #24150E 0%, #462B1D 50%, #A87520 100%);

  /* Theme Aliases */
  --color-caramel: var(--color-gold);
  --color-caramel-hover: var(--color-gold-dark);
  --color-caramel-glow: var(--color-gold-glow);
  --color-caramel-subtle: var(--color-gold-subtle);
  
  --color-burgundy: var(--color-gold);
  --color-burgundy-dark: var(--color-espresso);
  --color-burgundy-deep: var(--color-canvas);
  
  --color-copper: var(--color-gold);
  --color-copper-hover: var(--color-gold-dark);
  --color-copper-glow: var(--color-gold-glow);
  --color-copper-subtle: var(--color-gold-subtle);
  
  --color-cream: #24150E;
  --color-cream-muted: #523F34;
  --color-cream-dim: #766355;
  --color-charcoal: var(--color-surface);
  --color-charcoal-light: var(--color-canvas-subtle);

  /* Indian Veg/Non-Veg Indicators */
  --color-veg: #16a34a;
  --color-nonveg: #dc2626;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-accent: 'Playfair Display', Georgia, serif;

  /* Spacing & Transitions */
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --shadow-warm: 0 10px 30px -5px rgba(70, 45, 25, 0.08);
  --shadow-card: 0 12px 32px -6px rgba(70, 45, 25, 0.09);
  --shadow-hover: 0 20px 45px -8px rgba(168, 120, 32, 0.25);
}`;

css = css.replace(rootRegex, rootReplacement);

// 2. body
const bodyRegex = /body\s*\{[\s\S]*?background-attachment:\s*fixed;\s*\}/;
const bodyReplacement = `body {
  font-family: var(--font-body);
  background-color: #DDD0BC;
  color: var(--color-mocha);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(168, 120, 32, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 85% 65%, rgba(168, 120, 32, 0.09) 0%, transparent 45%),
    linear-gradient(180deg, #DDD0BC 0%, #E4D8C5 50%, #D8CABB 100%);
  background-attachment: fixed;
}`;

css = css.replace(bodyRegex, bodyReplacement);

// 3. Scrollbar
css = css.replace(
  /::-webkit-scrollbar-track\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-track {\n  background: #D4C5AF;\n}`
);
css = css.replace(
  /::-webkit-scrollbar-thumb\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-thumb {\n  background: linear-gradient(to bottom, #C58F2E, #A87520);\n  border-radius: var(--radius-full);\n  border: 2px solid #D4C5AF;\n}`
);

// 4. Header solid
const headerSolidRegex = /\.header\.header-solid\s*\{[\s\S]*?padding:\s*0\.85rem\s*3rem;\s*\}/;
const headerSolidReplacement = `.header.header-solid {
  position: sticky;
  top: 0;
  background-color: rgba(221, 208, 188, 0.96);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(168, 120, 32, 0.22);
  box-shadow: 0 6px 24px rgba(70, 45, 25, 0.08);
  padding: 0.85rem 3rem;
}`;
css = css.replace(headerSolidRegex, headerSolidReplacement);

css = css.replace(
  /\.header\.header-solid \.brand-name-luxury\s*\{[^}]*\}/g,
  `.header.header-solid .brand-name-luxury { color: #24150E; text-shadow: none; }`
);
css = css.replace(
  /\.header\.header-solid \.brand-vertical-divider\s*\{[^}]*\}/g,
  `.header.header-solid .brand-vertical-divider { background: rgba(168, 120, 32, 0.35); }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn { color: #523F34; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn:hover\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn:hover { color: #A87520; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\.active\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn.active { color: #24150E; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-motto-script\s*\{[^}]*\}/g,
  `.header.header-solid .nav-motto-script { color: #A87520; text-shadow: none; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-cta-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-cta-btn { background: linear-gradient(135deg, rgba(168, 120, 32, 0.12) 0%, rgba(168, 120, 32, 0.22) 100%); color: #24150E; border: 1px solid rgba(168, 120, 32, 0.35); }`
);
css = css.replace(
  /\.header\.header-solid \.mobile-toggle-btn\s*\{[^}]*\}/g,
  `.header.header-solid .mobile-toggle-btn { color: #24150E; border-color: rgba(168, 120, 32, 0.35); }`
);

// 5. Section titles
css = css.replace(
  /\.section-pretitle\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-pretitle {\n  display: inline-block;\n  font-family: var(--font-accent);\n  font-size: 1.15rem;\n  font-style: italic;\n  color: #A87520;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.section-title\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-title {\n  font-family: var(--font-heading);\n  font-size: clamp(2.4rem, 5vw, 3.8rem);\n  line-height: 1.1;\n  color: #24150E;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.section-subtitle\s*\{[\s\S]*?line-height:\s*1\.65;\s*\}/,
  `.section-subtitle {\n  max-width: 620px;\n  margin: 0.75rem auto 0;\n  color: #523F34;\n  font-size: 1.02rem;\n  line-height: 1.65;\n}`
);

// 6. Feature strip (Dark Cream)
const featureStripRegex = /\.feature-strip\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const featureStripReplacement = `.feature-strip {
  background: linear-gradient(135deg, #D6C7B1 0%, #CEBEA7 50%, #D9CAB5 100%);
  border-top: 1px solid rgba(168, 120, 32, 0.22);
  border-bottom: 1px solid rgba(168, 120, 32, 0.22);
  padding: 3.2rem 0;
  position: relative;
}`;
css = css.replace(featureStripRegex, featureStripReplacement);

css = css.replace(
  /\.feature-icon-box\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.feature-icon-box {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  background: #F7F1E6;\n  border: 1px solid rgba(168, 120, 32, 0.28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #A87520;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(70, 45, 25, 0.08);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.feature-content h4\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.feature-content h4 {\n  font-size: 1.25rem;\n  color: #24150E;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.feature-content p\s*\{[\s\S]*?line-height:\s*1\.55;\s*\}/,
  `.feature-content p {\n  font-size: 0.88rem;\n  color: #523F34;\n  line-height: 1.55;\n}`
);

// 7. Showcase cards
const showcaseCardRegex = /\.showcase-card\s*\{[\s\S]*?flex-direction:\s*column;\s*\}/;
const showcaseCardReplacement = `.showcase-card {
  background-color: #F7F1E6;
  border: 1px solid rgba(168, 120, 32, 0.22);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(70, 45, 25, 0.08);
  transition: all var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}`;
css = css.replace(showcaseCardRegex, showcaseCardReplacement);

css = css.replace(
  /\.showcase-card:hover\s*\{[\s\S]*?\}\s*(?!\.showcase)/,
  `.showcase-card:hover {\n  transform: translateY(-8px);\n  background-color: #F7F1E6;\n  border-color: #A87520;\n  box-shadow: 0 18px 45px rgba(70, 45, 25, 0.16), 0 0 25px rgba(168, 120, 32, 0.15);\n}\n`
);

css = css.replace(
  /\.showcase-body h3\s*\{[\s\S]*?line-height:\s*1\.2;\s*\}/,
  `.showcase-body h3 {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  color: #24150E;\n  line-height: 1.2;\n}`
);

css = css.replace(
  /\.showcase-price\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.showcase-price {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  color: #A87520;\n  -webkit-text-fill-color: #A87520;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.showcase-view-link\s*\{[\s\S]*?cursor:\s*pointer;\s*\}/,
  `.showcase-view-link {\n  color: #A87520;\n  font-size: 0.86rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n}`
);

// 8. Testimonials
const testimonialRegex = /\.testimonial-card\s*\{[\s\S]*?box-shadow:\s*[^;]+;\s*\}/;
const testimonialReplacement = `.testimonial-card {
  background-color: #F7F1E6;
  border: 1px solid rgba(168, 120, 32, 0.22);
  border-radius: var(--radius-md);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(70, 45, 25, 0.08);
}`;
css = css.replace(testimonialRegex, testimonialReplacement);

css = css.replace(
  /\.testimonial-card:hover\s*\{[\s\S]*?\}\s*(?!\.testimonial)/,
  `.testimonial-card:hover {\n  border-color: #A87520;\n  transform: translateY(-5px);\n  box-shadow: 0 16px 36px rgba(70, 45, 25, 0.14), 0 0 20px rgba(168, 120, 32, 0.15);\n}\n`
);

css = css.replace(
  /\.testimonial-stars\s*\{[\s\S]*?margin-bottom:\s*1rem;\s*\}/,
  `.testimonial-stars {\n  color: #A87520;\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}`
);

css = css.replace(
  /\.testimonial-text\s*\{[\s\S]*?margin-bottom:\s*1\.5rem;\s*\}/,
  `.testimonial-text {\n  font-family: var(--font-accent);\n  font-style: italic;\n  font-size: 1.05rem;\n  color: #24150E;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}`
);

css = css.replace(
  /\.author-info h4\s*\{[\s\S]*?line-height:\s*1;\s*\}/,
  `.author-info h4 {\n  font-size: 1.15rem;\n  color: #24150E;\n  line-height: 1;\n}`
);

css = css.replace(
  /\.author-info p\s*\{[\s\S]*?letter-spacing:\s*1px;\s*\}/,
  `.author-info p {\n  font-size: 0.78rem;\n  color: #A87520;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}`
);

// 9. Site Footer (Dark Cream)
const footerRegex = /\.site-footer\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const footerReplacement = `.site-footer {
  background: linear-gradient(135deg, #CFBFAB 0%, #C7B6A1 50%, #CDBDA8 100%);
  border-top: 1px solid rgba(168, 120, 32, 0.22);
  padding: 5rem 0 2rem;
  margin-top: auto;
  position: relative;
}`;
css = css.replace(footerRegex, footerReplacement);

css = css.replace(
  /\.footer-brand h2\s*\{[\s\S]*?margin-bottom:\s*0\.35rem;\s*\}/,
  `.footer-brand h2 {\n  font-size: 2.2rem;\n  color: #24150E;\n  -webkit-text-fill-color: #24150E;\n  letter-spacing: 2px;\n  margin-bottom: 0.35rem;\n}`
);

css = css.replace(
  /\.footer-brand \.footer-tagline\s*\{[\s\S]*?margin-bottom:\s*1\.25rem;\s*\}/,
  `.footer-brand .footer-tagline {\n  font-family: var(--font-accent);\n  font-style: italic;\n  color: #A87520;\n  font-size: 1.05rem;\n  margin-bottom: 1.25rem;\n}`
);

css = css.replace(
  /\.footer-brand p\s*\{[\s\S]*?line-height:\s*1\.6;\s*\}/,
  `.footer-brand p {\n  color: #523F34;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}`
);

css = css.replace(
  /\.footer-col h4\s*\{[\s\S]*?letter-spacing:\s*1\.2px;\s*\}/,
  `.footer-col h4 {\n  font-size: 1.35rem;\n  color: #24150E;\n  margin-bottom: 1.25rem;\n  letter-spacing: 1.2px;\n}`
);

css = css.replace(
  /\.footer-link-btn\s*\{[\s\S]*?transition:\s*color var\(--transition-fast\);\s*\}/,
  `.footer-link-btn {\n  background: none;\n  border: none;\n  color: #523F34;\n  font-size: 0.92rem;\n  cursor: pointer;\n  padding: 0;\n  text-align: left;\n  transition: color var(--transition-fast);\n}`
);

css = css.replace(
  /\.footer-link-btn:hover\s*\{[\s\S]*?\}/,
  `.footer-link-btn:hover {\n  color: #A87520;\n  padding-left: 4px;\n}`
);

css = css.replace(
  /\.social-icon-btn\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.social-icon-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #F7F1E6;\n  border: 1px solid rgba(168, 120, 32, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #A87520;\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(70, 45, 25, 0.08);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.social-icon-btn:hover\s*\{[\s\S]*?\}/,
  `.social-icon-btn:hover {\n  background: linear-gradient(135deg, #C58F2E, #A87520);\n  color: #FFFFFF;\n  transform: translateY(-3px);\n  border-color: transparent;\n}`
);

css = css.replace(
  /\.footer-bottom-bar\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.footer-bottom-bar {\n  padding-top: 2rem;\n  border-top: 1px solid rgba(168, 120, 32, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.82rem;\n  color: #766355;\n}`
);

// 10. Minimal, Aesthetic Menu CSS
const menuAestheticStyles = `/* ==========================================================================
   MENU PAGE - REFINED LUXURY CAFE AESTHETIC
   ========================================================================== */
.menu-page-wrapper {
  padding: 3.5rem 0 6rem;
}

.menu-header-clean {
  margin-bottom: 2.5rem;
}

/* Minimalist Filter Section */
.menu-filter-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* Clean Category Tabs */
.menu-tabs-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.4rem 0.2rem 0.8rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(168, 120, 32, 0.3) transparent;
}

.menu-tabs-wrapper::-webkit-scrollbar {
  height: 4px;
}
.menu-tabs-wrapper::-webkit-scrollbar-thumb {
  background: rgba(168, 120, 32, 0.3);
  border-radius: var(--radius-full);
}

.menu-tab-btn {
  background: rgba(247, 241, 230, 0.65);
  border: 1px solid rgba(168, 120, 32, 0.18);
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  color: #523F34;
  padding: 0.55rem 1.25rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 8px rgba(70, 45, 25, 0.04);
}

.menu-tab-btn:hover {
  background: #F7F1E6;
  color: #24150E;
  border-color: #A87520;
  transform: translateY(-1px);
}

.menu-tab-btn.active {
  background: linear-gradient(135deg, #C58F2E 0%, #A87520 100%);
  color: #FFFFFF;
  border-color: transparent;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(168, 120, 32, 0.35);
}

/* Sub-filter Bar: Search & Segmented Switch */
.menu-subfilter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.menu-search-pill {
  position: relative;
  flex: 1;
  max-width: 380px;
  min-width: 250px;
}

.menu-search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #A87520;
}

.menu-search-pill input {
  width: 100%;
  background: #F7F1E6;
  border: 1.5px solid rgba(168, 120, 32, 0.22);
  border-radius: var(--radius-full);
  padding: 0.68rem 2.4rem 0.68rem 2.6rem;
  color: #24150E;
  font-size: 0.92rem;
  font-family: var(--font-body);
  outline: none;
  box-shadow: 0 2px 10px rgba(70, 45, 25, 0.05);
  transition: all var(--transition-fast);
}

.menu-search-pill input::placeholder {
  color: #8C786A;
}

.menu-search-pill input:focus {
  border-color: #A87520;
  box-shadow: 0 0 0 3px rgba(168, 120, 32, 0.16);
  background: #FFFFFF;
}

.menu-search-clear {
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(168, 120, 32, 0.15);
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #523F34;
  cursor: pointer;
}

.menu-diet-segmented {
  display: inline-flex;
  align-items: center;
  background: rgba(212, 197, 175, 0.6);
  padding: 0.3rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(168, 120, 32, 0.18);
  gap: 0.25rem;
}

.diet-seg-btn {
  background: transparent;
  border: none;
  padding: 0.45rem 1.1rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 500;
  color: #523F34;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all var(--transition-fast);
}

.diet-seg-btn:hover {
  color: #24150E;
}

.diet-seg-btn.active {
  background: #F7F1E6;
  color: #24150E;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(70, 45, 25, 0.08);
}

.dot-veg {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-veg);
}

.dot-nonveg {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-nonveg);
}

.menu-meta-status {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  margin-bottom: 2.2rem;
  font-size: 0.9rem;
  color: #766355;
  padding: 0 0.2rem;
}

.menu-meta-status strong {
  color: #24150E;
}

.meta-sep {
  color: #A87520;
}

/* Aesthetic Menu Grid */
.menu-grid-aesthetic {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.2rem;
}

.menu-card-aesthetic {
  background: #F7F1E6;
  border: 1px solid rgba(168, 120, 32, 0.22);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(70, 45, 25, 0.07);
}

.menu-card-aesthetic:hover {
  transform: translateY(-6px);
  border-color: #A87520;
  background: #FFFDF9;
  box-shadow: 0 16px 38px rgba(70, 45, 25, 0.14);
}

.card-photo-frame {
  height: 230px;
  position: relative;
  overflow: hidden;
  background-color: #D4C5AF;
}

.card-photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-card-aesthetic:hover .card-photo-frame img {
  transform: scale(1.06);
}

.card-photo-badges {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  pointer-events: none;
}

.category-pill-tag {
  background: rgba(36, 21, 14, 0.85);
  backdrop-filter: blur(8px);
  color: #F7F1E6;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  padding: 0.28rem 0.65rem;
  border-radius: var(--radius-sm);
}

.special-pill-tag {
  background: linear-gradient(135deg, #C58F2E, #A87520);
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.28rem 0.65rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 12px rgba(168, 120, 32, 0.3);
}

/* Card Content: Item Name and Price Only */
.card-content-aesthetic {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-header-aesthetic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.card-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex: 1;
}

.card-dish-name {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: #24150E;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.card-price-display {
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: #A87520;
  white-space: nowrap;
}

.rupee-symbol {
  font-size: 1.05rem;
  font-weight: 600;
  color: #A87520;
}

.price-num {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  color: #A87520;
  letter-spacing: 0.3px;
}

.combo-contents-box {
  margin-top: 1rem;
  padding: 0.75rem 0.9rem;
  background: rgba(168, 120, 32, 0.08);
  border: 1px dashed rgba(168, 120, 32, 0.25);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.combo-contents-label {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #A87520;
  font-weight: 600;
}

.combo-contents-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.combo-item-chip {
  background: #F7F1E6;
  border: 1px solid rgba(168, 120, 32, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  color: #523F34;
}

.combo-item-chip strong {
  color: #A87520;
}
`;

// Replace menu section in CSS
const startMarker = '/* ==========================================================================\n   MENU PAGE - REDESIGNED LUXURY UI\n   ========================================================================== */';
const endMarker = '/* ==========================================================================\n   GALLERY PAGE\n   ========================================================================== */';

const startIndex = css.indexOf(startMarker);
const endIndex = css.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  css = css.substring(0, startIndex) + menuAestheticStyles + '\n\n' + css.substring(endIndex);
} else {
  // If exact startMarker not found, search for MENU PAGE
  const fallbackStart = css.indexOf('/* ==========================================================================\n   MENU PAGE');
  if (fallbackStart !== -1 && endIndex !== -1) {
    css = css.substring(0, fallbackStart) + menuAestheticStyles + '\n\n' + css.substring(endIndex);
  }
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully applied Aesthetic Dark Cream & Refined Menu styling!');
