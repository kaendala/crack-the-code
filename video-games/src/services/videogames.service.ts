import axios from 'axios';
import { API_URL } from '../constants/env';

const getAll = async () => {
  const response = await axios(
    `${API_URL}/learning-paths-all/ruta-de-aprendizaje-para-desarrollo-de-videojuegos/`
  );
  return response;
};

export const VideogamesServices = {
  getAll,
};
