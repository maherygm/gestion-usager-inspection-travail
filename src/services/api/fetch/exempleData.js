import axios from 'axios';

const API_URL = 'URL_DE_VOTRE_API_LARAVEL'; // Remplacez ceci par l'URL de votre API Laravel

const dataService = {
  getList: async () => {
    try {
      const response = await axios.get(`${API_URL}/list`);
      return response.data; // Renvoie les données de réponse de l'API
    } catch (error) {
      throw error.response.data; // Gère les erreurs de requête
    }
  },
};

export default dataService;
