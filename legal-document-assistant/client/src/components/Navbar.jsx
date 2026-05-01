import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Legal Document Assistant</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/voice-interface">Voice Interface</Link>
                </li>
                <li>
                    <Link to="/user-form">User Details</Link>
                </li>
                <li>
                    <Link to="/ocr-upload">OCR Upload</Link>
                </li>
                <li>
                    <Link to="/document-explanation">Supported Documents</Link>
                </li>
                <li>
                    <Link to="/completed-forms">Completed Forms</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;