import axios from 'axios';
import { API_URL } from '../constants/env';

const getAll = async () => {
  const response = await axios(`${API_URL}/learning-paths/`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  return response;
};

export const LearnRoutesServices = {
  getAll,
};
