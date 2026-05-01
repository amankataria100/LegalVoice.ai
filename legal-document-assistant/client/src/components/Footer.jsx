import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Legal Document Assistant. All rights reserved.</p>
                <p>Providing assistance for your legal document needs.</p>
            </div>
        </footer>
    );
};

export default Footer;