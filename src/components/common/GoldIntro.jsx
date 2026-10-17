import React, { useState, useEffect } from 'react';
import shopLogo from '../../assets/images/shop-logo.png';

export default function GoldIntro({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Auto-fade after 2.4 seconds
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 700);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 400);
  };

  return (
    <div className={`gold-intro-overlay ${fading ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <img src={shopLogo} alt="Rolex Café Logo" className="intro-logo-badge" />
        <h1 className="intro-title">ROLEX CAFE</h1>
        <p className="intro-tagline">“Good Food. Happy Mood.”</p>
        <span className="intro-location">Sivakasi, Tamil Nadu</span>
        <button className="intro-skip-btn" onClick={handleSkip}>
          Enter Cafe →
        </button>
      </div>
    </div>
  );
}
