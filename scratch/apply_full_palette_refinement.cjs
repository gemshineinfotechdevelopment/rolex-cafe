const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update Top Announcement Bar
const announcementOld = /\.top-announcement\s*\{[\s\S]*?\.top-announcement strong\s*\{[\s\S]*?\}/;
const announcementNew = `.top-announcement {
  background: linear-gradient(90deg, #F6E8C8 0%, #FCEDC4 50%, #F6E8C8 100%);
  border-bottom: 1.5px solid rgba(204, 157, 89, 0.35);
  font-size: 0.82rem;
  color: #5A3B18;
  padding: 0.45rem 1rem;
  text-align: center;
  position: relative;
  z-index: 50;
}

.top-announcement span {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.top-announcement strong {
  color: #2F7775;
  font-weight: 700;
}`;

css = css.replace(announcementOld, announcementNew);

// 2. Add complete Menu filter & tabs styles before .menu-diet-segmented
const menuDietIndex = css.indexOf('.menu-diet-segmented {');
if (menuDietIndex !== -1) {
  const menuFilterBlock = `/* ==========================================================================
   MENU FILTER & TABS (WARM CREAM & MUTED TEAL - WRAPPED, NO HORIZONTAL SCROLL)
   ========================================================================== */
.menu-page-wrapper {
  padding: 3.5rem 0 6rem;
}

.menu-header-clean {
  margin-bottom: 2.5rem;
  text-align: center;
}

.menu-filter-section {
  background: rgba(252, 237, 196, 0.78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1.5px solid rgba(204, 157, 89, 0.38);
  border-radius: var(--radius-lg);
  padding: 1.6rem 2rem;
  margin: 0 auto 2.4rem;
  max-width: 1040px;
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.07), 0 0 24px rgba(226, 180, 108, 0.18);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

/* Category Tabs: Flex-wrap centered, NEVER horizontal scroll */
.menu-tabs-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.65rem 0.85rem;
  width: 100%;
}

.menu-tab-btn {
  background: rgba(246, 232, 200, 0.95);
  border: 1.5px solid rgba(204, 157, 89, 0.4);
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  color: #5A3B18;
  padding: 0.52rem 1.25rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(113, 67, 16, 0.04);
}

.menu-tab-btn:hover {
  background: #FCEDC4;
  color: #2F7775;
  border-color: #2F7775;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(47, 119, 117, 0.2);
}

.menu-tab-btn.active {
  background: #2F7775;
  color: #FCEDC4;
  border-color: #2F7775;
  font-weight: 700;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(47, 119, 117, 0.35), 0 0 14px rgba(226, 180, 108, 0.25);
}

/* Subfilter row: Search pill on left, Diet buttons on right */
.menu-subfilter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  flex-wrap: wrap;
  padding-top: 1.2rem;
  border-top: 1.5px solid rgba(204, 157, 89, 0.25);
}

.menu-search-pill {
  position: relative;
  flex: 1;
  min-width: 260px;
  max-width: 440px;
}

.menu-search-icon {
  position: absolute;
  left: 1.05rem;
  top: 50%;
  transform: translateY(-50%);
  color: #2F7775;
  pointer-events: none;
}

.menu-search-pill input {
  width: 100%;
  background: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.4);
  border-radius: var(--radius-full);
  padding: 0.65rem 2.4rem 0.65rem 2.65rem;
  color: #4A2808;
  font-size: 0.92rem;
  font-family: var(--font-body);
  outline: none;
  box-shadow: 0 2px 8px rgba(113, 67, 16, 0.05);
  transition: all var(--transition-fast);
}

.menu-search-pill input:focus {
  border-color: #2F7775;
  box-shadow: 0 0 0 3px rgba(47, 119, 117, 0.22);
  background: #FFFFFF;
}

.menu-search-pill input::placeholder {
  color: #8A6E4B;
}

.menu-search-clear {
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8A6E4B;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.menu-search-clear:hover {
  color: #4A2808;
  background: rgba(204, 157, 89, 0.25);
}

.menu-empty-state {
  text-align: center;
  padding: 4.5rem 2rem;
  background: #FCEDC4;
  border: 1.5px dashed rgba(204, 157, 89, 0.45);
  border-radius: var(--radius-lg);
  max-width: 520px;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-state-icon {
  color: #2F7775;
}

.menu-empty-state h3 {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  color: #4A2808;
}

.menu-empty-state p {
  color: #5A3B18;
  font-size: 0.95rem;
}

`;
  css = css.slice(0, menuDietIndex) + menuFilterBlock + css.slice(menuDietIndex);
}

// 3. Category pill buttons on Gallery
const galleryFiltersOld = /\.gallery-filters\s*\{[\s\S]*?margin-bottom:\s*3rem;\s*\}/;
const galleryFiltersNew = `.gallery-filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.65rem 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.category-pill-btn {
  background: rgba(246, 232, 200, 0.95);
  border: 1.5px solid rgba(204, 157, 89, 0.4);
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  color: #5A3B18;
  padding: 0.52rem 1.35rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(113, 67, 16, 0.04);
}

.category-pill-btn:hover {
  background: #FCEDC4;
  color: #2F7775;
  border-color: #2F7775;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(47, 119, 117, 0.2);
}

.category-pill-btn.active {
  background: #2F7775;
  color: #FCEDC4;
  border-color: #2F7775;
  font-weight: 700;
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(47, 119, 117, 0.35), 0 0 14px rgba(226, 180, 108, 0.25);
}`;

css = css.replace(galleryFiltersOld, galleryFiltersNew);

// 4. Gallery item card: Soft Vanilla surface, Caramel border, Muted Teal hover
const galleryCardOld = /\.gallery-item-card\s*\{[\s\S]*?box-shadow:\s*0\s*8px\s*24px\s*rgba\(90,\s*60,\s*130,\s*0\.06\);\s*\}/;
const galleryCardNew = `.gallery-item-card {
  break-inside: avoid;
  margin-bottom: 1.75rem;
  background-color: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all var(--transition-smooth);
  box-shadow: 0 8px 24px rgba(113, 67, 16, 0.08);
}`;
css = css.replace(galleryCardOld, galleryCardNew);

css = css.replace(
  /\.gallery-item-card:hover\s*\{[\s\S]*?\}/,
  `.gallery-item-card:hover {\n  border-color: #2F7775;\n  transform: translateY(-6px);\n  box-shadow: 0 18px 45px rgba(47, 119, 117, 0.25);\n}`
);

css = css.replace(
  /\.gallery-item-overlay\s*\{[\s\S]*?transition:\s*opacity var\(--transition-smooth\);\s*\}/,
  `.gallery-item-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(74, 40, 8, 0.95) 0%, rgba(74, 40, 8, 0.35) 50%, transparent 100%);\n  opacity: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.5rem;\n  transition: opacity var(--transition-smooth);\n}`
);

// 5. Contact page refinement: Soft Vanilla cards, Muted Teal icons, Caramel borders
const contactCardBoxOld = /\.contact-card-box\s*\{[\s\S]*?box-shadow:\s*0\s*8px\s*24px\s*rgba\(90,\s*60,\s*130,\s*0\.05\);\s*\}/;
const contactCardBoxNew = `.contact-card-box {
  background-color: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  padding: 2.2rem;
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
}`;
css = css.replace(contactCardBoxOld, contactCardBoxNew);

css = css.replace(
  /\.contact-card-box h3\s*\{[\s\S]*?gap:\s*0\.6rem;\s*\}/,
  `.contact-card-box h3 {\n  font-family: var(--font-heading);\n  font-size: 1.7rem;\n  color: #4A2808;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}`
);

css = css.replace(
  /\.contact-item-icon\s*\{[\s\S]*?flex-shrink:\s*0;\s*\}/,
  `.contact-item-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  background: #2F7775;\n  border: 1px solid #E2B46C;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FCEDC4;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(47, 119, 117, 0.25);\n}`
);

css = css.replace(
  /\.contact-item-text a:hover\s*\{[\s\S]*?\}/,
  `.contact-item-text a:hover {\n  color: #2F7775;\n}`
);

const mapCardOld = /\.map-visual-card\s*\{[\s\S]*?box-shadow:\s*0\s*8px\s*24px\s*rgba\(90,\s*60,\s*130,\s*0\.05\);\s*\}/;
const mapCardNew = `.map-visual-card {
  background-color: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
}`;
css = css.replace(mapCardOld, mapCardNew);

css = css.replace(
  /\.map-placeholder-box\s*\{[\s\S]*?border-bottom:\s*1px solid rgba\(184,\s*147,\s*232,\s*0\.22\);\s*\}/,
  `.map-placeholder-box {\n  height: 220px;\n  background: linear-gradient(135deg, #2F7775 0%, #205351 50%, #153B3A 100%);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n  border-bottom: 1.5px solid rgba(226, 180, 108, 0.4);\n}`
);

css = css.replace(
  /\.map-directions-btn\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*14px\s*rgba\(138,\s*87,\s*208,\s*0\.28\);\s*\}/,
  `.map-directions-btn {\n  background: #2F7775;\n  color: #FCEDC4;\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  letter-spacing: 0.8px;\n  padding: 0.55rem 1.35rem;\n  border-radius: var(--radius-full);\n  border: 1px solid #E2B46C;\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  transition: all var(--transition-fast);\n  box-shadow: 0 4px 14px rgba(47, 119, 117, 0.25);\n}`
);

