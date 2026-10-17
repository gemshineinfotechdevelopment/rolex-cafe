import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import BrushStroke from '../components/common/BrushStroke';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="gallery-page-wrapper">
      <div className="section-container">
        {/* Gallery Header */}
        <div className="section-header">
          <span className="section-pretitle">Visual Feasts & Atmosphere</span>
          <h1 className="section-title">THE ROLEX GALLERY</h1>
          <BrushStroke width="210px" />
          <p className="section-subtitle">
            A visual glimpse into our fiery kitchen craft, vibrant presentations, artisan beverages, 
            and the warm golden cafe ambience that welcomes you in Sivakasi.
          </p>
        </div>

        {/* Masonry-Style Gallery Grid - Pure Visuals (No descriptions on hover/touch) */}
        <div className="gallery-masonry-grid">
          {GALLERY_ITEMS.map((photo) => (
            <div 
              key={photo.id} 
              className="gallery-item-card"
              onClick={() => setActivePhoto(photo)}
              tabIndex={0}
              role="button"
              aria-label="View photo"
              onKeyDown={(e) => { if (e.key === 'Enter') setActivePhoto(photo); }}
            >
              <img src={photo.image} alt="Rolex Cafe Gallery Item" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Pure Full Image Only, No Descriptions */}
      {activePhoto && (
        <div className="lightbox-backdrop" onClick={() => setActivePhoto(null)}>
          <div 
            className="lightbox-content-box" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setActivePhoto(null)}
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            <div className="lightbox-img-wrapper" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img 
                src={activePhoto.image} 
                alt="Rolex Cafe Full View" 
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
