import React, { useState } from 'react';

const DocumentUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('document', selectedFile);

        try {
            const response = await fetch('/api/documents/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadStatus('File uploaded successfully!');
            } else {
                setUploadStatus('File upload failed. Please try again.');
            }
        } catch (error) {
            setUploadStatus('An error occurred during the upload.');
        }
    };

    return (
        <div className="document-upload">
            <h2>Upload Document</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default DocumentUpload;