import React, { useState } from 'react';
import AudioRecorder from '../components/AudioRecorder';
import ChatInterface from '../components/ChatInterface';
import '../styles/pages/VoiceInterfacePage.css';

const VoiceInterfacePage = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');

    const handleTranscriptUpdate = (newTranscript) => {
        setTranscript(newTranscript);
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
    };

    return (
        <div className="voice-interface-page">
            <h1>Voice Interface for Document Selection</h1>
            <div className="interface-container">
                <AudioRecorder 
                    isRecording={isRecording} 
                    onTranscriptUpdate={handleTranscriptUpdate} 
                    toggleRecording={toggleRecording} 
                />
                <ChatInterface transcript={transcript} />
            </div>
        </div>
    );
};

export default VoiceInterfacePage;