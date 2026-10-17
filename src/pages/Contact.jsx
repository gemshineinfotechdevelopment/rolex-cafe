import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import BrushStroke from '../components/common/BrushStroke';

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div className="section-container">
        {/* Contact Page Header */}
        <div className="section-header">
          <span className="section-pretitle">We'd Love To Welcome You</span>
          <h1 className="section-title">VISIT & CONNECT WITH ROLEX</h1>
          <BrushStroke width="220px" />
          <p className="section-subtitle">
            Drop by our cozy cafe on Velayutham Road in Sivakasi, or reach out to our team directly.
          </p>
        </div>

        {/* Cafe Information & Location Map (Side by Side) */}
        <div className="contact-grid">
          {/* Card 1: Rolex Cafe Information */}
          <div className="contact-card-box">
            <h3>Rolex Cafe Information</h3>
            
            <div className="contact-details-list">
              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>Velayutham Road (Near Bus Stand)</p>
                  <p>Sivakasi, Tamil Nadu - 626123, India</p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-item-text">
                  <h4>Telephone & Direct Helpline</h4>
                  <p><a href="tel:9003772211">+91 9003772211</a></p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-item-text">
                  <h4>Email Inquiries</h4>
                  <p><a href="mailto:rolexecafesvk2026@gmail.com">rolexecafesvk2026@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-item-row">
                <div className="contact-item-icon">
                  <Clock size={20} />
                </div>
                <div className="contact-item-text">
                  <h4>Opening Hours</h4>
                  <p>Monday to Sunday: <strong>11:00 AM – 11:00 PM</strong></p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-caramel)' }}>Open all 7 days for dine-in & takeaway</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(204, 157, 89, 0.25)', textAlign: 'center' }}>
              <a 
                href="https://wa.me/919003772211?text=Hi%20Rolex%20Cafe%20Sivakasi"
                target="_blank" 
                rel="noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', padding: '0.65rem 1.6rem', fontSize: '0.92rem' }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Card 2: Stylized Sivakasi Location Map Card */}
          <div className="map-visual-card">
            <div className="map-placeholder-box">
              <div className="map-pin-pulse">
                <MapPin size={26} />
              </div>
              <h4 style={{ fontSize: '1.45rem', color: '#FCEDC4', marginBottom: '0.35rem', fontFamily: 'var(--font-heading)' }}>
                Sivakasi, Tamil Nadu
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#F6E8C8', maxWidth: '340px', lineHeight: 1.55 }}>
                Centrally located on Velayutham Road, just minutes away from Sivakasi New Bus Stand.
              </p>
            </div>

            <div className="map-card-footer">
              <div>
                <span style={{ fontSize: '0.78rem', color: '#8A6E4B', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '2px' }}>
                  Navigation Coordinates
                </span>
                <p style={{ fontSize: '0.95rem', color: '#4A2808', fontWeight: '600', margin: 0 }}>
                  9.4533° N, 77.7972° E
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Sivakasi+Tamil+Nadu" 
                target="_blank" 
                rel="noreferrer"
                className="map-directions-btn"
              >
                Open in Google Maps <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
