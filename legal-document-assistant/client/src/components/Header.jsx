import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Legal Document Assistant</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/voice-interface">Voice Interface</Link></li>
                    <li><Link to="/user-form">User Details</Link></li>
                    <li><Link to="/ocr-upload">OCR Upload</Link></li>
                    <li><Link to="/document-explanation">Supported Documents</Link></li>
                    <li><Link to="/completed-forms">Completed Forms</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;