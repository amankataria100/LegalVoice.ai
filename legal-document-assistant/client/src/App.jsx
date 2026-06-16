import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VoiceInterfacePage from './pages/VoiceInterfacePage';
import UserFormPage from './pages/UserFormPage';
import OcrUploadPage from './pages/OcrUploadPage';
import DocumentExplanationPage from './pages/DocumentExplanationPage';
import CompletedFormsPage from './pages/CompletedFormsPage';
import './App.css';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/voice-interface" component={VoiceInterfacePage} />
                    <Route path="/user-form" component={UserFormPage} />
                    <Route path="/ocr-upload" component={OcrUploadPage} />
                    <Route path="/document-explanation" component={DocumentExplanationPage} />
                    <Route path="/completed-forms" component={CompletedFormsPage} />
                </Switch>
                <Footer />
            </Router>
        </UserProvider>
    );
};

export default App;