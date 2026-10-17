const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update :root variables
const rootTarget = `:root {
  /* Dark Luxury Obsidian & Warm Gold System */
  --color-canvas: #0B0807;             /* Deep obsidian dark canvas */
  --color-canvas-subtle: #120E0C;      /* Deep roasted espresso surface */
  --color-canvas-alt: #181310;         /* Elevated card surface */
  --color-surface: #15100E;            /* Rich dark walnut surface */
  --color-surface-hover: #1F1814;      /* Elevated hover surface */
  --color-border-warm: rgba(212, 175, 95, 0.28);
  --color-border-subtle: rgba(212, 175, 95, 0.15);
  
  /* Text Tones (High contrast, crisp pure white & champagne) */
  --color-espresso: #FFFFFF;           /* Crisp Pure White for headings */
  --color-mocha: #D2C8BF;              /* Warm Champagne for readable, gentle body copy */
  --color-sand: #9C9084;               /* Muted warm sand for captions & metadata */
  
  /* Radiant Champagne Gold */
  --color-gold: #D4AF37;               /* Classic luxury gold */
  --color-gold-light: #E5C578;         /* Luminous champagne gold */
  --color-gold-dark: #B88E28;          /* Antique burnished gold */
  --color-gold-glow: rgba(212, 175, 95, 0.38);
  --color-gold-subtle: rgba(212, 175, 95, 0.15);

  --color-lavender: #D4AF37;           /* Gold alias */
  --color-lavender-light: #E5C578;
  --color-lavender-dark: #B88E28;
  --color-lavender-glow: rgba(212, 175, 95, 0.38);
  --color-lavender-subtle: rgba(212, 175, 95, 0.15);

  /* Radiant Theme Gradients */
  --gradient-radiant: linear-gradient(135deg, #E5C578 0%, #D4AF37 50%, #B88E28 100%);
  --gradient-radiant-hover: linear-gradient(135deg, #F3D58C 0%, #E0BC48 50%, #A67D1E 100%);
  --gradient-gold: linear-gradient(135deg, #E5C578 0%, #D4AF37 50%, #B88E28 100%);
  --gradient-headline: linear-gradient(135deg, #FFFFFF 0%, #F5ECDA 45%, #E5C578 100%);

  /* Theme Aliases for Full Backward Compatibility */
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
  --color-cream-muted: #D2C8BF;
  --color-cream-dim: #9C9084;
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
  --shadow-hover: 0 20px 45px -8px rgba(212, 175, 95, 0.25);
}`;

const rootReplacement = `:root {
  /* Mild Warm Cream & Ivory Luxury System */
  --color-canvas: #F8F5F0;             /* Mild warm cream canvas */
  --color-canvas-subtle: #F1ECE3;      /* Subtle warm latte surface */
  --color-canvas-alt: #EBE4D8;         /* Elevated warm sand surface */
  --color-surface: #FFFFFF;            /* Pure ivory white card surface */
  --color-surface-hover: #FAF7F2;      /* Elevated hover surface */
  --color-border-warm: rgba(184, 142, 40, 0.22);
  --color-border-subtle: rgba(184, 142, 40, 0.12);
  
  /* Text Tones (Rich roasted espresso & warm cocoa for gentle readability) */
  --color-espresso: #1F1610;           /* Rich roasted espresso for headings */
  --color-mocha: #4A3B32;              /* Warm gentle coffee for body copy */
  --color-sand: #786558;               /* Muted warm taupe for captions & metadata */
  
  /* Radiant Champagne Gold */
  --color-gold: #B88E28;               /* Classic luxury burnished gold */
  --color-gold-light: #D4AF37;         /* Luminous champagne gold */
  --color-gold-dark: #946F18;          /* Antique deep gold */
  --color-gold-glow: rgba(184, 142, 40, 0.25);
  --color-gold-subtle: rgba(184, 142, 40, 0.08);

  --color-lavender: #B88E28;
  --color-lavender-light: #D4AF37;
  --color-lavender-dark: #946F18;
  --color-lavender-glow: rgba(184, 142, 40, 0.25);
  --color-lavender-subtle: rgba(184, 142, 40, 0.08);

  /* Radiant Theme Gradients */
  --gradient-radiant: linear-gradient(135deg, #ECC875 0%, #D4AF37 50%, #B88E28 100%);
  --gradient-radiant-hover: linear-gradient(135deg, #F3D58C 0%, #E0BC48 50%, #A67D1E 100%);
  --gradient-gold: linear-gradient(135deg, #ECC875 0%, #D4AF37 50%, #B88E28 100%);
  --gradient-headline: linear-gradient(135deg, #1F1610 0%, #3B2A20 50%, #B88E28 100%);

  /* Theme Aliases for Full Backward Compatibility */
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
  
  --color-cream: #1F1610;
  --color-cream-muted: #4A3B32;
  --color-cream-dim: #786558;
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
  --shadow-warm: 0 10px 30px -5px rgba(100, 70, 40, 0.08);
  --shadow-card: 0 10px 28px -4px rgba(100, 70, 40, 0.07);
  --shadow-hover: 0 18px 40px -6px rgba(184, 142, 40, 0.2);
}`;

