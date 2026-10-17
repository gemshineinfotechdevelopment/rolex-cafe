const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalStyles = `
/* ==========================================================================
   TESTIMONIALS SECTION (WARM CREAM & SOFT VANILLA CARDS)
   ========================================================================== */
.testimonials-section {
  padding: 5.5rem 0 4.5rem;
  position: relative;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
  margin-top: 3.5rem;
}

.testimonial-card {
  background-color: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  padding: 2.2rem;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  border-color: #2F7775;
  transform: translateY(-6px);
  background-color: #FFF8E6;
  box-shadow: 0 18px 45px rgba(47, 119, 117, 0.2);
}

.testimonial-stars {
  color: #E2B46C;
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.2rem;
}

.testimonial-text {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.08rem;
  color: #4A2808;
  line-height: 1.65;
  margin-bottom: 1.8rem;
  flex: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(204, 157, 89, 0.25);
}

.author-avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #2F7775;
  border: 2px solid #E2B46C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: #FCEDC4;
  box-shadow: 0 4px 12px rgba(47, 119, 117, 0.25);
  flex-shrink: 0;
}

.author-info h4 {
  font-size: 1.15rem;
  color: #4A2808;
  line-height: 1.1;
  margin-bottom: 0.2rem;
}

.author-info p {
  font-size: 0.8rem;
  color: #2F7775;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

/* ==========================================================================
   EXPERIENCE ROLEX CAFE IN PERSON - SIVAKASI VISIT BANNER
   Signature Muted Teal luxury container with Golden Honey radiant border
   ========================================================================== */
.visit-banner {
  background: linear-gradient(135deg, #2F7775 0%, #245E5C 50%, #1A4645 100%);
  border: 2px solid #E2B46C;
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  margin: 3rem auto 6rem;
  box-shadow: 0 20px 60px rgba(47, 119, 117, 0.35), 0 0 40px rgba(226, 180, 108, 0.22);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 3rem;
  position: relative;
  overflow: hidden;
}

.visit-banner::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(226, 180, 108, 0.25) 0%, transparent 70%);
  pointer-events: none;
}

.visit-banner .section-pretitle {
  color: #E2B46C;
}

.visit-banner h2 {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: 0.9rem;
  color: #FCEDC4;
  font-family: var(--font-heading);
}

.visit-banner p {
  color: #F6E8C8;
  font-size: 1.02rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 520px;
}

.visit-details-box {
  background-color: rgba(252, 237, 196, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(226, 180, 108, 0.45);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.visit-detail-row {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
}

.visit-detail-row svg {
  color: #E2B46C;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.visit-detail-row h5 {
  font-size: 1.1rem;
  color: #FCEDC4;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

.visit-detail-row p {
  font-size: 0.88rem;
  color: #F6E8C8;
  margin-bottom: 0;
  line-height: 1.45;
}

/* ==========================================================================
   ABOUT PAGE - EDITORIAL STORY & PILLARS
   ========================================================================== */
.about-page {
  padding-bottom: 6rem;
}

.about-hero {
  padding: 4rem 0 3rem;
  text-align: center;
}

.editorial-story-section {
  padding: 2rem 0 4rem;
}

.editorial-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5.5rem;
}

.editorial-grid.reverse {
  grid-template-columns: 1.15fr 1fr;
}

.editorial-grid.reverse .editorial-img-frame {
  order: 2;
}

.editorial-grid.reverse .editorial-content {
  order: 1;
}

.editorial-img-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 2px solid rgba(204, 157, 89, 0.4);
  box-shadow: 0 18px 45px rgba(113, 67, 16, 0.12);
  height: 440px;
  background-color: #D4C5AF;
}

.editorial-img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.editorial-img-frame:hover img {
  transform: scale(1.05);
}

.editorial-content h3 {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  color: #4A2808;
  line-height: 1.15;
  margin-bottom: 0.5rem;
}

.editorial-content p {
  color: #5A3B18;
  font-size: 1.02rem;
  line-height: 1.7;
  margin: 1.2rem 0;
}

.quote-highlight {
  background: #FCEDC4;
  border-left: 4px solid #2F7775;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 1.25rem 1.6rem;
  margin: 1.8rem 0;
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.15rem;
  color: #4A2808;
  line-height: 1.55;
  box-shadow: 0 4px 15px rgba(113, 67, 16, 0.05);
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  margin-top: 3rem;
}

.pillar-box {
  background: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  padding: 2.4rem 2rem;
  text-align: center;
  transition: all var(--transition-smooth);
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
}

.pillar-box:hover {
  transform: translateY(-8px);
  border-color: #2F7775;
  background: #FFF8E6;
  box-shadow: 0 18px 45px rgba(47, 119, 117, 0.2);
}

.pillar-number {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 2.8rem;
  font-weight: 700;
  color: #2F7775;
  line-height: 1;
  margin-bottom: 0.8rem;
}

.pillar-box h4 {
  font-size: 1.35rem;
  color: #4A2808;
  margin-bottom: 0.6rem;
}

.pillar-box p {
  color: #5A3B18;
  font-size: 0.95rem;
  line-height: 1.6;
}
`;

css += additionalStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully added testimonials, visit banner, and about styles!');
