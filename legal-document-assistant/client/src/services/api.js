import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchCompletedForms = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/forms/completed`);
        return response.data;
    } catch (error) {
        console.error('Error fetching completed forms:', error);
        throw error;
    }
};

export const uploadDocument = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/documents/upload`, formData, {
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
        const response = await axios.post(`${API_BASE_URL}/forms/submit`, userData);
        return response.data;
    } catch (error) {
        console.error('Error submitting user details:', error);
        throw error;
    }
};

export const getSupportedDocuments = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/documents/supported`);
        return response.data;
    } catch (error) {
        console.error('Error fetching supported documents:', error);
        throw error;
    }
};