css = css.replace(rootTarget, rootReplacement);

// 2. Update body styling
const bodyTarget = `body {
  font-family: var(--font-body);
  background-color: #0B0807;
  color: var(--color-mocha);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(212, 175, 95, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 85% 65%, rgba(212, 175, 95, 0.06) 0%, transparent 45%),
    linear-gradient(180deg, #0B0807 0%, #100C0A 50%, #090706 100%);
  background-attachment: fixed;
}`;

const bodyReplacement = `body {
  font-family: var(--font-body);
  background-color: #F8F5F0;
  color: var(--color-mocha);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(212, 175, 95, 0.06) 0%, transparent 45%),
    radial-gradient(circle at 85% 65%, rgba(212, 175, 95, 0.05) 0%, transparent 45%),
    linear-gradient(180deg, #F8F5F0 0%, #FAF7F2 50%, #F5F1E8 100%);
  background-attachment: fixed;
}`;

css = css.replace(bodyTarget, bodyReplacement);

// 3. Scrollbar track & thumb
css = css.replace(
  `::-webkit-scrollbar-track {\n  background: var(--color-canvas);\n}`,
  `::-webkit-scrollbar-track {\n  background: #F1ECE3;\n}`
);
css = css.replace(
  `  border: 2px solid var(--color-canvas);`,
  `  border: 2px solid #F1ECE3;`
);

// 4. Update Header solid styling
const headerSolidTarget = `.header.header-solid {
  position: sticky;
  top: 0;
  background-color: rgba(14, 10, 8, 0.94);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(212, 175, 95, 0.22);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  padding: 0.85rem 3rem;
}`;

const headerSolidReplacement = `.header.header-solid {
  position: sticky;
  top: 0;
  background-color: rgba(248, 245, 240, 0.94);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(184, 142, 40, 0.2);
  box-shadow: 0 4px 20px rgba(100, 70, 40, 0.06);
  padding: 0.85rem 3rem;
}

.header.header-solid .brand-name-luxury {
  color: #1F1610;
  text-shadow: none;
}

.header.header-solid .brand-vertical-divider {
  background: rgba(184, 142, 40, 0.35);
}

.header.header-solid .nav-link-btn {
  color: #52433B;
}

.header.header-solid .nav-link-btn:hover {
  color: #B88E28;
}

.header.header-solid .nav-link-btn.active {
  color: #1F1610;
}

.header.header-solid .nav-motto-script {
  color: #B88E28;
  text-shadow: none;
}

.header.header-solid .nav-cta-btn {
  background: linear-gradient(135deg, rgba(184, 142, 40, 0.1) 0%, rgba(184, 142, 40, 0.2) 100%);
  color: #1F1610;
  border: 1px solid rgba(184, 142, 40, 0.35);
}

.header.header-solid .mobile-toggle-btn {
  color: #1F1610;
  border-color: rgba(184, 142, 40, 0.35);
}`;

css = css.replace(headerSolidTarget, headerSolidReplacement);

// 5. Update Feature Strip styling
const featureStripTarget = `.feature-strip {
  background: linear-gradient(135deg, #0E0B09 0%, #15100E 50%, #0A0807 100%);
  border-top: 1px solid rgba(212, 175, 95, 0.15);
  border-bottom: 1px solid rgba(212, 175, 95, 0.15);
  padding: 3.2rem 0;
  position: relative;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1.15rem;
}

.feature-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: #18120F;
  border: 1px solid rgba(212, 175, 95, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E5C578;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition: all var(--transition-fast);
}

.feature-card:hover .feature-icon-box {
  background: linear-gradient(135deg, #ECC875, #B88E28);
  color: #0E0A06;
  border-color: transparent;
  transform: rotate(5deg) scale(1.05);
}

.feature-content h4 {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.35rem;
  letter-spacing: 0.5px;
}

.feature-content p {
  font-size: 0.88rem;
  color: #B8ADA2;
  line-height: 1.55;
}`;

