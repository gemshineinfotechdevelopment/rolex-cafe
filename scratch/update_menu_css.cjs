const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('c:/Users/chitr/react-projects/rolex cafe/src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const menuStyles = `/* ==========================================================================
   MENU PAGE - REDESIGNED LUXURY UI
   ========================================================================== */
.menu-page-wrapper {
  padding: 3.5rem 0 7rem;
}

.menu-header-enhanced {
  position: relative;
  margin-bottom: 2.8rem;
}

.menu-features-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.menu-feature-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(32, 23, 19, 0.7);
  border: 1px solid rgba(229, 197, 120, 0.22);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.84rem;
  color: #DCD2C7;
  backdrop-filter: blur(8px);
}

.chip-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}

.chip-dot.veg {
  background-color: var(--color-veg);
  box-shadow: 0 0 8px rgba(22, 163, 74, 0.6);
}

.chip-dot.nonveg {
  background-color: var(--color-nonveg);
  box-shadow: 0 0 8px rgba(220, 38, 38, 0.6);
}

/* Enhanced Filter Controls Card */
.menu-filter-controls-card {
  background: rgba(32, 23, 19, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(229, 197, 120, 0.25);
  border-radius: var(--radius-lg);
  padding: 1.6rem;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.menu-controls-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

/* Search Box */
.search-input-box-enhanced {
  position: relative;
  flex: 1;
  min-width: 280px;
  max-width: 460px;
}

.search-input-box-enhanced input {
  width: 100%;
  background-color: rgba(20, 14, 11, 0.9);
  border: 1.5px solid rgba(229, 197, 120, 0.25);
  border-radius: var(--radius-full);
  padding: 0.75rem 2.8rem 0.75rem 2.7rem;
  color: #FFFFFF;
  font-size: 0.95rem;
  font-family: var(--font-body);
  outline: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: all var(--transition-fast);
}

.search-input-box-enhanced input::placeholder {
  color: #8E8276;
}

.search-input-box-enhanced input:focus {
  border-color: #E5C578;
  box-shadow: 0 0 0 3px rgba(229, 197, 120, 0.25), 0 4px 20px rgba(0, 0, 0, 0.6);
}

.search-clear-btn {
  position: absolute;
  right: 0.95rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #DCD2C7;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.search-clear-btn:hover {
  background: rgba(229, 197, 120, 0.3);
  color: #FFFFFF;
}

/* Diet Filter Pills */
.diet-filter-buttons-enhanced {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.diet-pill-btn {
  background: rgba(20, 14, 11, 0.8);
  border: 1px solid rgba(229, 197, 120, 0.22);
  color: #DCD2C7;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: all var(--transition-fast);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
}

.diet-pill-btn:hover {
  border-color: #E5C578;
  color: #FFFFFF;
  transform: translateY(-1px);
}

.diet-pill-btn.active {
  background: linear-gradient(135deg, #F3DEAB 0%, #E5C578 50%, #C59A27 100%);
  color: #16100D;
  border-color: transparent;
  font-weight: 700;
  box-shadow: 0 4px 18px rgba(229, 197, 120, 0.4);
}

/* Enhanced Category Chips Nav */
.category-nav-bar-enhanced {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  overflow-x: auto;
  padding: 0.3rem 0.2rem 0.8rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(229, 197, 120, 0.4) transparent;
}

.category-nav-bar-enhanced::-webkit-scrollbar {
  height: 5px;
}
.category-nav-bar-enhanced::-webkit-scrollbar-thumb {
  background: rgba(229, 197, 120, 0.4);
  border-radius: var(--radius-full);
}

.category-chip-btn {
  background: rgba(20, 14, 11, 0.85);
  border: 1px solid rgba(229, 197, 120, 0.22);
  color: #DCD2C7;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: all var(--transition-fast);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
}

.category-chip-btn:hover {
  border-color: #E5C578;
  color: #FFFFFF;
  background: rgba(229, 197, 120, 0.15);
  transform: translateY(-2px);
}

.category-chip-btn.active {
  background: linear-gradient(135deg, #F3DEAB 0%, #E5C578 50%, #C59A27 100%);
  color: #16100D;
  border-color: transparent;
  font-weight: 700;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(229, 197, 120, 0.45);
}

.category-chip-emoji {
  font-size: 1.05rem;
}

.category-chip-count {
  background: rgba(0, 0, 0, 0.22);
  padding: 0.15rem 0.5rem;
  border-radius: var(--radius-full);
  font-size: 0.74rem;
  font-weight: 600;
}

.category-chip-btn.active .category-chip-count {
  background: rgba(22, 16, 13, 0.25);
  color: #16100D;
}

/* Results & Info Bar */
.menu-results-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.4rem 0.2rem;
  font-size: 0.92rem;
  color: #A39688;
}

.menu-results-count strong {
  color: #FFFFFF;
}

.menu-results-count em {
  color: #E5C578;
  font-style: normal;
  font-weight: 600;
}

.menu-quick-helpline {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #E5C578;
  font-size: 0.88rem;
}

.menu-quick-helpline strong {
  color: #FFFFFF;
}

/* Empty State */
.menu-empty-state {
  text-align: center;
  padding: 5rem 1rem;
  color: #DCD2C7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-state-icon {
  color: #E5C578;
  opacity: 0.6;
}

.menu-empty-state h3 {
  font-size: 1.8rem;
  color: #FFFFFF;
}

.menu-empty-state p {
  max-width: 400px;
  margin-bottom: 1rem;
}

/* Modern Menu Grid */
.menu-items-grid-modern {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2.2rem;
}

@keyframes modernCardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.menu-card-modern {
  background: linear-gradient(180deg, #241A15 0%, #1D1511 100%);
  border: 1px solid rgba(229, 197, 120, 0.22);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
  animation: modernCardFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.menu-card-modern:hover {
  transform: translateY(-8px);
  border-color: #E5C578;
  background: linear-gradient(180deg, #2A1F19 0%, #201712 100%);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.75), 0 0 25px rgba(229, 197, 120, 0.22);
}

.menu-card-modern.is-combo {
  border-color: rgba(229, 197, 120, 0.4);
}

.menu-card-img-box {
  height: 230px;
  position: relative;
  overflow: hidden;
  background-color: #140E0B;
}

.menu-card-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-card-modern:hover .menu-card-img-box img {
  transform: scale(1.08);
}

.menu-card-tags-overlay {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  right: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  pointer-events: none;
}

.menu-card-cat-badge {
  background-color: rgba(18, 12, 9, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #E5C578;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(229, 197, 120, 0.35);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

.menu-card-special-badge {
  background: linear-gradient(135deg, #F3DEAB 0%, #E5C578 50%, #C59A27 100%);
  color: #16100D;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 15px rgba(229, 197, 120, 0.45);
}

/* Card Body (Item Name & Price Only) */
.menu-card-body {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.menu-card-main-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  margin-bottom: 1.1rem;
}

.menu-card-title-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex: 1;
}

.menu-card-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  color: #FFFFFF;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.menu-card-price-badge {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  background: rgba(229, 197, 120, 0.12);
  border: 1px solid rgba(229, 197, 120, 0.35);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}

.price-currency {
  font-size: 1rem;
  font-weight: 600;
  color: #E5C578;
}

.price-amount {
  font-family: var(--font-heading);
  font-size: 1.45rem;
  font-weight: 700;
  color: #F3DEAB;
}

/* Special Combo Included Chips */
.menu-combo-box {
  margin: 0 0 1.1rem;
  padding: 0.85rem;
  background: rgba(229, 197, 120, 0.08);
  border: 1px dashed rgba(229, 197, 120, 0.35);
  border-radius: var(--radius-sm);
}

.menu-combo-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #E5C578;
  font-weight: 600;
  margin-bottom: 0.55rem;
}

.menu-combo-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.menu-combo-chip {
  background: rgba(20, 14, 11, 0.9);
  border: 1px solid rgba(229, 197, 120, 0.25);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  font-size: 0.76rem;
  color: #DCD2C7;
}

.menu-combo-chip strong {
  color: #E5C578;
}

/* Card Action Row */
.menu-card-action-row {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(229, 197, 120, 0.15);
}

.menu-card-order-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background: linear-gradient(135deg, rgba(229, 197, 120, 0.1) 0%, rgba(229, 197, 120, 0.2) 100%);
  border: 1px solid rgba(229, 197, 120, 0.35);
  color: #F3DEAB;
  padding: 0.65rem 1.2rem;
  border-radius: var(--radius-full);
  font-size: 0.86rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.menu-card-order-btn:hover {
  background: linear-gradient(135deg, #F3DEAB 0%, #E5C578 50%, #C59A27 100%);
  color: #16100D;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(229, 197, 120, 0.38);
}
`;

// Replace old menu section in CSS
const startMarker = '/* ==========================================================================\n   MENU PAGE\n   ========================================================================== */';
const endMarker = '/* ==========================================================================\n   GALLERY PAGE\n   ========================================================================== */';

const startIndex = css.indexOf(startMarker);
const endIndex = css.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  css = css.substring(0, startIndex) + menuStyles + '\n\n' + css.substring(endIndex);
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Successfully updated Menu CSS styles!');
} else {
  // If markers not found, append to end
  css += '\n\n' + menuStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended Menu CSS styles!');
}
