import React from 'react';

export default function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <div className="menu-card-body">
        <h3 className="menu-item-title">{item.name}</h3>
        <div className="menu-card-footer">
          <span className="menu-item-price">₹{item.price}</span>
          {onAddToCart && (
            <button className="add-btn" onClick={() => onAddToCart(item)}>
              Add to Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
