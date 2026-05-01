import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <Navbar />
            <main>
                <h1>Welcome to the Legal Document Assistant</h1>
                <p>Your one-stop solution for managing legal documents efficiently.</p>
                <p>Use our voice or chat interface to select documents, fill out forms, and upload files for OCR processing.</p>
                <p>Explore our features and get started today!</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;