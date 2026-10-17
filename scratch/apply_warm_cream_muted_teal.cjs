const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update :root variables with exact reference palette
const rootRegex = /:root\s*\{[\s\S]*?--shadow-hover:[^;]+;\s*\}/;

const rootReplacement = `:root {
  /* Warm Modern Cozy Palette (Reference: Core Cafe Aesthetic)
     1. Warm Cream   : #F6E8C8
     2. Muted Teal   : #2F7775
     3. Golden Honey : #E2B46C
     4. Caramel Beige: #CC9D59
     5. Sage Green   : #536B55
     6. Coffee Brown : #714310
     7. Soft Vanilla : #FCEDC4
  */
  --color-canvas: #F6E8C8;             /* 1. Warm Cream primary canvas */
  --color-canvas-subtle: #FCEDC4;      /* 7. Soft Vanilla elevated surface */
  --color-canvas-alt: #EEDCB8;         /* Warm cream accent surface */
  --color-surface: #FCEDC4;            /* 7. Soft Vanilla card surface */
  --color-surface-hover: #FFF6E0;      /* Elevated card hover surface */
  
  /* Signature Muted Teal Accent */
  --color-teal: #2F7775;               /* 2. Muted Teal */
  --color-teal-dark: #225957;
  --color-teal-light: #448E8C;
  --color-teal-glow: rgba(47, 119, 117, 0.28);
  --color-border-teal: rgba(47, 119, 117, 0.35);

  /* Warm Lighting & Accents */
  --color-honey: #E2B46C;              /* 3. Golden Honey */
  --color-caramel: #CC9D59;            /* 4. Caramel Beige */
  --color-sage: #536B55;               /* 5. Sage Green */
  --color-coffee: #714310;             /* 6. Coffee Brown */
  
  --color-border-warm: rgba(204, 157, 89, 0.35);
  --color-border-subtle: rgba(204, 157, 89, 0.18);
  
  /* Text Tones */
  --color-espresso: #4A2808;           /* Deep roasted coffee for headings */
  --color-mocha: #5A3B18;              /* Warm rich coffee for body copy */
  --color-sand: #8A6E4B;               /* Caramel-sand for metadata */
  
  /* Gold & Caramel */
  --color-gold: #CC9D59;
  --color-gold-light: #E2B46C;
  --color-gold-dark: #714310;
  --color-gold-glow: rgba(226, 180, 108, 0.35);
  --color-gold-subtle: rgba(226, 180, 108, 0.15);

  --color-lavender: #2F7775;
  --color-lavender-light: #448E8C;
  --color-lavender-dark: #225957;
  --color-lavender-glow: rgba(47, 119, 117, 0.28);
  --color-lavender-subtle: rgba(47, 119, 117, 0.12);

  /* Gradients */
  --gradient-radiant: linear-gradient(135deg, #E2B46C 0%, #CC9D59 50%, #714310 100%);
  --gradient-teal: linear-gradient(135deg, #448E8C 0%, #2F7775 100%);
  --gradient-gold: linear-gradient(135deg, #E2B46C 0%, #CC9D59 100%);
  --gradient-headline: linear-gradient(135deg, #4A2808 0%, #714310 50%, #2F7775 100%);

  /* Theme Aliases */
  --color-caramel-hover: #714310;
  --color-caramel-glow: var(--color-gold-glow);
  --color-caramel-subtle: var(--color-gold-subtle);
  
  --color-burgundy: var(--color-teal);
  --color-burgundy-dark: var(--color-espresso);
  --color-burgundy-deep: var(--color-canvas);
  
  --color-copper: var(--color-honey);
  --color-copper-hover: var(--color-caramel);
  --color-copper-glow: var(--color-gold-glow);
  --color-copper-subtle: var(--color-gold-subtle);
  
  --color-cream: #4A2808;
  --color-cream-muted: #5A3B18;
  --color-cream-dim: #8A6E4B;
  --color-charcoal: var(--color-surface);
  --color-charcoal-light: var(--color-canvas-subtle);

  /* Indian Veg/Non-Veg Indicators */
  --color-veg: #536B55;                /* Sage Green veg indicator */
  --color-nonveg: #b91c1c;

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
  --shadow-warm: 0 10px 30px -5px rgba(113, 67, 16, 0.08);
  --shadow-card: 0 12px 32px -6px rgba(113, 67, 16, 0.09);
  --shadow-hover: 0 20px 45px -8px rgba(47, 119, 117, 0.25);
}`;

