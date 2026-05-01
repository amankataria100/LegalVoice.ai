import React from 'react';
import './DocumentExplanationPage.css';

const DocumentExplanationPage = () => {
    return (
        <div className="document-explanation-page">
            <h1>Supported Documents Explanation</h1>
            <p>This page provides detailed explanations for the various types of legal documents that can be processed by our assistant.</p>
            
            <h2>Types of Supported Documents</h2>
            <ul>
                <li>
                    <h3>Contracts</h3>
                    <p>Contracts are legally binding agreements between two or more parties. They outline the terms and conditions of a deal.</p>
                </li>
                <li>
                    <h3>Wills and Trusts</h3>
                    <p>Wills and trusts are legal documents that outline how a person's assets will be distributed after their death.</p>
                </li>
                <li>
                    <h3>Powers of Attorney</h3>
                    <p>A power of attorney allows one person to act on behalf of another in legal or financial matters.</p>
                </li>
                <li>
                    <h3>Real Estate Documents</h3>
                    <p>Real estate documents include deeds, leases, and purchase agreements related to property transactions.</p>
                </li>
                <li>
                    <h3>Business Formation Documents</h3>
                    <p>These documents are necessary for establishing a business entity, such as articles of incorporation or operating agreements.</p>
                </li>
            </ul>

            <h2>Why Understanding These Documents is Important</h2>
            <p>Understanding the types of documents and their implications is crucial for ensuring that your legal needs are met effectively. Each document serves a specific purpose and has legal consequences that can impact your rights and obligations.</p>
        </div>
    );
};

export default DocumentExplanationPage;