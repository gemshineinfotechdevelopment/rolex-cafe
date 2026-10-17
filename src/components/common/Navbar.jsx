import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowRight, Phone, MapPin } from 'lucide-react';
import shopLogo from '../../assets/images/shop-logo.png';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open & close on Escape
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeAtTop = currentPage === 'home' && !isScrolled;

  return (
    <>
      <header className={`header ${isHomeAtTop ? 'header-transparent' : 'header-solid'}`}>
        <div className="nav-container">
          {/* Brand: Logo | Rolex Cafe */}
          <button 
            type="button"
            className="brand-logo" 
            onClick={() => handleNavClick('home')}
            aria-label="Rolex Café Home"
          >
            <img 
              src={shopLogo} 
              alt="Rolex Café Logo" 
              className="brand-shop-logo" 
            />
            <div className="brand-vertical-divider" />
            <span className="brand-name-luxury">Rolex Cafe</span>
          </button>

          {/* Center Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Handwritten Script Motto & Mobile Trigger */}
          <div className="nav-right-cluster">
            <span className="nav-motto-script">Good Food Great Vibes. ♡</span>
            
            <button 
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer - Portaled directly to body to bypass header clipping/backdrop-filter */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="mobile-nav-portal-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div 
            className="mobile-nav-drawer-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header with Logo & Close Button */}
            <div className="mobile-nav-drawer-header">
              <button 
                type="button"
                className="brand-logo" 
                onClick={() => handleNavClick('home')}
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                <img 
                  src={shopLogo} 
                  alt="Rolex Café Logo" 
                  className="brand-shop-logo" 
                />
                <div className="brand-vertical-divider" />
                <span className="brand-name-luxury" style={{ color: '#4A2808', textShadow: 'none' }}>
                  Rolex Café
                </span>
              </button>

              <button 
                type="button"
                className="mobile-nav-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Handwritten script slogan */}
            <div className="mobile-drawer-motto-tag">
              <span>Good Food Great Vibes. ♡</span>
            </div>

            {/* Navigation Links */}
            <ul className="mobile-nav-list-portal">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`mobile-nav-portal-link ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span>{item.label}</span>
                    <span className="mobile-link-arrow">→</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Drawer Footer Actions */}
            <div className="mobile-drawer-portal-footer">
              <button 
                type="button"
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => handleNavClick('menu')}
              >
                Explore Menu <ArrowRight size={18} />
              </button>

              <div className="mobile-drawer-contact-mini">
                <a href="tel:9003772211" className="mobile-contact-pill">
                  <Phone size={14} /> 9003772211
                </a>
                <span className="mobile-contact-city">
                  <MapPin size={14} /> Sivakasi
                </span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
