import React, { useState, useMemo } from 'react';
import { Search, Info, Phone, Sparkles, X, UtensilsCrossed } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import BrushStroke from '../components/common/BrushStroke';
import VegBadge from '../components/common/VegBadge';

export default function Menu({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'

  // Filtered menu items based on category, search, and veg/non-veg
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Diet check
      const matchesDiet = 
        dietFilter === 'all' || 
        (dietFilter === 'veg' && item.isVeg) || 
        (dietFilter === 'non-veg' && !item.isVeg);

      // Search query check
      const matchesSearch = 
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <div className="menu-page-wrapper">
      <div className="section-container">
        {/* ====================================================================
            1. HEADER BANNER
            ==================================================================== */}
        <div className="section-header menu-header-clean">
          <span className="section-pretitle">Sivakasi's Culinary Selection</span>
          <h1 className="section-title">THE ROLEX FLAVOUR VAULT</h1>
          <BrushStroke width="210px" />
          <p className="section-subtitle">
            Explore our curated menu spanning 10 handcrafted categories. Prepared fresh to order 
            using premium ingredients and our signature spice blends.
          </p>
        </div>

        {/* ====================================================================
            2. REFINED MINIMALIST CAFE FILTER & SEARCH
            ==================================================================== */}
        <div className="menu-filter-section">
          {/* Category Tabs: Clean, elegant, horizontal scrolling typography */}
          <div className="menu-tabs-wrapper" role="tablist" aria-label="Menu Categories">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`menu-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sub-bar: Clean Search Input & Segmented Diet Switch */}
          <div className="menu-subfilter-bar">
            {/* Search Pill */}
            <div className="menu-search-pill">
              <Search size={16} className="menu-search-icon" />
              <input 
                type="text" 
                placeholder="Search food items..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button 
                  className="menu-search-clear" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Segmented Diet Filter: All | Veg | Non-Veg */}
            <div className="menu-diet-segmented" role="radiogroup" aria-label="Dietary filter">
              <button 
                className={`diet-seg-btn ${dietFilter === 'all' ? 'active' : ''}`}
                onClick={() => setDietFilter('all')}
                role="radio"
                aria-checked={dietFilter === 'all'}
              >
                All
              </button>
              <button 
                className={`diet-seg-btn ${dietFilter === 'veg' ? 'active' : ''}`}
                onClick={() => setDietFilter('veg')}
                role="radio"
                aria-checked={dietFilter === 'veg'}
              >
                <span className="dot-veg" /> Veg
              </button>
              <button 
                className={`diet-seg-btn ${dietFilter === 'non-veg' ? 'active' : ''}`}
                onClick={() => setDietFilter('non-veg')}
                role="radio"
                aria-checked={dietFilter === 'non-veg'}
              >
                <span className="dot-nonveg" /> Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Result Counter */}
        <div className="menu-meta-status">
          <span>Showing <strong>{filteredItems.length}</strong> items</span>
        </div>

        {/* ====================================================================
            3. MENU ITEMS GRID (ITEM NAME & PRICE ONLY - NO ORDER NOW BUTTON)
            ==================================================================== */}
        {filteredItems.length === 0 ? (
          <div className="menu-empty-state">
            <UtensilsCrossed size={44} className="empty-state-icon" />
            <h3>No dishes found</h3>
            <p>Try clearing your search or switching categories.</p>
            <button 
              className="btn-primary"
              onClick={() => { setSelectedCategory('all'); setDietFilter('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="menu-grid-aesthetic">
            {filteredItems.map((item, idx) => (
              <article 
                key={item.id} 
                className="menu-card-aesthetic"
                style={{ animationDelay: `${Math.min(idx * 0.02, 0.35)}s` }}
              >
                {/* Visual Image Box */}
                <div className="card-photo-frame">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="card-photo-badges">
                    <span className="category-pill-tag">
                      {item.category.replace('-', ' ')}
                    </span>
                    {item.tag && (
                      <span className="special-pill-tag">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content: Item Name & Price (plus included items for Combos) */}
                <div className="card-content-aesthetic">
                  <div className="card-header-aesthetic">
                    <div className="card-title-wrap">
                      <VegBadge isVeg={item.isVeg} />
                      <h3 className="card-dish-name">{item.name}</h3>
                    </div>
                    <div className="card-price-display">
                      <span className="rupee-symbol">₹</span>
                      <span className="price-num">{item.price}</span>
                    </div>
                  </div>

                  {/* For Combos: Display itemized combo inclusions from menu poster */}
                  {item.quantityItems && (
                    <div className="combo-contents-box">
                      <span className="combo-contents-label">Includes:</span>
                      <div className="combo-contents-tags">
                        {item.quantityItems.map((qi, qIdx) => (
                          <span key={qIdx} className="combo-item-chip">
                            <strong>{qi.quantity}</strong> {qi.item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
