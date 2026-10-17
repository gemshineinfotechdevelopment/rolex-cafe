const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. :root variables
const rootRegex = /:root\s*\{[\s\S]*?--shadow-hover:[^;]+;\s*\}/;

const rootReplacement = `:root {
  /* Mild Roasted Mocha & Radiant Amber Gold System */
  --color-canvas: #16100D;             /* Mild warm roasted coffee canvas (soft, warm, cozy cafe ambience) */
  --color-canvas-subtle: #1D1511;      /* Warm espresso surface */
  --color-canvas-alt: #251B15;         /* Elevated rich coffee surface */
  --color-surface: #201713;            /* Rich roasted mocha card surface */
  --color-surface-hover: #2B1F19;      /* Elevated hover surface with warm glow */
  --color-border-warm: rgba(229, 197, 120, 0.28);
  --color-border-subtle: rgba(229, 197, 120, 0.15);
  
  /* Text Tones (Crisp pure white headings & warm champagne for supreme legibility) */
  --color-espresso: #FFFFFF;           /* Crisp Pure White for headings */
  --color-mocha: #DCD2C7;              /* Warm gentle champagne for readable body copy */
  --color-sand: #A39688;               /* Muted warm sand for captions & metadata */
  
  /* Radiant Champagne Gold */
  --color-gold: #E5C578;               /* Luminous champagne gold */
  --color-gold-light: #F3DEAB;         /* Bright radiant highlight */
  --color-gold-dark: #C59A27;          /* Antique burnished gold */
  --color-gold-glow: rgba(229, 197, 120, 0.35);
  --color-gold-subtle: rgba(229, 197, 120, 0.12);

  --color-lavender: #E5C578;
  --color-lavender-light: #F3DEAB;
  --color-lavender-dark: #C59A27;
  --color-lavender-glow: rgba(229, 197, 120, 0.35);
  --color-lavender-subtle: rgba(229, 197, 120, 0.12);

  /* Radiant Theme Gradients */
  --gradient-radiant: linear-gradient(135deg, #F3DEAB 0%, #E5C578 50%, #C59A27 100%);
  --gradient-radiant-hover: linear-gradient(135deg, #FFF0C8 0%, #ECC875 50%, #B88E28 100%);
  --gradient-gold: linear-gradient(135deg, #F3DEAB 0%, #E5C578 50%, #C59A27 100%);
  --gradient-headline: linear-gradient(135deg, #FFFFFF 0%, #F5ECDA 45%, #E5C578 100%);

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
  
  --color-cream: #FFFFFF;
  --color-cream-muted: #DCD2C7;
  --color-cream-dim: #A39688;
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
  --shadow-warm: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
  --shadow-card: 0 12px 32px -6px rgba(0, 0, 0, 0.6);
  --shadow-hover: 0 20px 45px -8px rgba(229, 197, 120, 0.25);
}`;

css = css.replace(rootRegex, rootReplacement);

// 2. body
const bodyRegex = /body\s*\{[\s\S]*?background-attachment:\s*fixed;\s*\}/;
const bodyReplacement = `body {
  font-family: var(--font-body);
  background-color: #16100D;
  color: var(--color-mocha);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(229, 197, 120, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 85% 65%, rgba(229, 197, 120, 0.06) 0%, transparent 45%),
    linear-gradient(180deg, #16100D 0%, #1D1511 50%, #130E0B 100%);
  background-attachment: fixed;
}`;

css = css.replace(bodyRegex, bodyReplacement);