css = css.replace(
  /\.map-directions-btn:hover\s*\{[\s\S]*?\}/,
  `.map-directions-btn:hover {\n  background: #E2B46C;\n  color: #4A2808;\n  border-color: #714310;\n  transform: translateY(-2px);\n}`
);

const contactFormPanelOld = /\.contact-form-panel\s*\{[\s\S]*?box-shadow:\s*0\s*8px\s*24px\s*rgba\(90,\s*60,\s*130,\s*0\.05\);\s*\}/;
const contactFormPanelNew = `.contact-form-panel {
  background-color: #FCEDC4;
  border: 1.5px solid rgba(204, 157, 89, 0.35);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(113, 67, 16, 0.08);
}`;
css = css.replace(contactFormPanelOld, contactFormPanelNew);

css = css.replace(
  /\.form-control\s*\{[\s\S]*?transition:\s*border-color var\(--transition-fast\),\s*background-color var\(--transition-fast\);\s*\}/,
  `.form-control {\n  width: 100%;\n  background-color: #F6E8C8;\n  border: 1.5px solid rgba(204, 157, 89, 0.4);\n  border-radius: var(--radius-sm);\n  padding: 0.75rem 1rem;\n  color: #4A2808;\n  font-size: 0.95rem;\n  font-family: var(--font-body);\n  outline: none;\n  transition: border-color var(--transition-fast), background-color var(--transition-fast);\n}`
);

css = css.replace(
  /\.form-control:focus\s*\{[\s\S]*?\}/,
  `.form-control:focus {\n  border-color: #2F7775;\n  box-shadow: 0 0 10px rgba(47, 119, 117, 0.25);\n  background-color: #FFFFFF;\n}`
);

// 6. Mobile nav border
css = css.replace(
  /border-top:\s*1px solid rgba\(184,\s*147,\s*232,\s*0\.25\);/g,
  `border-top: 1.5px solid rgba(204, 157, 89, 0.35);`
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully completed full palette refinement in index.css!');