css = css.replace(rootRegex, rootReplacement);

// 2. body: Warm Cream #F6E8C8 with soft golden lighting ambient gradient
const bodyRegex = /body\s*\{[\s\S]*?background-attachment:\s*fixed;\s*\}/;
const bodyReplacement = `body {
  font-family: var(--font-body);
  background-color: #F6E8C8;
  color: var(--color-mocha);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(226, 180, 108, 0.25) 0%, transparent 50%),
    radial-gradient(circle at 85% 65%, rgba(47, 119, 117, 0.1) 0%, transparent 45%),
    linear-gradient(180deg, #F6E8C8 0%, #FAEFD4 50%, #F4E4BF 100%);
  background-attachment: fixed;
}`;

css = css.replace(bodyRegex, bodyReplacement);

// 3. Scrollbar
css = css.replace(
  /::-webkit-scrollbar-track\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-track {\n  background: #EEDCB8;\n}`
);
css = css.replace(
  /::-webkit-scrollbar-thumb\s*\{[\s\S]*?\}/,
  `::-webkit-scrollbar-thumb {\n  background: linear-gradient(to bottom, #E2B46C, #2F7775);\n  border-radius: var(--radius-full);\n  border: 2px solid #EEDCB8;\n}`
);

// 4. Header solid: Warm Cream with Muted Teal accents
const headerSolidRegex = /\.header\.header-solid\s*\{[\s\S]*?padding:\s*0\.85rem\s*3rem;\s*\}/;
const headerSolidReplacement = `.header.header-solid {
  position: sticky;
  top: 0;
  background-color: rgba(246, 232, 200, 0.96);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 2px solid rgba(47, 119, 117, 0.22);
  box-shadow: 0 6px 24px rgba(113, 67, 16, 0.08);
  padding: 0.85rem 3rem;
}`;
css = css.replace(headerSolidRegex, headerSolidReplacement);

css = css.replace(
  /\.header\.header-solid \.brand-name-luxury\s*\{[^}]*\}/g,
  `.header.header-solid .brand-name-luxury { color: #4A2808; text-shadow: none; }`
);
css = css.replace(
  /\.header\.header-solid \.brand-vertical-divider\s*\{[^}]*\}/g,
  `.header.header-solid .brand-vertical-divider { background: rgba(47, 119, 117, 0.4); }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn { color: #5A3B18; font-weight: 500; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn:hover\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn:hover { color: #2F7775; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-link-btn\.active\s*\{[^}]*\}/g,
  `.header.header-solid .nav-link-btn.active { color: #2F7775; font-weight: 700; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-motto-script\s*\{[^}]*\}/g,
  `.header.header-solid .nav-motto-script { color: #2F7775; text-shadow: none; }`
);
css = css.replace(
  /\.header\.header-solid \.nav-cta-btn\s*\{[^}]*\}/g,
  `.header.header-solid .nav-cta-btn { background: #2F7775; color: #FCEDC4; border: 1px solid #2F7775; font-weight: 600; }`
);
css = css.replace(
  /\.header\.header-solid \.mobile-toggle-btn\s*\{[^}]*\}/g,
  `.header.header-solid .mobile-toggle-btn { color: #2F7775; border-color: rgba(47, 119, 117, 0.35); }`
);

// Active indicator line on navbar
css = css.replace(
  /\.nav-link-btn\.active::after\s*\{[\s\S]*?\}/,
  `.nav-link-btn.active::after {\n  content: '';\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #2F7775;\n  border-radius: 2px;\n  box-shadow: 0 0 8px rgba(47, 119, 117, 0.5);\n}`
);

