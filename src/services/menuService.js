import { fetchFromAPI } from './api';

export const getMenuItems = async () => {
  return await fetchFromAPI('/menu');
};

export const getMenuItemById = async (id) => {
  return await fetchFromAPI(`/menu/${id}`);
};
