import axios from 'axios';

const API_BASE_URL = 'https://legalvoice-ai.onrender.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export default api;

export const fetchCompletedForms = async () => {
    try {
        const response = await api.get('/forms/completed');
        return response.data;
    } catch (error) {
        console.error('Error fetching completed forms:', error);
        throw error;
    }
};

export const uploadDocument = async (formData) => {
    try {
        const response = await api.post('/documents/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading document:', error);
        throw error;
    }
};

export const submitUserDetails = async (userData) => {
    try {
        const response = await api.post('/forms/submit', userData);
        return response.data;
    } catch (error) {
        console.error('Error submitting user details:', error);
        throw error;
    }
};

export const getSupportedDocuments = async () => {
    try {
        const response = await api.get('/documents/supported');
        return response.data;
    } catch (error) {
        console.error('Error fetching supported documents:', error);
        throw error;
    }
};