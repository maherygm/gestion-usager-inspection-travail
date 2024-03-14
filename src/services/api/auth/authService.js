import axios from 'axios';

const API_URL = 'URL_DE_VOTRE_API_LARAVEL'; // Remplacez ceci par l'URL de votre API Laravel

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      return response.data; // Renvoie les données de réponse de l'API
    } catch (error) {
      throw error.response.data; // Gère les erreurs de requête
    }
  },

  register: async (name, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
      });
      return response.data; // Renvoie les données de réponse de l'API
    } catch (error) {
      throw error.response.data; // Gère les erreurs de requête
    }
  },

  resetPassword: async (email) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, {
        email,
      });
      return response.data; // Renvoie les données de réponse de l'API
    } catch (error) {
      throw error.response.data; // Gère les erreurs de requête
    }
  },
};

export default authService;
