import React, { useState } from 'react';
import { ArrowRight, Flame, Award, Clock, Users, Star, ChevronRight, ChevronDown, Sparkles, MapPin, Eye, UtensilsCrossed } from 'lucide-react';
import BrushStroke from '../components/common/BrushStroke';
import VegBadge from '../components/common/VegBadge';
import heroClean from '../assets/images/hero-clean.jpg';

export default function Home({ onNavigate }) {

  // Standout showcase items from Burgers, Pizza, Momos, Rolls, Shakes
  const signatureItems = [
    {
      id: 'b5',
      name: 'Ultra Chicken Burger',
      category: 'Burgers',
      price: 109,
      isVeg: false,
      tag: 'Heavy Crunch',
      description: 'Extra crispy chicken patty coated in special seasoning, loaded with double mayo, crisp iceberg, and red onion rings.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'cp1',
      name: 'BBQ Chicken Pizza',
      category: 'Chicken Pizza',
      price: 160,
      isVeg: false,
      tag: 'Smoky Glaze',
      description: 'Tender chicken cubes glazed in hickory sweet-smoky barbecue sauce, purple onions, golden sweet corn, and mozzarella.',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vp4',
      name: 'Paneer Corn Pizza',
      category: 'Veg Pizza',
      price: 160,
      isVeg: true,
      tag: 'Cheesy Melt',
      description: 'Soft spiced paneer cubes paired with sweet American golden corn, double mozzarella blend, and Italian herbs.',
      image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'm8',
      name: 'Peri Peri Chicken Momos',
      category: 'Momos',
      price: 120,
      isVeg: false,
      tag: 'Spice Crunch',
      description: 'Crispy fried chicken momos tossed in spicy African bird-eye peri-peri dust, paired with cooling garlic mayo.',
      image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vr1',
      name: 'Veg Roll',
      category: 'Veg Rolls',
      price: 80,
      isVeg: true,
      tag: 'Flaky Wrap',
      description: 'Seasoned spiced vegetable mash, crunchy sliced onions, fresh coriander mint chutney, rolled in a flaky golden paratha.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 's5',
      name: 'Oreo Shake',
      category: 'Shakes',
      price: 100,
      isVeg: true,
      tag: 'Cookie Overload',
      description: 'Crushed crunchy Oreo chocolate sandwich cookies blended with velvety ice cream and chocolate drizzle.',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    },
  ];

  return (
    <div className="home-page">
      {/* ====================================================================
          1. LUXURY HERO SECTION (REFERENCING EVENTORA UI)
          ==================================================================== */}
      {/* ====================================================================
          1. HERO SHOWCASE - ROLEX CAFÉ SIVAKASI
          ==================================================================== */}
      <section className="hero-showcase-section">
        {/* Full-bleed Clean Background Image */}
        <div className="hero-showcase-bg-box">
          <img 
            src={heroClean} 
            alt="Welcome to Rolex Cafe - Sip • Bite • Relax" 
            className="hero-showcase-img" 
            fetchPriority="high"
          />
          {/* Subtle soft dark gradient on the left so typography is impeccably readable */}
          <div className="hero-showcase-vignette" />
        </div>

        {/* Hero Content Overlay (Positioned on the Left) */}
        <div className="hero-showcase-container">
          <div className="hero-showcase-content">
            {/* Elegant Calligraphic Script: Welcome to with heart */}
            <div className="hero-script-lead">
              <span className="script-text">Welcome to</span>
              <span className="script-heart">♡</span>
            </div>

            {/* Main Luxury Brand Headline */}
            <h1 className="hero-title-main">
              Rolex Cafe
            </h1>

            {/* Spaced Uppercase Subtitle */}
            <div className="hero-subtitle-pills">
              <span>SIP</span>
              <span className="sep">•</span>
              <span>BITE</span>
              <span className="sep">•</span>
              <span>RELAX</span>
            </div>

            {/* Italic Serif Description */}
            <p className="hero-desc-italic">
              A cozy cafe to enjoy your favourite food and beverages, anytime.
            </p>

            {/* Pill CTA Button */}
            <div className="hero-cta-wrap">
              <button 
                className="hero-pill-btn"
                onClick={() => onNavigate('menu')}
                aria-label="Explore Our Menu"
              >
                <span>Explore Our Menu</span>
                <span className="hero-pill-arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Organic Bottom Wave Curves (matching reference image) */}
        <div className="hero-bottom-waves" aria-hidden="true">
          <svg 
            className="hero-waves-svg" 
            viewBox="0 0 1440 100" 
            fill="none" 
            preserveAspectRatio="none"
          >
            {/* Golden Honey Accent Wave */}
            <path 
              d="M0,35 C280,95 440,0 720,45 C1000,90 1220,15 1440,40 L1440,100 L0,100 Z" 
              fill="rgba(226, 180, 108, 0.45)" 
            />
            {/* Base Background Wave transitioning smoothly into Warm Cream canvas */}
            <path 
              d="M0,60 C260,110 500,20 800,70 C1100,120 1280,40 1440,65 L1440,100 L0,100 Z" 
              fill="#F3E8D0" 
            />
          </svg>
        </div>
      </section>

      {/* ====================================================================
          2. FEATURE STRIP (WHY ROLEXE CAFE)
          ==================================================================== */}
      <section className="feature-strip">
        <div className="section-container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <Flame size={24} />
              </div>
              <div className="feature-content">
                <h4>Fire-Crafted Flavours</h4>
                <p>Bold spice blends with authentic marinades cooked fresh to perfection every single time.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Award size={24} />
              </div>
              <div className="feature-content">
                <h4>Artisanal Integrity</h4>
                <p>100% fresh soft buns, hand-tossed dough, and premium dairy cheese with zero shortcuts.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Clock size={24} />
              </div>
              <div className="feature-content">
                <h4>Open 11 AM – 11 PM</h4>
                <p>From afternoon lunch hangouts to late-evening snack cravings, we welcome you all week.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Users size={24} />
              </div>
              <div className="feature-content">
                <h4>Cozy Sivakasi Vibe</h4>
                <p>Designed for memorable conversations, youth celebrations, and relaxing family times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. SIGNATURE SHOWCASE SECTION
          ==================================================================== */}
      <section className="showcase-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-pretitle">Crafted To Perfection</span>
            <h2 className="section-title">OUR SIGNATURE SELECTIONS</h2>
            <BrushStroke width="190px" />
            <p className="section-subtitle">
              From monster burgers and molten artisan pizzas to crispy rolls and chilled thickshakes, 
              here is a taste of what Sivakasi loves at Rolex Cafe.
            </p>
          </div>

          <div className="showcase-grid">
            {signatureItems.map((item) => (
              <div key={item.id} className="showcase-card">
                <div className="showcase-img-box">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="showcase-badge-overlay">
                    <span className="badge-pill gold">{item.category}</span>
                    <span className="badge-pill red">{item.tag}</span>
                  </div>
                </div>

                <div className="showcase-body">
                  <div className="showcase-title-row">
                    <h3>{item.name}</h3>
                    <VegBadge isVeg={item.isVeg} />
                  </div>

                  <div className="showcase-footer">
                    <span className="showcase-price">₹{item.price}</span>
                    <button 
                      className="showcase-view-link"
                      onClick={() => onNavigate('menu')}
                    >
                      View on Menu <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              className="btn-primary" 
              onClick={() => onNavigate('menu')}
            >
              Browse Complete Menu (10 Categories) <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. COMMUNITY PRAISE / TESTIMONIALS
          ==================================================================== */}
      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-pretitle">Words From Sivakasi</span>
            <h2 className="section-title">WHAT OUR GUESTS SAY</h2>
            <BrushStroke width="180px" />
            <p className="section-subtitle">
              Authentic reactions from food lovers, students, and families who make Rolex Cafe their second home.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-gold)" stroke="none" />
                ))}
              </div>
              <p className="testimonial-text">
                “Finally, Sivakasi has a cafe that matches metropolitan standards! The Monster Chicken Burger is huge 
                and packed with juice. The dark ambient vibe is simply unmatched.”
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">K</div>
                <div className="author-info">
                  <h4>Karthik Raja</h4>
                  <p>Sivakasi Food Enthusiast</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-gold)" stroke="none" />
                ))}
              </div>
              <p className="testimonial-text">
                “The Kurkure Momos and Belgian Chocolate Shake are my go-to combo every weekend. The staff is polite, 
                and the prices are so reasonable for this quality.”
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">P</div>
                <div className="author-info">
                  <h4>Priya Dharshini</h4>
                  <p>Regular Guest</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--color-gold)" stroke="none" />
                ))}
              </div>
              <p className="testimonial-text">
                “We ordered the Family Combo for our celebration and everyone loved the thin-crust chicken pizza 
                and peri-peri fries. Good food, happy mood indeed!”
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <h4>Murugan S.</h4>
                  <p>Family Dine-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. SIVAKASI VISIT BANNER
          ==================================================================== */}
      <div className="section-container">
        <div className="visit-banner">
          <div>
            <span className="section-pretitle">Come Visit Us Today</span>
            <h2>EXPERIENCE ROLEX CAFE IN PERSON</h2>
            <p>
              Located conveniently in Sivakasi on Velayutham Road near the Bus Stand. 
              Bring your friends, appetite, and happy mood—we’ll handle the rest!
            </p>
            <button 
              className="btn-primary"
              onClick={() => onNavigate('contact')}
            >
              Get Directions & Hours <ArrowRight size={20} />
            </button>
          </div>

          <div className="visit-details-box">
            <div className="visit-detail-row">
              <MapPin size={22} />
              <div>
                <h5>Cafe Address</h5>
                <p>Velayutham Road (Near Bus Stand), Sivakasi, Tamil Nadu 626123</p>
              </div>
            </div>

            <div className="visit-detail-row">
              <Clock size={22} />
              <div>
                <h5>Opening Hours</h5>
                <p>Monday to Sunday: 11:00 AM – 11:00 PM</p>
              </div>
            </div>

            <div className="visit-detail-row">
              <Award size={22} />
              <div>
                <h5>Direct Helpline</h5>
                <p>+91 9003772241</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
