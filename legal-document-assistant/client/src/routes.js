import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VoiceInterfacePage from './pages/VoiceInterfacePage';
import UserFormPage from './pages/UserFormPage';
import OcrUploadPage from './pages/OcrUploadPage';
import DocumentExplanationPage from './pages/DocumentExplanationPage';
import CompletedFormsPage from './pages/CompletedFormsPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/voice-interface" component={VoiceInterfacePage} />
                <Route path="/user-form" component={UserFormPage} />
                <Route path="/ocr-upload" component={OcrUploadPage} />
                <Route path="/document-explanation" component={DocumentExplanationPage} />
                <Route path="/completed-forms" component={CompletedFormsPage} />
            </Switch>
        </Router>
    );
};

export default Routes;