const featureStripReplacement = `.feature-strip {
  background: linear-gradient(135deg, #F4EFE6 0%, #EDE6DA 50%, #F5F1E8 100%);
  border-top: 1px solid rgba(184, 142, 40, 0.18);
  border-bottom: 1px solid rgba(184, 142, 40, 0.18);
  padding: 3.2rem 0;
  position: relative;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1.15rem;
}

.feature-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: #FFFFFF;
  border: 1px solid rgba(184, 142, 40, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B88E28;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(100, 70, 40, 0.08);
  transition: all var(--transition-fast);
}

.feature-card:hover .feature-icon-box {
  background: linear-gradient(135deg, #ECC875, #B88E28);
  color: #1F1610;
  border-color: transparent;
  transform: rotate(5deg) scale(1.05);
}

.feature-content h4 {
  font-size: 1.25rem;
  color: #1F1610;
  margin-bottom: 0.35rem;
  letter-spacing: 0.5px;
}

.feature-content p {
  font-size: 0.88rem;
  color: #5C4C42;
  line-height: 1.55;
}`;

css = css.replace(featureStripTarget, featureStripReplacement);

// 6. Update Showcase Cards
const showcaseCardTarget = `.showcase-card {
  background-color: #140F0D;
  border: 1px solid rgba(212, 175, 95, 0.2);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}

.showcase-card:hover {
  transform: translateY(-8px);
  background-color: #1A1411;
  border-color: #D4AF37;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(212, 175, 95, 0.2);
}`;

const showcaseCardReplacement = `.showcase-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(184, 142, 40, 0.2);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(100, 70, 40, 0.08);
  transition: all var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}

.showcase-card:hover {
  transform: translateY(-8px);
  background-color: #FFFFFF;
  border-color: #B88E28;
  box-shadow: 0 18px 45px rgba(100, 70, 40, 0.15), 0 0 25px rgba(184, 142, 40, 0.15);
}`;

css = css.replace(showcaseCardTarget, showcaseCardReplacement);

css = css.replace(
  `.showcase-body h3 {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  color: #FFFFFF;\n  line-height: 1.2;\n}`,
  `.showcase-body h3 {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  color: #1F1610;\n  line-height: 1.2;\n}`
);

css = css.replace(
  `.showcase-desc {\n  font-size: 0.9rem;\n  color: #B8ADA2;\n  line-height: 1.55;\n  margin-bottom: 1.25rem;\n  flex: 1;\n}`,
  `.showcase-desc {\n  font-size: 0.9rem;\n  color: #5C4C42;\n  line-height: 1.55;\n  margin-bottom: 1.25rem;\n  flex: 1;\n}`
);

