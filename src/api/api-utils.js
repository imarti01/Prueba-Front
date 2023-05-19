import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const loginRequest = async (formData) => {
  return await axios
    .post(`${API_URL}/employee/login`, formData)
    .catch((res) => res.response.data.msg);
};

export const editFavCar = async (carId, numEmployee) => {
  return await axios
    .post(
      `${API_URL}/employee/favCar`,
      { carId, numEmployee },
      {
        headers: {
          'x-token': window.localStorage.getItem('token'),
        },
      }
    )
    .catch((res) => res.response.data.msg);
};

export const getAllCarsRequest = async () => {
  return await axios
    .get(`${API_URL}/cars/allCars`, {
      headers: {
        'x-token': window.localStorage.getItem('token'),
      },
    })
    .catch((res) => res.response.data.msg);
};
