import React from 'react';
import { ArrowRight, Coffee, Heart, Sparkles, CheckCircle2, MapPin, Utensils } from 'lucide-react';
import BrushStroke from '../components/common/BrushStroke';
import heroClean from '../assets/images/hero-clean.jpg';

export default function About({ onNavigate }) {
  return (
    <div className="about-page">
      {/* 1. About Hero Header */}
      <section className="about-hero">
        <div className="section-container">
          <span className="section-pretitle">Our Story & Vibe</span>
          <h1 className="section-title">WELCOME TO ROLEX CAFÉ</h1>
          <BrushStroke width="220px" />
          <p className="section-subtitle" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2F7775', marginTop: '0.8rem' }}>
            Where delicious food meets great vibes! ☕🍔
          </p>
        </div>
      </section>

      {/* 2. Main Story Section */}
      <section className="editorial-story-section">
        <div className="section-container">
          <div className="editorial-grid">
            {/* Visual Photo Box */}
            <div className="editorial-img-frame">
              <img 
                src={heroClean} 
                alt="Rolex Cafe Ambience and Delights" 
                loading="lazy" 
              />
            </div>

            {/* Story Text Content */}
            <div className="editorial-content">
              <span className="section-pretitle">Taste • Freshness • Comfort</span>
              <h3>THE PERFECT SPOT FOR EVERY MOOD</h3>
              <BrushStroke width="160px" />

              <p style={{ fontSize: '1.08rem', lineHeight: '1.75', marginTop: '1.2rem' }}>
                At Rolex Cafe, we bring you the perfect blend of taste, freshness, and comfort. 
                From refreshing tea and aromatic coffee to juicy burgers, cheesy pizzas, crispy veg rolls, 
                and delicious momos, every bite is made to satisfy your cravings.
              </p>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                Beat the heat with our refreshing mojitos and creamy shakes, or enjoy our flavour-packed 
                combos for a satisfying meal. Whether you're catching up with friends, spending time with 
                family, or simply treating yourself, Rolex Café is the perfect spot for every mood and moment.
              </p>

              {/* Quote Highlight */}
              <div className="quote-highlight">
                “We believe every cup, every bite, and every visit should leave you with a smile.”
              </div>

              {/* Brand Motto Banner */}
              <div className="about-motto-banner">
                <Sparkles size={20} color="#E2B46C" className="motto-icon" />
                <span>Rolex Cafe — Great Taste. Cool Vibes. Unforgettable Moments.</span>
              </div>
            </div>
          </div>

          {/* 3. The Four Pillars of Rolex Cafe */}
          <div style={{ marginTop: '4rem', marginBottom: '5.5rem' }}>
            <div className="section-header">
              <span className="section-pretitle">What Sets Us Apart</span>
              <h2 className="section-title">THE FOUR PILLARS OF ROLEX</h2>
              <BrushStroke width="190px" />
              <p className="section-subtitle">
                The core principles that guide every recipe we plate and every guest we welcome.
              </p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-box">
                <div className="pillar-number">01</div>
                <h4>Authentic Kitchen Craft</h4>
                <p>
                  Every burger patty is hand-crafted and every pizza stone-baked to order. We blend traditional 
                  local spice balance with modern cafe classics for bold, honest taste.
                </p>
              </div>

              <div className="pillar-box">
                <div className="pillar-number">02</div>
                <h4>Sips for Every Season</h4>
                <p>
                  Wake up to aromatic coffees and soothing teas, refresh afternoon slumps with zesty chilled 
                  mojitos, or indulge in rich Belgian chocolate ganache thickshakes.
                </p>
              </div>

              <div className="pillar-box">
                <div className="pillar-number">03</div>
                <h4>Warm Cozy Ambience</h4>
                <p>
                  Designed with warm cream interiors, soft golden backlighting, and plush teal seating. A relaxed 
                  haven for friendly conversations, celebrations, and late-evening hangouts.
                </p>
              </div>

              <div className="pillar-box">
                <div className="pillar-number">04</div>
                <h4>Generous Value Combos</h4>
                <p>
                  We believe great food should be accessible to all. Our curated family and student combos bring 
                  generous portions and premium quality at friendly, honest prices.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Second Story Section: The Culinary Commitment (Reversed Grid) */}

          {/* 5. Bottom Action Cards */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button 
              className="btn-primary" 
              onClick={() => onNavigate('menu')}
            >
              Explore Our Menu <ArrowRight size={20} />
            </button>
            <button 
              className="btn-primary" 
              style={{ background: 'linear-gradient(135deg, #2F7775 0%, #205351 100%)', borderColor: '#2F7775' }}
              onClick={() => onNavigate('contact')}
            >
              Visit Rolex Cafe In Sivakasi <MapPin size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
