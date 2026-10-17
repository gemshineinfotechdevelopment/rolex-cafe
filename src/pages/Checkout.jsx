import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../services/orderService';

export default function Checkout() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderPayload = {
        customerName,
        tableNumber,
        items: cartItems,
        totalAmount,
      };
      const res = await createOrder(orderPayload);
      setOrderStatus(res.message || 'Order placed successfully!');
      clearCart();
    } catch (err) {
      setOrderStatus('Error placing order. Please try again.');
    }
  };

  return (
    <div className="checkout-page">
      <h2>Complete Your Rolex Cafe Order</h2>
      {orderStatus ? (
        <p className="order-status-msg">{orderStatus}</p>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Table / Room Number:</label>
            <input 
              type="text" 
              value={tableNumber} 
              onChange={(e) => setTableNumber(e.target.value)} 
              required 
            />
          </div>
          <div className="checkout-summary">
            <p>Total to pay: ₹{totalAmount}</p>
          </div>
          <button type="submit" className="submit-order-btn">Confirm Order</button>
        </form>
      )}
    </div>
  );
}
