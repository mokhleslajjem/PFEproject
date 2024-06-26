import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  // Assurez-vous que cette URL est correcte

// Inscription
export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup/`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Connexion        
export const signIn = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/signin/`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
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