css = css.replace(
  `.showcase-price {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  background: linear-gradient(135deg, #F3DEAB 0%, #D4AF37 60%, #B88E28 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}`,
  `.showcase-price {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  color: #B88E28;\n  -webkit-text-fill-color: #B88E28;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  `.showcase-view-link {\n  color: #E8DCCF;\n`,
  `.showcase-view-link {\n  color: #B88E28;\n`
);

// 7. Update Testimonial Cards
const testimonialTarget = `.testimonial-card {
  background-color: #140F0D;
  border: 1px solid rgba(212, 175, 95, 0.2);
  border-radius: var(--radius-md);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.testimonial-card:hover {
  border-color: #D4AF37;
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 95, 0.2);
}

.testimonial-stars {
  color: #D4AF37;
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.05rem;
  color: #FFFFFF;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(212, 175, 95, 0.12);
  border: 1.5px solid rgba(212, 175, 95, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: #E5C578;
}

.author-info h4 {
  font-size: 1.15rem;
  color: #FFFFFF;
  line-height: 1;
}

.author-info p {
  font-size: 0.78rem;
  color: #D4AF37;
  text-transform: uppercase;
  letter-spacing: 1px;
}`;

const testimonialReplacement = `.testimonial-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(184, 142, 40, 0.2);
  border-radius: var(--radius-md);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 8px 24px rgba(100, 70, 40, 0.07);
}

.testimonial-card:hover {
  border-color: #B88E28;
  transform: translateY(-5px);
  box-shadow: 0 16px 36px rgba(100, 70, 40, 0.12), 0 0 20px rgba(184, 142, 40, 0.15);
}

.testimonial-stars {
  color: #B88E28;
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.05rem;
  color: #2A1C14;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(184, 142, 40, 0.12);
  border: 1.5px solid rgba(184, 142, 40, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: #B88E28;
}

.author-info h4 {
  font-size: 1.15rem;
  color: #1F1610;
  line-height: 1;
}

.author-info p {
  font-size: 0.78rem;
  color: #B88E28;
  text-transform: uppercase;
  letter-spacing: 1px;
}`;

css = css.replace(testimonialTarget, testimonialReplacement);

// 8. Update Menu filter pills & food cards
css = css.replace(
  `.category-pill-btn {\n  background: rgba(22, 16, 13, 0.75);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(212, 175, 95, 0.22);\n  color: #D2C8BF;`,
  `.category-pill-btn {\n  background: #FFFFFF;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(184, 142, 40, 0.25);\n  color: #52433B;`
);

css = css.replace(
  `.category-pill-btn:hover {\n  border-color: #D4AF37;\n  color: #FFFFFF;\n  background: rgba(212, 175, 95, 0.16);`,
  `.category-pill-btn:hover {\n  border-color: #B88E28;\n  color: #1F1610;\n  background: #FAF5ED;`
);

css = css.replace(
  `.search-input-box input {\n  width: 100%;\n  background-color: rgba(22, 16, 13, 0.85);`,
  `.search-input-box input {\n  width: 100%;\n  background-color: #FFFFFF;`
);

css = css.replace(
  `  border: 1px solid rgba(212, 175, 95, 0.28);\n  border-radius: var(--radius-full);\n  padding: 0.65rem 1.2rem 0.65rem 2.6rem;\n  color: #FFFFFF;`,
  `  border: 1px solid rgba(184, 142, 40, 0.28);\n  border-radius: var(--radius-full);\n  padding: 0.65rem 1.2rem 0.65rem 2.6rem;\n  color: #1F1610;`
);

css = css.replace(
  `.diet-toggle-btn {\n  background: rgba(22, 16, 13, 0.75);`,
  `.diet-toggle-btn {\n  background: #FFFFFF;`
);

css = css.replace(
  `  border: 1px solid rgba(212, 175, 95, 0.22);\n  color: #D2C8BF;`,
  `  border: 1px solid rgba(184, 142, 40, 0.25);\n  color: #52433B;`
);

css = css.replace(
  `.diet-toggle-btn:hover {\n  border-color: #D4AF37;\n  color: #FFFFFF;`,
  `.diet-toggle-btn:hover {\n  border-color: #B88E28;\n  color: #1F1610;\n  background: #FAF5ED;`
);

css = css.replace(
  `.diet-toggle-btn.active {\n  border-color: #D4AF37;\n  color: #FFFFFF;\n  background-color: rgba(212, 175, 95, 0.18);`,
  `.diet-toggle-btn.active {\n  border-color: #B88E28;\n  color: #1F1610;\n  background-color: #FAF5ED;`
);

// 9. Menu Food Cards
css = css.replace(
  `.menu-food-card {\n  background: rgba(22, 16, 14, 0.85);\n  backdrop-filter: blur(18px);\n  -webkit-backdrop-filter: blur(18px);\n  border: 1px solid rgba(212, 175, 95, 0.22);`,
  `.menu-food-card {\n  background: #FFFFFF;\n  backdrop-filter: blur(18px);\n  -webkit-backdrop-filter: blur(18px);\n  border: 1px solid rgba(184, 142, 40, 0.2);`
);

css = css.replace(
  `  box-shadow: 0 12px 32px -6px rgba(0, 0, 0, 0.7);`,
  `  box-shadow: 0 10px 28px -4px rgba(100, 70, 40, 0.08);`
);

css = css.replace(
  `.card-details-box h3 {\n  font-family: var(--font-heading);\n  font-size: 1.35rem;\n  color: #FFFFFF;\n  line-height: 1.2;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}`,
  `.card-details-box h3 {\n  font-family: var(--font-heading);\n  font-size: 1.35rem;\n  color: #1F1610;\n  line-height: 1.2;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}`
);

css = css.replace(
  `.card-price-tag {\n  font-family: var(--font-heading);\n  font-size: 1.85rem;\n  background: linear-gradient(135deg, #FFFFFF 0%, #F5ECDA 35%, #E5C578 70%, #D4AF37 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  font-weight: 700;\n  filter: drop-shadow(0 2px 8px rgba(212, 175, 95, 0.25));\n}`,
  `.card-price-tag {\n  font-family: var(--font-heading);\n  font-size: 1.85rem;\n  color: #B88E28;\n  -webkit-text-fill-color: #B88E28;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  font-weight: 700;\n}`
);

// 10. Update Site Footer styling
const footerTarget = `.site-footer {
  background: linear-gradient(135deg, #0E0A08 0%, #18120F 50%, #090705 100%);
  border-top: 1px solid rgba(212, 175, 95, 0.18);
  padding: 5rem 0 2rem;
  margin-top: auto;
  position: relative;
}

.footer-top-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 0.5rem;
}

.footer-logo-img {
  width: 58px;
  height: 58px;
  object-fit: contain;
  filter: drop-shadow(0 3px 12px rgba(212, 175, 95, 0.45));
}

.footer-brand h2 {
  font-size: 2.2rem;
  background: linear-gradient(135deg, #F3DEAB 0%, #FFFFFF 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  margin-bottom: 0.35rem;
}

.footer-brand .footer-tagline {
  font-family: var(--font-accent);
  font-style: italic;
  color: #E5C578;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
}

.footer-brand p {
  color: #B8ADA2;
  font-size: 0.88rem;
  line-height: 1.6;
}

.footer-col h4 {
  font-size: 1.35rem;
  color: #FFFFFF;
  margin-bottom: 1.25rem;
  letter-spacing: 1.2px;
}

.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link-btn {
  background: none;
  border: none;
  color: #B8ADA2;
  font-size: 0.92rem;
  cursor: pointer;
  padding: 0;
  text-align: left;
  transition: color var(--transition-fast);
}

.footer-link-btn:hover {
  color: #D4AF37;
  padding-left: 4px;
}

.footer-social-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.social-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 95, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E8DED3;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.social-icon-btn:hover {
  background: linear-gradient(135deg, #ECC875, #B88E28);
  color: #0E0A06;
  transform: translateY(-3px);
  border-color: transparent;
}`;

const footerReplacement = `.site-footer {
  background: linear-gradient(135deg, #F0ECE4 0%, #E8E2D6 50%, #EDE7DD 100%);
  border-top: 1px solid rgba(184, 142, 40, 0.22);
  padding: 5rem 0 2rem;
  margin-top: auto;
  position: relative;
}

.footer-top-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 0.5rem;
}

.footer-logo-img {
  width: 58px;
  height: 58px;
  object-fit: contain;
  filter: drop-shadow(0 3px 12px rgba(184, 142, 40, 0.35));
}

.footer-brand h2 {
  font-size: 2.2rem;
  color: #1F1610;
  -webkit-text-fill-color: #1F1610;
  letter-spacing: 2px;
  margin-bottom: 0.35rem;
}

.footer-brand .footer-tagline {
  font-family: var(--font-accent);
  font-style: italic;
  color: #B88E28;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
}

.footer-brand p {
  color: #5C4C42;
  font-size: 0.88rem;
  line-height: 1.6;
}

.footer-col h4 {
  font-size: 1.35rem;
  color: #1F1610;
  margin-bottom: 1.25rem;
  letter-spacing: 1.2px;
}

.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link-btn {
  background: none;
  border: none;
  color: #5C4C42;
  font-size: 0.92rem;
  cursor: pointer;
  padding: 0;
  text-align: left;
  transition: color var(--transition-fast);
}

.footer-link-btn:hover {
  color: #B88E28;
  padding-left: 4px;
}

.footer-social-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.social-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFFFFF;
  border: 1px solid rgba(184, 142, 40, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B88E28;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(100, 70, 40, 0.06);
  transition: all var(--transition-fast);
}

.social-icon-btn:hover {
  background: linear-gradient(135deg, #ECC875, #B88E28);
  color: #1F1610;
  transform: translateY(-3px);
  border-color: transparent;
}`;

css = css.replace(footerTarget, footerReplacement);

// 11. Mobile menu overlay
css = css.replace(
  `background-color: rgba(24, 13, 34, 0.97);`,
  `background-color: rgba(248, 245, 240, 0.98);`
);
css = css.replace(
  `border-top: 1px solid rgba(184, 147, 232, 0.25);`,
  `border-top: 1px solid rgba(184, 142, 40, 0.2);`
);
css = css.replace(
  `color: #E8DFF5;\n    text-align: left;\n    cursor: pointer;\n    padding: 0.6rem 0;\n    border-bottom: 1px solid rgba(184, 147, 232, 0.15);`,
  `color: #1F1610;\n    text-align: left;\n    cursor: pointer;\n    padding: 0.6rem 0;\n    border-bottom: 1px solid rgba(184, 142, 40, 0.15);`
);
css = css.replace(
  `.mobile-nav-link.active {\n    color: #DFCA95;`,
  `.mobile-nav-link.active {\n    color: #B88E28;`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated index.css to Mild Warm Cream & Ivory theme!');
