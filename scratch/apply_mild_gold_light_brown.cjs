const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. :root variables
const rootRegex = /:root\s*\{[\s\S]*?--shadow-hover:[^;]+;\s*\}/;

const rootReplacement = `:root {
  /* Mild Gold & Very Light Brown Luxury Cafe Palette */
  --color-canvas: #EFE6D8;             /* Mild gold & very light brown canvas */
  --color-canvas-subtle: #F6EFE5;      /* Subtle lighter warm cream & gold surface */
  --color-canvas-alt: #E8DCCB;         /* Soft warm light brown accent surface */
  --color-surface: #FFFDF9;            /* Pure soft ivory card surface */
  --color-surface-hover: #F8F1E5;      /* Elevated hover surface */
  --color-border-warm: rgba(184, 134, 40, 0.28);
  --color-border-subtle: rgba(184, 134, 40, 0.16);
  
  /* Text Tones (Deep roasted espresso & warm cocoa for crystal-clear readability) */
  --color-espresso: #221610;           /* Deep roasted espresso for headings */
  --color-mocha: #544034;              /* Warm gentle cocoa for body copy */
  --color-sand: #7D6758;               /* Muted warm taupe for captions & metadata */
  
  /* Mild Luxury Gold Accents */
  --color-gold: #B88628;               /* Antique rich burnished gold */
  --color-gold-light: #D4A33B;         /* Warm luminous gold */
  --color-gold-dark: #966C1B;          /* Deep burnished bronze gold */
  --color-gold-glow: rgba(184, 134, 40, 0.28);
  --color-gold-subtle: rgba(184, 134, 40, 0.12);

  --color-lavender: #B88628;
  --color-lavender-light: #D4A33B;
  --color-lavender-dark: #966C1B;
  --color-lavender-glow: rgba(184, 134, 40, 0.28);
  --color-lavender-subtle: rgba(184, 134, 40, 0.12);

  /* Radiant Theme Gradients */
  --gradient-radiant: linear-gradient(135deg, #ECC875 0%, #D4A33B 50%, #B88628 100%);
  --gradient-radiant-hover: linear-gradient(135deg, #F3D58C 0%, #DFB44F 50%, #A6781E 100%);
  --gradient-gold: linear-gradient(135deg, #ECC875 0%, #D4A33B 50%, #B88628 100%);
  --gradient-headline: linear-gradient(135deg, #221610 0%, #462E22 50%, #B88628 100%);

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
  
  --color-cream: #221610;
  --color-cream-muted: #544034;
  --color-cream-dim: #7D6758;
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
  --shadow-warm: 0 10px 30px -5px rgba(80, 50, 30, 0.08);
  --shadow-card: 0 12px 32px -6px rgba(80, 50, 30, 0.09);
  --shadow-hover: 0 20px 45px -8px rgba(184, 134, 40, 0.25);
}`;

css = css.replace(rootRegex, rootReplacement);

// 2. body
const bodyRegex = /body\s*\{[\s\S]*?background-attachment:\s*fixed;\s*\}/;
const bodyReplacement = `body {
  font-family: var(--font-body);
  background-color: #EFE6D8;
  color: var(--color-mocha);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(201, 151, 46, 0.1) 0%, transparent 45%),
    radial-gradient(circle at 85% 65%, rgba(201, 151, 46, 0.08) 0%, transparent 45%),
    linear-gradient(180deg, #EFE6D8 0%, #F4EBE0 50%, #ECE1D2 100%);
  background-attachment: fixed;
}`;

css = css.replace(bodyRegex, bodyReplacement);

