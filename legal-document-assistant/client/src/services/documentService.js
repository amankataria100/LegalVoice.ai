import api from './api';

export const uploadDocument = async (formData) => {
    try {
        const response = await api.post('/documents/upload', formData);
        return response.data;
    } catch (error) {
        throw new Error('Error uploading document: ' + error.message);
    }
};

export const getDocumentList = async () => {
    try {
        const response = await api.get('/documents');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching document list: ' + error.message);
    }
};

export const getDocumentDetails = async (documentId) => {
    try {
        const response = await api.get(`/documents/${documentId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching document details: ' + error.message);
    }
};

export const deleteDocument = async (documentId) => {
    try {
        await api.delete(`/documents/${documentId}`);
    } catch (error) {
        throw new Error('Error deleting document: ' + error.message);
    }
};