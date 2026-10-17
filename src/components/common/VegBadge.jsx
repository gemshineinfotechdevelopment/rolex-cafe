import React from 'react';

export default function VegBadge({ isVeg, showText = false }) {
  return (
    <span 
      className={`fssai-indicator ${isVeg ? 'veg' : 'non-veg'}`}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <span className="fssai-circle" />
      {showText && (
        <span style={{ fontSize: '0.75rem', marginLeft: '0.4rem', color: isVeg ? 'var(--color-veg)' : 'var(--color-nonveg)' }}>
          {isVeg ? 'VEG' : 'NON-VEG'}
        </span>
      )}
    </span>
  );
}