// 3. Scrollbar
css = css.replace(
  /::-webkit-scrollbar-track\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-track {\n  background: #16100D;\n}`
);
css = css.replace(
  /::-webkit-scrollbar-thumb\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-thumb {\n  background: linear-gradient(to bottom, #F3DEAB, #C59A27);\n  border-radius: var(--radius-full);\n  border: 2px solid #16100D;\n}`
);

// 4. Header solid
const headerSolidRegex = /\.header\.header-solid\s*\{[\s\S]*?padding:\s*0\.85rem\s*3rem;\s*\}/;
const headerSolidReplacement = `.header.header-solid {
  position: sticky;
  top: 0;
  background-color: rgba(22, 16, 13, 0.94);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(229, 197, 120, 0.22);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  padding: 0.85rem 3rem;
}`;

css = css.replace(headerSolidRegex, headerSolidReplacement);

// Header elements inside solid
css = css.replace(
  /\.header\.header-solid \.brand-name-luxury\s*\{[^}]*\}/g,
  `.header.header-solid .brand-name-luxury { color: #FFFFFF; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn { color: #DCD2C7; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn:hover\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn:hover { color: #FFFFFF; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\.active\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn.active { color: #FFFFFF; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-motto-script\s*\{[^}]*\}/g,
  `.header.header-solid .nav-motto-script { color: #E5C578; }`
);

// 5. Section titles
css = css.replace(
  /\.section-pretitle\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-pretitle {\n  display: inline-block;\n  font-family: var(--font-accent);\n  font-size: 1.15rem;\n  font-style: italic;\n  color: #E5C578;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

// 6. Feature strip
const featureStripRegex = /\.feature-strip\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const featureStripReplacement = `.feature-strip {
  background: linear-gradient(135deg, #1C1511 0%, #251B15 50%, #17100D 100%);
  border-top: 1px solid rgba(229, 197, 120, 0.18);
  border-bottom: 1px solid rgba(229, 197, 120, 0.18);
  padding: 3.2rem 0;
  position: relative;
}`;
css = css.replace(featureStripRegex, featureStripReplacement);

css = css.replace(
  /\.feature-icon-box\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.feature-icon-box {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  background: #251B15;\n  border: 1px solid rgba(229, 197, 120, 0.28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #E5C578;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.feature-content h4\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.feature-content h4 {\n  font-size: 1.25rem;\n  color: #FFFFFF;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.feature-content p\s*\{[\s\S]*?line-height:\s*1\.55;\s*\}/,
  `.feature-content p {\n  font-size: 0.88rem;\n  color: #DCD2C7;\n  line-height: 1.55;\n}`
);

// 7. Showcase cards
const showcaseCardRegex = /\.showcase-card\s*\{[\s\S]*?flex-direction:\s*column;\s*\}/;
const showcaseCardReplacement = `.showcase-card {
  background-color: #201713;
  border: 1px solid rgba(229, 197, 120, 0.22);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
  transition: all var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}`;
css = css.replace(showcaseCardRegex, showcaseCardReplacement);

css = css.replace(
  /\.showcase-card:hover\s*\{[\s\S]*?\}\s*(?!\.showcase)/,
  `.showcase-card:hover {\n  transform: translateY(-8px);\n  background-color: #281D17;\n  border-color: #E5C578;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.75), 0 0 25px rgba(229, 197, 120, 0.2);\n}\n`
);

css = css.replace(
  /\.showcase-body h3\s*\{[\s\S]*?line-height:\s*1\.2;\s*\}/,
  `.showcase-body h3 {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  color: #FFFFFF;\n  line-height: 1.2;\n}`
);

css = css.replace(
  /\.showcase-price\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.showcase-price {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  color: #E5C578;\n  -webkit-text-fill-color: #E5C578;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.showcase-view-link\s*\{[\s\S]*?gap:\s*0\.35rem;\s*background:\s*none;\s*\}/,
  `.showcase-view-link {\n  color: #E5C578;\n  font-size: 0.86rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n}`
);

// 8. Testimonials
const testimonialRegex = /\.testimonial-card\s*\{[\s\S]*?box-shadow:\s*0\s*8px\s*24px[^;]+;\s*\}/;
const testimonialReplacement = `.testimonial-card {
  background-color: #201713;
  border: 1px solid rgba(229, 197, 120, 0.22);
  border-radius: var(--radius-md);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}`;
css = css.replace(testimonialRegex, testimonialReplacement);

css = css.replace(
  /\.testimonial-card:hover\s*\{[\s\S]*?\}\s*(?!\.testimonial)/,
  `.testimonial-card:hover {\n  border-color: #E5C578;\n  transform: translateY(-5px);\n  background-color: #281D17;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(229, 197, 120, 0.2);\n}\n`
);

css = css.replace(
  /\.testimonial-stars\s*\{[\s\S]*?margin-bottom:\s*1rem;\s*\}/,
  `.testimonial-stars {\n  color: #E5C578;\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}`
);

css = css.replace(
  /\.testimonial-text\s*\{[\s\S]*?margin-bottom:\s*1\.5rem;\s*\}/,
  `.testimonial-text {\n  font-family: var(--font-accent);\n  font-style: italic;\n  font-size: 1.05rem;\n  color: #FFFFFF;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}`
);

css = css.replace(
  /\.author-info h4\s*\{[\s\S]*?line-height:\s*1;\s*\}/,
  `.author-info h4 {\n  font-size: 1.15rem;\n  color: #FFFFFF;\n  line-height: 1;\n}`
);

css = css.replace(
  /\.author-info p\s*\{[\s\S]*?letter-spacing:\s*1px;\s*\}/,
  `.author-info p {\n  font-size: 0.78rem;\n  color: #E5C578;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}`
);

// 9. Visit Banner
const visitBannerRegex = /\.visit-banner\s*\{[\s\S]*?overflow:\s*hidden;\s*\}/;
const visitBannerReplacement = `.visit-banner {
  background: linear-gradient(135deg, #251B15 0%, #30221A 50%, #1A120E 100%);
  border: 1.5px solid rgba(229, 197, 120, 0.35);
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  margin: 3rem auto 6rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(229, 197, 120, 0.15);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;
}`;
css = css.replace(visitBannerRegex, visitBannerReplacement);

// 10. Site Footer
const footerRegex = /\.site-footer\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const footerReplacement = `.site-footer {
  background: linear-gradient(135deg, #150F0C 0%, #1F1612 50%, #110B08 100%);
  border-top: 1px solid rgba(229, 197, 120, 0.2);
  padding: 5rem 0 2rem;
  margin-top: auto;
  position: relative;
}`;
css = css.replace(footerRegex, footerReplacement);

css = css.replace(
  /\.footer-brand h2\s*\{[\s\S]*?margin-bottom:\s*0\.35rem;\s*\}/,
  `.footer-brand h2 {\n  font-size: 2.2rem;\n  color: #FFFFFF;\n  -webkit-text-fill-color: #FFFFFF;\n  letter-spacing: 2px;\n  margin-bottom: 0.35rem;\n}`
);

css = css.replace(
  /\.footer-brand \.footer-tagline\s*\{[\s\S]*?margin-bottom:\s*1\.25rem;\s*\}/,
  `.footer-brand .footer-tagline {\n  font-family: var(--font-accent);\n  font-style: italic;\n  color: #E5C578;\n  font-size: 1.05rem;\n  margin-bottom: 1.25rem;\n}`
);

css = css.replace(
  /\.footer-brand p\s*\{[\s\S]*?line-height:\s*1\.6;\s*\}/,
  `.footer-brand p {\n  color: #DCD2C7;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}`
);

css = css.replace(
  /\.footer-col h4\s*\{[\s\S]*?letter-spacing:\s*1\.2px;\s*\}/,
  `.footer-col h4 {\n  font-size: 1.35rem;\n  color: #FFFFFF;\n  margin-bottom: 1.25rem;\n  letter-spacing: 1.2px;\n}`
);

css = css.replace(
  /\.footer-link-btn\s*\{[\s\S]*?transition:\s*color var\(--transition-fast\);\s*\}/,
  `.footer-link-btn {\n  background: none;\n  border: none;\n  color: #DCD2C7;\n  font-size: 0.92rem;\n  cursor: pointer;\n  padding: 0;\n  text-align: left;\n  transition: color var(--transition-fast);\n}`
);

css = css.replace(
  /\.footer-link-btn:hover\s*\{[\s\S]*?\}/,
  `.footer-link-btn:hover {\n  color: #E5C578;\n  padding-left: 4px;\n}`
);

css = css.replace(
  /\.social-icon-btn\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.social-icon-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(229, 197, 120, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #E5C578;\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.social-icon-btn:hover\s*\{[\s\S]*?\}/,
  `.social-icon-btn:hover {\n  background: linear-gradient(135deg, #F3DEAB, #C59A27);\n  color: #16100D;\n  transform: translateY(-3px);\n  border-color: transparent;\n}`
);

css = css.replace(
  /\.footer-bottom-bar\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.footer-bottom-bar {\n  padding-top: 2rem;\n  border-top: 1px solid rgba(229, 197, 120, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.82rem;\n  color: #A39688;\n}`
);

// 11. Mobile menu
css = css.replace(
  /background-color:\s*rgba\(248,\s*245,\s*240,\s*0\.98\);/,
  `background-color: rgba(22, 16, 13, 0.98);`
);
css = css.replace(
  /\.mobile-nav-link\s*\{[\s\S]*?color:\s*#1F1610;/,
  `.mobile-nav-link {\n    background: none;\n    border: none;\n    font-family: 'Playfair Display', Georgia, serif;\n    font-size: 1.6rem;\n    font-weight: 600;\n    letter-spacing: 1px;\n    color: #FFFFFF;`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully applied Mild Roasted Mocha & Amber Gold theme!');
