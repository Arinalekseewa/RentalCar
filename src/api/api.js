import axios from "axios";

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
  withCredentials: false,
});

export const getCarByIdAPI = async (id) => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};
