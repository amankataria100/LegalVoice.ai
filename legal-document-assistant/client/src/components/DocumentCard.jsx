import React from 'react';
import './DocumentCard.css';

const DocumentCard = ({ document, onSelect }) => {
    return (
        <div className="document-card" onClick={() => onSelect(document)}>
            <h3 className="document-title">{document.title}</h3>
            <p className="document-description">{document.description}</p>
            <p className="document-date">Uploaded on: {new Date(document.uploadDate).toLocaleDateString()}</p>
            <button className="document-select-button">Select Document</button>
        </div>
    );
};

export default DocumentCard;