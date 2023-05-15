import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const loginRequest = async (formData) => {
  return await axios
    .post(`${API_URL}/employee/login`, formData)
    .catch((res) => res.response.data.msg);
};