// 3. Scrollbar
css = css.replace(
  /::-webkit-scrollbar-track\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-track {\n  background: #E8DCCB;\n}`
);
css = css.replace(
  /::-webkit-scrollbar-thumb\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-thumb {\n  background: linear-gradient(to bottom, #ECC875, #B88628);\n  border-radius: var(--radius-full);\n  border: 2px solid #E8DCCB;\n}`
);

// 4. Header solid
const headerSolidRegex = /\.header\.header-solid\s*\{[\s\S]*?padding:\s*0\.85rem\s*3rem;\s*\}/;
const headerSolidReplacement = `.header.header-solid {
  position: sticky;
  top: 0;
  background-color: rgba(239, 230, 216, 0.96);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(184, 134, 40, 0.25);
  box-shadow: 0 6px 24px rgba(80, 50, 30, 0.08);
  padding: 0.85rem 3rem;
}`;

css = css.replace(headerSolidRegex, headerSolidReplacement);

// Header elements inside solid
css = css.replace(
  /\.header\.header-solid \.brand-name-luxury\s*\{[^}]*\}/g,
  `.header.header-solid .brand-name-luxury { color: #221610; text-shadow: none; }`
);
css = css.replace(
  /\.header\.header-solid \.brand-vertical-divider\s*\{[^}]*\}/g,
  `.header.header-solid .brand-vertical-divider { background: rgba(184, 134, 40, 0.35); }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn { color: #544034; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn:hover\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn:hover { color: #B88628; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\.active\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn.active { color: #221610; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-motto-script\s*\{[^}]*\}/g,
  `.header.header-solid .nav-motto-script { color: #B88628; text-shadow: none; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-cta-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-cta-btn { background: linear-gradient(135deg, rgba(184, 134, 40, 0.12) 0%, rgba(184, 134, 40, 0.24) 100%); color: #221610; border: 1px solid rgba(184, 134, 40, 0.35); }`
);
css = css.replace(
  /\.header\.header-solid \.mobile-toggle-btn\s*\{[^}]*\}/g,
  `.header.header-solid .mobile-toggle-btn { color: #221610; border-color: rgba(184, 134, 40, 0.35); }`
);

// 5. Section titles
css = css.replace(
  /\.section-pretitle\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-pretitle {\n  display: inline-block;\n  font-family: var(--font-accent);\n  font-size: 1.15rem;\n  font-style: italic;\n  color: #B88628;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.section-title\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-title {\n  font-family: var(--font-heading);\n  font-size: clamp(2.4rem, 5vw, 3.8rem);\n  line-height: 1.1;\n  color: #221610;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.section-subtitle\s*\{[\s\S]*?line-height:\s*1\.65;\s*\}/,
  `.section-subtitle {\n  max-width: 620px;\n  margin: 0.75rem auto 0;\n  color: #544034;\n  font-size: 1.02rem;\n  line-height: 1.65;\n}`
);

// 6. Feature strip (Light Brown & Mild Gold)
const featureStripRegex = /\.feature-strip\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const featureStripReplacement = `.feature-strip {
  background: linear-gradient(135deg, #E8DCCB 0%, #DFD0BD 50%, #EBE0D0 100%);
  border-top: 1px solid rgba(184, 134, 40, 0.22);
  border-bottom: 1px solid rgba(184, 134, 40, 0.22);
  padding: 3.2rem 0;
  position: relative;
}`;
css = css.replace(featureStripRegex, featureStripReplacement);

css = css.replace(
  /\.feature-icon-box\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.feature-icon-box {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  background: #FFFDF9;\n  border: 1px solid rgba(184, 134, 40, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #B88628;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(80, 50, 30, 0.08);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.feature-content h4\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.feature-content h4 {\n  font-size: 1.25rem;\n  color: #221610;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.feature-content p\s*\{[\s\S]*?line-height:\s*1\.55;\s*\}/,
  `.feature-content p {\n  font-size: 0.88rem;\n  color: #544034;\n  line-height: 1.55;\n}`
);

// 7. Showcase cards
const showcaseCardRegex = /\.showcase-card\s*\{[\s\S]*?flex-direction:\s*column;\s*\}/;
const showcaseCardReplacement = `.showcase-card {
  background-color: #FFFDF9;
  border: 1px solid rgba(184, 134, 40, 0.22);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(80, 50, 30, 0.08);
  transition: all var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}`;
css = css.replace(showcaseCardRegex, showcaseCardReplacement);

css = css.replace(
  /\.showcase-card:hover\s*\{[\s\S]*?\}\s*(?!\.showcase)/,
  `.showcase-card:hover {\n  transform: translateY(-8px);\n  background-color: #FFFDF9;\n  border-color: #B88628;\n  box-shadow: 0 18px 45px rgba(80, 50, 30, 0.16), 0 0 25px rgba(184, 134, 40, 0.18);\n}\n`
);

css = css.replace(
  /\.showcase-body h3\s*\{[\s\S]*?line-height:\s*1\.2;\s*\}/,
  `.showcase-body h3 {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  color: #221610;\n  line-height: 1.2;\n}`
);

css = css.replace(
  /\.showcase-price\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.showcase-price {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  color: #B88628;\n  -webkit-text-fill-color: #B88628;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.showcase-view-link\s*\{[\s\S]*?cursor:\s*pointer;\s*\}/,
  `.showcase-view-link {\n  color: #B88628;\n  font-size: 0.86rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n}`
);

// 8. Testimonials
const testimonialRegex = /\.testimonial-card\s*\{[\s\S]*?box-shadow:\s*[^;]+;\s*\}/;
const testimonialReplacement = `.testimonial-card {
  background-color: #FFFDF9;
  border: 1px solid rgba(184, 134, 40, 0.22);
  border-radius: var(--radius-md);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(80, 50, 30, 0.08);
}`;
css = css.replace(testimonialRegex, testimonialReplacement);

css = css.replace(
  /\.testimonial-card:hover\s*\{[\s\S]*?\}\s*(?!\.testimonial)/,
  `.testimonial-card:hover {\n  border-color: #B88628;\n  transform: translateY(-5px);\n  box-shadow: 0 16px 36px rgba(80, 50, 30, 0.14), 0 0 20px rgba(184, 134, 40, 0.15);\n}\n`
);

css = css.replace(
  /\.testimonial-stars\s*\{[\s\S]*?margin-bottom:\s*1rem;\s*\}/,
  `.testimonial-stars {\n  color: #B88628;\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}`
);

css = css.replace(
  /\.testimonial-text\s*\{[\s\S]*?margin-bottom:\s*1\.5rem;\s*\}/,
  `.testimonial-text {\n  font-family: var(--font-accent);\n  font-style: italic;\n  font-size: 1.05rem;\n  color: #221610;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}`
);

css = css.replace(
  /\.author-info h4\s*\{[\s\S]*?line-height:\s*1;\s*\}/,
  `.author-info h4 {\n  font-size: 1.15rem;\n  color: #221610;\n  line-height: 1;\n}`
);

css = css.replace(
  /\.author-info p\s*\{[\s\S]*?letter-spacing:\s*1px;\s*\}/,
  `.author-info p {\n  font-size: 0.78rem;\n  color: #B88628;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}`
);

// 9. Site Footer (Very Light Brown & Mild Gold)
const footerRegex = /\.site-footer\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const footerReplacement = `.site-footer {
  background: linear-gradient(135deg, #E4D5C2 0%, #DBCAB4 50%, #E0D1BD 100%);
  border-top: 1px solid rgba(184, 134, 40, 0.22);
  padding: 5rem 0 2rem;
  margin-top: auto;
  position: relative;
}`;
css = css.replace(footerRegex, footerReplacement);

css = css.replace(
  /\.footer-brand h2\s*\{[\s\S]*?margin-bottom:\s*0\.35rem;\s*\}/,
  `.footer-brand h2 {\n  font-size: 2.2rem;\n  color: #221610;\n  -webkit-text-fill-color: #221610;\n  letter-spacing: 2px;\n  margin-bottom: 0.35rem;\n}`
);

css = css.replace(
  /\.footer-brand \.footer-tagline\s*\{[\s\S]*?margin-bottom:\s*1\.25rem;\s*\}/,
  `.footer-brand .footer-tagline {\n  font-family: var(--font-accent);\n  font-style: italic;\n  color: #B88628;\n  font-size: 1.05rem;\n  margin-bottom: 1.25rem;\n}`
);

css = css.replace(
  /\.footer-brand p\s*\{[\s\S]*?line-height:\s*1\.6;\s*\}/,
  `.footer-brand p {\n  color: #544034;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}`
);

css = css.replace(
  /\.footer-col h4\s*\{[\s\S]*?letter-spacing:\s*1\.2px;\s*\}/,
  `.footer-col h4 {\n  font-size: 1.35rem;\n  color: #221610;\n  margin-bottom: 1.25rem;\n  letter-spacing: 1.2px;\n}`
);

css = css.replace(
  /\.footer-link-btn\s*\{[\s\S]*?transition:\s*color var\(--transition-fast\);\s*\}/,
  `.footer-link-btn {\n  background: none;\n  border: none;\n  color: #544034;\n  font-size: 0.92rem;\n  cursor: pointer;\n  padding: 0;\n  text-align: left;\n  transition: color var(--transition-fast);\n}`
);

css = css.replace(
  /\.footer-link-btn:hover\s*\{[\s\S]*?\}/,
  `.footer-link-btn:hover {\n  color: #B88628;\n  padding-left: 4px;\n}`
);

css = css.replace(
  /\.social-icon-btn\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.social-icon-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #FFFDF9;\n  border: 1px solid rgba(184, 134, 40, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #B88628;\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(80, 50, 30, 0.08);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.social-icon-btn:hover\s*\{[\s\S]*?\}/,
  `.social-icon-btn:hover {\n  background: linear-gradient(135deg, #ECC875, #B88628);\n  color: #FFFFFF;\n  transform: translateY(-3px);\n  border-color: transparent;\n}`
);

css = css.replace(
  /\.footer-bottom-bar\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.footer-bottom-bar {\n  padding-top: 2rem;\n  border-top: 1px solid rgba(184, 134, 40, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.82rem;\n  color: #7D6758;\n}`
);

// 10. Update Menu Page components to match mild gold & light brown
css = css.replace(
  /\.menu-filter-controls-card\s*\{[\s\S]*?gap:\s*1\.4rem;\s*\}/,
  `.menu-filter-controls-card {\n  background: rgba(255, 253, 249, 0.92);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(184, 134, 40, 0.25);\n  border-radius: var(--radius-lg);\n  padding: 1.6rem;\n  box-shadow: 0 16px 45px rgba(80, 50, 30, 0.09);\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n}`
);

css = css.replace(
  /\.search-input-box-enhanced input\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.search-input-box-enhanced input {\n  width: 100%;\n  background-color: #FFFDF9;\n  border: 1.5px solid rgba(184, 134, 40, 0.3);\n  border-radius: var(--radius-full);\n  padding: 0.75rem 2.8rem 0.75rem 2.7rem;\n  color: #221610;\n  font-size: 0.95rem;\n  font-family: var(--font-body);\n  outline: none;\n  box-shadow: 0 4px 16px rgba(80, 50, 30, 0.06);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.diet-pill-btn\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*15px[^;]+;\s*\}/,
  `.diet-pill-btn {\n  background: #FAF3E8;\n  border: 1px solid rgba(184, 134, 40, 0.25);\n  color: #544034;\n  font-size: 0.88rem;\n  font-weight: 500;\n  padding: 0.65rem 1.25rem;\n  border-radius: var(--radius-full);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  transition: all var(--transition-fast);\n  box-shadow: 0 4px 15px rgba(80, 50, 30, 0.05);\n}`
);

css = css.replace(
  /\.category-chip-btn\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*15px[^;]+;\s*\}/,
  `.category-chip-btn {\n  background: #FAF3E8;\n  border: 1px solid rgba(184, 134, 40, 0.25);\n  color: #544034;\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.65rem 1.25rem;\n  border-radius: var(--radius-full);\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  transition: all var(--transition-fast);\n  box-shadow: 0 4px 15px rgba(80, 50, 30, 0.05);\n}`
);

css = css.replace(
  /\.category-chip-count\s*\{[\s\S]*?font-weight:\s*600;\s*\}/,
  `.category-chip-count {\n  background: rgba(184, 134, 40, 0.15);\n  color: #221610;\n  padding: 0.15rem 0.5rem;\n  border-radius: var(--radius-full);\n  font-size: 0.74rem;\n  font-weight: 600;\n}`
);

css = css.replace(
  /\.menu-results-count strong\s*\{[\s\S]*?\}/,
  `.menu-results-count strong {\n  color: #221610;\n}`
);

css = css.replace(
  /\.menu-results-count em\s*\{[\s\S]*?\}/,
  `.menu-results-count em {\n  color: #B88628;\n  font-style: normal;\n  font-weight: 600;\n}`
);

css = css.replace(
  /\.menu-quick-helpline\s*\{[\s\S]*?font-size:\s*0\.88rem;\s*\}/,
  `.menu-quick-helpline {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: #B88628;\n  font-size: 0.88rem;\n}`
);

css = css.replace(
  /\.menu-quick-helpline strong\s*\{[\s\S]*?\}/,
  `.menu-quick-helpline strong {\n  color: #221610;\n}`
);

// Menu Cards
const menuCardRegex = /\.menu-card-modern\s*\{[\s\S]*?both;\s*\}/;
const menuCardReplacement = `.menu-card-modern {
  background: #FFFDF9;
  border: 1px solid rgba(184, 134, 40, 0.22);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  box-shadow: 0 10px 30px rgba(80, 50, 30, 0.08);
  animation: modernCardFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}`;
css = css.replace(menuCardRegex, menuCardReplacement);

css = css.replace(
  /\.menu-card-modern:hover\s*\{[\s\S]*?\}\s*(?!\.menu-card)/,
  `.menu-card-modern:hover {\n  transform: translateY(-8px);\n  border-color: #B88628;\n  background: #FFFDF9;\n  box-shadow: 0 20px 48px rgba(80, 50, 30, 0.16), 0 0 25px rgba(184, 134, 40, 0.18);\n}\n`
);

css = css.replace(
  /\.menu-card-title\s*\{[\s\S]*?letter-spacing:\s*0\.3px;\s*\}/,
  `.menu-card-title {\n  font-family: var(--font-heading);\n  font-size: 1.35rem;\n  color: #221610;\n  line-height: 1.25;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}`
);

css = css.replace(
  /\.price-currency\s*\{[\s\S]*?\}/,
  `.price-currency {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #B88628;\n}`
);

css = css.replace(
  /\.price-amount\s*\{[\s\S]*?\}/,
  `.price-amount {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: #B88628;\n}`
);

css = css.replace(
  /\.menu-card-order-btn\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.menu-card-order-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  background: linear-gradient(135deg, rgba(184, 134, 40, 0.12) 0%, rgba(184, 134, 40, 0.24) 100%);\n  border: 1px solid rgba(184, 134, 40, 0.35);\n  color: #221610;\n  padding: 0.65rem 1.2rem;\n  border-radius: var(--radius-full);\n  font-size: 0.86rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.menu-card-order-btn:hover\s*\{[\s\S]*?\}/,
  `.menu-card-order-btn:hover {\n  background: linear-gradient(135deg, #ECC875 0%, #B88628 100%);\n  color: #FFFFFF;\n  border-color: transparent;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(184, 134, 40, 0.35);\n}`
);

css = css.replace(
  /\.menu-combo-chip\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.menu-combo-chip {\n  background: #FAF3E8;\n  border: 1px solid rgba(184, 134, 40, 0.25);\n  padding: 0.25rem 0.65rem;\n  border-radius: var(--radius-full);\n  font-size: 0.76rem;\n  color: #544034;\n}`
);

css = css.replace(
  /\.menu-combo-header\s*\{[\s\S]*?margin-bottom:\s*0\.55rem;\s*\}/,
  `.menu-combo-header {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.76rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #B88628;\n  font-weight: 600;\n  margin-bottom: 0.55rem;\n}`
);

// Mobile menu overlay
css = css.replace(
  /background-color:\s*rgba\(22,\s*16,\s*13,\s*0\.98\);/,
  `background-color: rgba(239, 230, 216, 0.98);`
);
css = css.replace(
  /\.mobile-nav-link\s*\{[\s\S]*?color:\s*#FFFFFF;/,
  `.mobile-nav-link {\n    background: none;\n    border: none;\n    font-family: 'Playfair Display', Georgia, serif;\n    font-size: 1.6rem;\n    font-weight: 600;\n    letter-spacing: 1px;\n    color: #221610;`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully applied Mild Gold & Very Light Brown theme!');