// 5. Section titles: Coffee Brown & Caramel Beige
css = css.replace(
  /\.section-pretitle\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-pretitle {\n  display: inline-block;\n  font-family: var(--font-accent);\n  font-size: 1.15rem;\n  font-style: italic;\n  color: #CC9D59;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.section-title\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.section-title {\n  font-family: var(--font-heading);\n  font-size: clamp(2.4rem, 5vw, 3.8rem);\n  line-height: 1.1;\n  color: #4A2808;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.section-subtitle\s*\{[\s\S]*?line-height:\s*1\.65;\s*\}/,
  `.section-subtitle {\n  max-width: 620px;\n  margin: 0.75rem auto 0;\n  color: #5A3B18;\n  font-size: 1.02rem;\n  line-height: 1.65;\n}`
);

// 6. Feature strip: Soft Vanilla surface with Muted Teal icons
const featureStripRegex = /\.feature-strip\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const featureStripReplacement = `.feature-strip {
  background: linear-gradient(135deg, #FCEDC4 0%, #F6E8C8 50%, #EEDCB5 100%);
  border-top: 1.5px solid rgba(204, 157, 89, 0.3);
  border-bottom: 1.5px solid rgba(204, 157, 89, 0.3);
  padding: 3.2rem 0;
  position: relative;
}`;
css = css.replace(featureStripRegex, featureStripReplacement);

css = css.replace(
  /\.feature-icon-box\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.feature-icon-box {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  background: #2F7775;\n  border: 1px solid rgba(226, 180, 108, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FCEDC4;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(47, 119, 117, 0.25);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.feature-card:hover \.feature-icon-box\s*\{[\s\S]*?\}/,
  `.feature-card:hover .feature-icon-box {\n  background: #E2B46C;\n  color: #4A2808;\n  border-color: #714310;\n  transform: rotate(5deg) scale(1.05);\n}`
);

css = css.replace(
  /\.feature-content h4\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.feature-content h4 {\n  font-size: 1.25rem;\n  color: #4A2808;\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.feature-content p\s*\{[\s\S]*?line-height:\s*1\.55;\s*\}/,
  `.feature-content p {\n  font-size: 0.88rem;\n  color: #5A3B18;\n  line-height: 1.55;\n}`
);

// 7. Showcase cards: Soft Vanilla with Muted Teal & Caramel Beige
const showcaseCardRegex = /\.showcase-card\s*\{[\s\S]*?flex-direction:\s*column;\s*\}/;
const showcaseCardReplacement = `.showcase-card {
  background-color: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
  transition: all var(--transition-smooth);
  position: relative;
  display: flex;
  flex-direction: column;
}`;
css = css.replace(showcaseCardRegex, showcaseCardReplacement);

css = css.replace(
  /\.showcase-card:hover\s*\{[\s\S]*?\}\s*(?!\.showcase)/,
  `.showcase-card:hover {\n  transform: translateY(-8px);\n  background-color: #FFF6E0;\n  border-color: #2F7775;\n  box-shadow: 0 18px 45px rgba(47, 119, 117, 0.2);\n}\n`
);

css = css.replace(
  /\.showcase-body h3\s*\{[\s\S]*?line-height:\s*1\.2;\s*\}/,
  `.showcase-body h3 {\n  font-family: var(--font-heading);\n  font-size: 1.45rem;\n  color: #4A2808;\n  line-height: 1.2;\n}`
);

css = css.replace(
  /\.showcase-price\s*\{[\s\S]*?letter-spacing:\s*0\.5px;\s*\}/,
  `.showcase-price {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  color: #714310;\n  -webkit-text-fill-color: #714310;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}`
);

css = css.replace(
  /\.showcase-view-link\s*\{[\s\S]*?cursor:\s*pointer;\s*\}/,
  `.showcase-view-link {\n  color: #2F7775;\n  font-size: 0.86rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n}`
);

css = css.replace(
  /\.badge-pill\.gold\s*\{[\s\S]*?\}/,
  `.badge-pill.gold {\n  background-color: #2F7775;\n  color: #FCEDC4;\n  border: 1px solid #2F7775;\n}`
);

css = css.replace(
  /\.badge-pill\.red,\s*\.badge-pill\.copper\s*\{[\s\S]*?\}/,
  `.badge-pill.red,\n.badge-pill.copper {\n  background: #CC9D59;\n  color: #4A2808;\n  font-weight: 700;\n}`
);

// 8. Testimonials
const testimonialRegex = /\.testimonial-card\s*\{[\s\S]*?box-shadow:\s*[^;]+;\s*\}/;
const testimonialReplacement = `.testimonial-card {
  background-color: #FCEDC4;
  border: 1.5px solid rgba(47, 119, 117, 0.25);
  border-radius: var(--radius-md);
  padding: 2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
}`;
css = css.replace(testimonialRegex, testimonialReplacement);

css = css.replace(
  /\.testimonial-card:hover\s*\{[\s\S]*?\}\s*(?!\.testimonial)/,
  `.testimonial-card:hover {\n  border-color: #2F7775;\n  transform: translateY(-5px);\n  box-shadow: 0 16px 36px rgba(47, 119, 117, 0.2);\n}\n`
);

css = css.replace(
  /\.testimonial-stars\s*\{[\s\S]*?margin-bottom:\s*1rem;\s*\}/,
  `.testimonial-stars {\n  color: #E2B46C;\n  display: flex;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n}`
);

css = css.replace(
  /\.testimonial-text\s*\{[\s\S]*?margin-bottom:\s*1\.5rem;\s*\}/,
  `.testimonial-text {\n  font-family: var(--font-accent);\n  font-style: italic;\n  font-size: 1.05rem;\n  color: #4A2808;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}`
);

css = css.replace(
  /\.author-avatar\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.author-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #2F7775;\n  border: 1.5px solid #E2B46C;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  color: #FCEDC4;\n}`
);

css = css.replace(
  /\.author-info h4\s*\{[\s\S]*?line-height:\s*1;\s*\}/,
  `.author-info h4 {\n  font-size: 1.15rem;\n  color: #4A2808;\n  line-height: 1;\n}`
);

css = css.replace(
  /\.author-info p\s*\{[\s\S]*?letter-spacing:\s*1px;\s*\}/,
  `.author-info p {\n  font-size: 0.78rem;\n  color: #2F7775;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n}`
);

// 9. Visit Banner: Signature Muted Teal luxury container with Golden Honey accents
const visitBannerRegex = /\.visit-banner\s*\{[\s\S]*?overflow:\s*hidden;\s*\}/;
const visitBannerReplacement = `.visit-banner {
  background: linear-gradient(135deg, #2F7775 0%, #245E5C 50%, #1A4645 100%);
  border: 2px solid #E2B46C;
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  margin: 3rem auto 6rem;
  box-shadow: 0 20px 60px rgba(47, 119, 117, 0.35), 0 0 40px rgba(226, 180, 108, 0.2);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;
}`;
css = css.replace(visitBannerRegex, visitBannerReplacement);

css = css.replace(
  /\.visit-banner h2\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.visit-banner h2 {\n  font-size: clamp(2.4rem, 4vw, 3.5rem);\n  line-height: 1.05;\n  margin-bottom: 0.8rem;\n  color: #FCEDC4;\n}`
);

css = css.replace(
  /\.visit-banner p\s*\{[\s\S]*?max-width:\s*500px;\s*\}/,
  `.visit-banner p {\n  color: #F6E8C8;\n  font-size: 1rem;\n  margin-bottom: 1.8rem;\n  max-width: 500px;\n}`
);

css = css.replace(
  /\.visit-details-box\s*\{[\s\S]*?gap:\s*1\.2rem;\s*\}/,
  `.visit-details-box {\n  background-color: rgba(252, 237, 196, 0.12);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(226, 180, 108, 0.4);\n  border-radius: var(--radius-md);\n  padding: 1.8rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}`
);

css = css.replace(
  /\.visit-detail-row svg\s*\{[\s\S]*?margin-top:\s*0\.2rem;\s*\}/,
  `.visit-detail-row svg {\n  color: #E2B46C;\n  flex-shrink: 0;\n  margin-top: 0.2rem;\n}`
);

css = css.replace(
  /\.visit-detail-row h5\s*\{[\s\S]*?margin-bottom:\s*0\.15rem;\s*\}/,
  `.visit-detail-row h5 {\n  font-size: 1.05rem;\n  color: #FCEDC4;\n  margin-bottom: 0.15rem;\n}`
);

css = css.replace(
  /\.visit-detail-row p\s*\{[\s\S]*?margin-bottom:\s*0;\s*\}/,
  `.visit-detail-row p {\n  font-size: 0.85rem;\n  color: #F6E8C8;\n  margin-bottom: 0;\n}`
);

// Primary button styling
css = css.replace(
  /\.btn-primary\s*\{[\s\S]*?text-decoration:\s*none;\s*\}/,
  `.btn-primary {\n  background: linear-gradient(135deg, #CC9D59 0%, #E2B46C 50%, #714310 100%);\n  color: #FCEDC4;\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  padding: 0.85rem 2.2rem;\n  border-radius: var(--radius-full);\n  border: 1px solid #E2B46C;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  transition: all var(--transition-fast);\n  box-shadow: 0 6px 22px rgba(113, 67, 16, 0.25);\n  text-decoration: none;\n}`
);

// 10. Site Footer
const footerRegex = /\.site-footer\s*\{[\s\S]*?position:\s*relative;\s*\}/;
const footerReplacement = `.site-footer {
  background: linear-gradient(135deg, #EAD9B4 0%, #E4CF9F 50%, #DECA94 100%);
  border-top: 2px solid rgba(47, 119, 117, 0.25);
  padding: 5rem 0 2rem;
  margin-top: auto;
  position: relative;
}`;
css = css.replace(footerRegex, footerReplacement);

css = css.replace(
  /\.footer-brand h2\s*\{[\s\S]*?margin-bottom:\s*0\.35rem;\s*\}/,
  `.footer-brand h2 {\n  font-size: 2.2rem;\n  color: #4A2808;\n  -webkit-text-fill-color: #4A2808;\n  letter-spacing: 2px;\n  margin-bottom: 0.35rem;\n}`
);

css = css.replace(
  /\.footer-brand \.footer-tagline\s*\{[\s\S]*?margin-bottom:\s*1\.25rem;\s*\}/,
  `.footer-brand .footer-tagline {\n  font-family: var(--font-accent);\n  font-style: italic;\n  color: #2F7775;\n  font-size: 1.05rem;\n  margin-bottom: 1.25rem;\n  font-weight: 600;\n}`
);

css = css.replace(
  /\.footer-brand p\s*\{[\s\S]*?line-height:\s*1\.6;\s*\}/,
  `.footer-brand p {\n  color: #5A3B18;\n  font-size: 0.88rem;\n  line-height: 1.6;\n}`
);

css = css.replace(
  /\.footer-col h4\s*\{[\s\S]*?letter-spacing:\s*1\.2px;\s*\}/,
  `.footer-col h4 {\n  font-size: 1.35rem;\n  color: #4A2808;\n  margin-bottom: 1.25rem;\n  letter-spacing: 1.2px;\n}`
);

css = css.replace(
  /\.footer-link-btn\s*\{[\s\S]*?transition:\s*color var\(--transition-fast\);\s*\}/,
  `.footer-link-btn {\n  background: none;\n  border: none;\n  color: #5A3B18;\n  font-size: 0.92rem;\n  cursor: pointer;\n  padding: 0;\n  text-align: left;\n  transition: color var(--transition-fast);\n}`
);

css = css.replace(
  /\.footer-link-btn:hover\s*\{[\s\S]*?\}/,
  `.footer-link-btn:hover {\n  color: #2F7775;\n  padding-left: 4px;\n}`
);

css = css.replace(
  /\.social-icon-btn\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.social-icon-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #2F7775;\n  border: 1px solid #E2B46C;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FCEDC4;\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(47, 119, 117, 0.25);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.social-icon-btn:hover\s*\{[\s\S]*?\}/,
  `.social-icon-btn:hover {\n  background: #E2B46C;\n  color: #4A2808;\n  transform: translateY(-3px);\n  border-color: #714310;\n}`
);

css = css.replace(
  /\.footer-bottom-bar\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.footer-bottom-bar {\n  padding-top: 2rem;\n  border-top: 1.5px solid rgba(47, 119, 117, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.82rem;\n  color: #8A6E4B;\n}`
);

// 11. Refined Menu Page Styles with Warm Cream & Muted Teal
css = css.replace(
  /\.menu-tab-btn\s*\{[\s\S]*?box-shadow:\s*0\s*2px\s*8px[^;]+;\s*\}/,
  `.menu-tab-btn {\n  background: rgba(252, 237, 196, 0.85);\n  border: 1.5px solid rgba(204, 157, 89, 0.35);\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  font-weight: 500;\n  color: #5A3B18;\n  padding: 0.55rem 1.25rem;\n  border-radius: var(--radius-full);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all var(--transition-fast);\n  box-shadow: 0 2px 8px rgba(113, 67, 16, 0.05);\n}`
);

css = css.replace(
  /\.menu-tab-btn:hover\s*\{[\s\S]*?\}/,
  `.menu-tab-btn:hover {\n  background: #FCEDC4;\n  color: #2F7775;\n  border-color: #2F7775;\n  transform: translateY(-1px);\n}`
);

css = css.replace(
  /\.menu-tab-btn\.active\s*\{[\s\S]*?\}/,
  `.menu-tab-btn.active {\n  background: #2F7775;\n  color: #FCEDC4;\n  border-color: #2F7775;\n  font-weight: 700;\n  box-shadow: 0 4px 16px rgba(47, 119, 117, 0.35);\n}`
);

css = css.replace(
  /\.menu-search-icon\s*\{[\s\S]*?color:\s*[^;]+;\s*\}/,
  `.menu-search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #2F7775;\n}`
);

css = css.replace(
  /\.menu-search-pill input\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.menu-search-pill input {\n  width: 100%;\n  background: #FCEDC4;\n  border: 1.5px solid rgba(204, 157, 89, 0.35);\n  border-radius: var(--radius-full);\n  padding: 0.68rem 2.4rem 0.68rem 2.6rem;\n  color: #4A2808;\n  font-size: 0.92rem;\n  font-family: var(--font-body);\n  outline: none;\n  box-shadow: 0 2px 10px rgba(113, 67, 16, 0.05);\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.menu-search-pill input:focus\s*\{[\s\S]*?\}/,
  `.menu-search-pill input:focus {\n  border-color: #2F7775;\n  box-shadow: 0 0 0 3px rgba(47, 119, 117, 0.2);\n  background: #FFFFFF;\n}`
);

css = css.replace(
  /\.menu-diet-segmented\s*\{[\s\S]*?gap:\s*0\.25rem;\s*\}/,
  `.menu-diet-segmented {\n  display: inline-flex;\n  align-items: center;\n  background: rgba(238, 220, 184, 0.8);\n  padding: 0.3rem;\n  border-radius: var(--radius-full);\n  border: 1.5px solid rgba(204, 157, 89, 0.3);\n  gap: 0.25rem;\n}`
);

css = css.replace(
  /\.diet-seg-btn\s*\{[\s\S]*?transition:\s*all var\(--transition-fast\);\s*\}/,
  `.diet-seg-btn {\n  background: transparent;\n  border: none;\n  padding: 0.45rem 1.1rem;\n  border-radius: var(--radius-full);\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #5A3B18;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all var(--transition-fast);\n}`
);

css = css.replace(
  /\.diet-seg-btn:hover\s*\{[\s\S]*?\}/,
  `.diet-seg-btn:hover {\n  color: #2F7775;\n}`
);

css = css.replace(
  /\.diet-seg-btn\.active\s*\{[\s\S]*?\}/,
  `.diet-seg-btn.active {\n  background: #2F7775;\n  color: #FCEDC4;\n  font-weight: 700;\n  box-shadow: 0 2px 10px rgba(47, 119, 117, 0.3);\n}`
);

css = css.replace(
  /\.dot-veg\s*\{[\s\S]*?\}/,
  `.dot-veg {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #536B55;\n}`
);

css = css.replace(
  /\.menu-meta-status\s*\{[\s\S]*?text-align:\s*center;\s*\}/,
  `.menu-meta-status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2.2rem;\n  font-size: 0.95rem;\n  color: #8A6E4B;\n  text-align: center;\n}`
);

css = css.replace(
  /\.menu-meta-status strong\s*\{[\s\S]*?\}/,
  `.menu-meta-status strong {\n  color: #4A2808;\n}`
);

// Menu Cards
css = css.replace(
  /\.menu-card-aesthetic\s*\{[\s\S]*?box-shadow:\s*0\s*8px\s*24px[^;]+;\s*\}/,
  `.menu-card-aesthetic {\n  background: #FCEDC4;\n  border: 1.5px solid rgba(204, 157, 89, 0.35);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: 0 8px 24px rgba(113, 67, 16, 0.08);\n}`
);

css = css.replace(
  /\.menu-card-aesthetic:hover\s*\{[\s\S]*?\}\s*(?!\.menu-card)/,
  `.menu-card-aesthetic:hover {\n  transform: translateY(-6px);\n  border-color: #2F7775;\n  background: #FFF8E6;\n  box-shadow: 0 16px 38px rgba(47, 119, 117, 0.2);\n}\n`
);

css = css.replace(
  /\.category-pill-tag\s*\{[\s\S]*?border-radius:\s*var\(--radius-sm\);\s*\}/,
  `.category-pill-tag {\n  background: #2F7775;\n  color: #FCEDC4;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  padding: 0.28rem 0.65rem;\n  border-radius: var(--radius-sm);\n}`
);

css = css.replace(
  /\.special-pill-tag\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*12px[^;]+;\s*\}/,
  `.special-pill-tag {\n  background: #CC9D59;\n  color: #4A2808;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  padding: 0.28rem 0.65rem;\n  border-radius: var(--radius-sm);\n  box-shadow: 0 4px 12px rgba(204, 157, 89, 0.4);\n}`
);

css = css.replace(
  /\.card-dish-name\s*\{[\s\S]*?letter-spacing:\s*0\.3px;\s*\}/,
  `.card-dish-name {\n  font-family: var(--font-heading);\n  font-size: 1.35rem;\n  color: #4A2808;\n  line-height: 1.25;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n}`
);

css = css.replace(
  /\.card-price-display\s*\{[\s\S]*?white-space:\s*nowrap;\s*\}/,
  `.card-price-display {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  color: #714310;\n  white-space: nowrap;\n}`
);

css = css.replace(
  /\.rupee-symbol\s*\{[\s\S]*?\}/,
  `.rupee-symbol {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #714310;\n}`
);

css = css.replace(
  /\.price-num\s*\{[\s\S]*?\}/,
  `.price-num {\n  font-family: var(--font-heading);\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #714310;\n  letter-spacing: 0.3px;\n}`
);

css = css.replace(
  /\.combo-contents-box\s*\{[\s\S]*?gap:\s*0\.35rem;\s*\}/,
  `.combo-contents-box {\n  margin-top: 1rem;\n  padding: 0.75rem 0.9rem;\n  background: rgba(47, 119, 117, 0.08);\n  border: 1px dashed rgba(47, 119, 117, 0.35);\n  border-radius: var(--radius-sm);\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}`
);

css = css.replace(
  /\.combo-contents-label\s*\{[\s\S]*?font-weight:\s*600;\s*\}/,
  `.combo-contents-label {\n  font-size: 0.74rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #2F7775;\n  font-weight: 700;\n}`
);

css = css.replace(
  /\.combo-item-chip\s*\{[\s\S]*?color:\s*#523F34;\s*\}/,
  `.combo-item-chip {\n  background: #FCEDC4;\n  border: 1px solid rgba(204, 157, 89, 0.3);\n  padding: 0.2rem 0.6rem;\n  border-radius: var(--radius-full);\n  font-size: 0.78rem;\n  color: #5A3B18;\n}`
);

css = css.replace(
  /\.combo-item-chip strong\s*\{[\s\S]*?\}/,
  `.combo-item-chip strong {\n  color: #2F7775;\n}`
);

// Mobile menu overlay
css = css.replace(
  /background-color:\s*rgba\(239,\s*230,\s*216,\s*0\.98\);/,
  `background-color: rgba(246, 232, 200, 0.98);`
);
css = css.replace(
  /\.mobile-nav-link\s*\{[\s\S]*?color:\s*#221610;/,
  `.mobile-nav-link {\n    background: none;\n    border: none;\n    font-family: 'Playfair Display', Georgia, serif;\n    font-size: 1.6rem;\n    font-weight: 600;\n    letter-spacing: 1px;\n    color: #4A2808;`
);

css = css.replace(
  /\.mobile-nav-link\.active\s*\{[\s\S]*?\}/,
  `.mobile-nav-link.active {\n    color: #2F7775;\n  }`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully applied Warm Cream & Muted Teal theme from Core Cafe reference!');
