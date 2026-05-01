import React, { useState } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import LoadingSpinner from '../components/LoadingSpinner';

const OcrUploadPage = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleUpload = async (file) => {
        setLoading(true);
        setMessage('');

        // Simulate an API call to upload the document for OCR processing
        try {
            const formData = new FormData();
            formData.append('document', file);

            const response = await fetch('/api/ocr/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`Document uploaded successfully: ${data.message}`);
            } else {
                setMessage('Failed to upload document. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the document.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ocr-upload-page">
            <h1>Upload Document for OCR Processing</h1>
            {loading && <LoadingSpinner />}
            <DocumentUpload onUpload={handleUpload} />
            {message && <p>{message}</p>}
        </div>
    );
};

export default OcrUploadPage;