import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const loginRequest = async (formData) => {
  return await axios
    .post(`${API_URL}/employee/login`, formData)
    .catch((res) => res.response.data.msg);
};

export const getAllCarsRequest = async (token) => {
  const headers = { 'x-token': token };
  return await axios
    .get(`${API_URL}/cars/allCars`, { headers })
    .catch((res) => res.response.data.msg);
};

export const editFavCar = async (token, carId, userId) => {
  const headers = { 'x-token': token };
  return await axios
    .get(`${API_URL}/cars/allCars`, { headers })
    .catch((res) => res.response.data.msg);
};
