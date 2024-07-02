import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Assurez-vous que cette URL est correcte

// Inscription
export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/authentication/signup/`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Connexion        
export const signIn = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/api/authentication/signin/`, credentials);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Erreur de réponse du serveur:', error.response.data);
            console.error('Code de statut:', error.response.status);
            throw error.response.data;
        } else if (error.request) {
            console.error('Erreur de requête:', error.request);
            throw new Error('Erreur de requête');
        } else {
            console.error('Erreur de configuration:', error.message);
            throw new Error('Erreur de configuration');
        }
    }
};

// Récupérer les informations utilisateur
export const getUserInfo = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/users/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


// Récupérer les sites archéologiques
export const getSitesArcheologiques = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/site_archeologique/sites/`);
        console.log(response.data); // Log the response data
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// export const createReservation = (reservationData) => {
//     return API_URL.post('api/reservation/', reservationData);
//   };
// Créer une réservation
export const createReservation = async (reservationData) => {
    try {
        const response = await axios.post(`${API_URL}/api/reservation/`, reservationData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

  

