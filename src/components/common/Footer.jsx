import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import BrushStroke from './BrushStroke';
import shopLogo from '../../assets/images/shop-logo.png';

export default function Footer({ setCurrentPage }) {
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="site-footer">
      <div className="section-container">
        {/* ==================================================================
            DETAILED INFORMATION GRID
            ================================================================== */}
        <div className="footer-top-grid">
          {/* Brand Story & Socials Col */}
          <div className="footer-brand">
            <button 
              type="button"
              className="brand-logo" 
              onClick={() => handleNav('home')}
              aria-label="Rolex Café Home"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', marginBottom: '1rem', display: 'inline-flex' }}
            >
              <img 
                src={shopLogo} 
                alt="Rolex Café Logo" 
                className="brand-shop-logo" 
              />
              <div className="brand-vertical-divider" style={{ background: 'rgba(47, 119, 117, 0.4)' }} />
              <span className="brand-name-luxury" style={{ color: '#4A2808', textShadow: 'none' }}>
                Rolex Café
              </span>
            </button>
            <p className="footer-tagline">“Great Taste. Cool Vibes. Unforgettable Moments.”</p>
            <p>
              Sivakasi’s signature culinary destination on Velayutham Road. Where delicious food meets 
              great vibes—serving monster burgers, stone-baked pizzas, sizzling momos, and creamy thickshakes.
            </p>
            <div className="footer-social-row">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/919003772211" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>

              {/* Call Helpline */}
              <a 
                href="tel:9003772211" 
                className="social-icon-btn"
                aria-label="Call Rolex Cafe"
              >
                <Phone size={18} />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Navbar Links List Col */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    type="button"
                    className="footer-link-btn" 
                    onClick={() => handleNav(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories Col */}
          <div className="footer-col">
            <h4>Popular Categories</h4>
            <ul className="footer-links-list">
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNav('menu')}>
                  Gourmet Burgers
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNav('menu')}>
                  Woodfired Pizzas
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNav('menu')}>
                  Kurkure Momos
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNav('menu')}>
                  Mojitos & Shakes
                </button>
              </li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => handleNav('menu')}>
                  Family & Chicken Combos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Col */}
          <div className="footer-col">
            <h4>Visit & Connect</h4>
            <ul className="footer-links-list" style={{ gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#5A3B18', fontSize: '0.88rem' }}>
                <MapPin size={18} style={{ color: '#2F7775', flexShrink: 0, marginTop: '2px' }} />
                <span>Velayutham Road (Near Bus Stand), Sivakasi - 626123</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#5A3B18', fontSize: '0.88rem' }}>
                <Clock size={18} style={{ color: '#2F7775', flexShrink: 0 }} />
                <span>Daily: 11:00 AM – 11:00 PM</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#5A3B18', fontSize: '0.88rem' }}>
                <Phone size={18} style={{ color: '#2F7775', flexShrink: 0 }} />
                <a href="tel:9003772211" style={{ color: '#5A3B18', textDecoration: 'none', fontWeight: 600 }}>
                  +91 9003772211
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: '#5A3B18', fontSize: '0.88rem' }}>
                <Mail size={18} style={{ color: '#2F7775', flexShrink: 0 }} />
                <a href="mailto:rolexecafesvk2026@gmail.com" style={{ color: '#5A3B18', textDecoration: 'none' }}>
                  rolexecafesvk2026@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <BrushStroke width="180px" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} ROLEX CAFÉ, Sivakasi. All Rights Reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Handcrafted with <Heart size={14} style={{ color: '#b91c1c' }} /> for Sivakasi food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
