import { fetchFromAPI } from './api';

export const createOrder = async (orderData) => {
  return await fetchFromAPI('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
};

export const getOrders = async () => {
  return await fetchFromAPI('/orders');
};
