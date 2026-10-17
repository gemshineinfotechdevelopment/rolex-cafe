import React from 'react';

export default function BrushStroke({ width = '180px', color = '#C5A059' }) {
  return (
    <div className="brush-container" style={{ maxWidth: width }}>
      <svg 
        className="brush-stroke-svg"
        viewBox="0 0 240 18" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M3 11.5C35 4.5 95 3 135 6.5C175 10 215 13.5 237 9C215 14 150 16.5 110 13.5C70 10.5 25 15.5 3 11.5Z" 
          fill={color}
          opacity="0.95"
        />
        <path 
          d="M20 14C60 9 140 8 200 12C150 15 80 16 20 14Z" 
          fill="#8E5FD4" 
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
