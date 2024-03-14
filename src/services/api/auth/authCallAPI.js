// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000:8000/api', // Remplacez par l'URL de votre API
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
    try {
      const response = await api.post('/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
