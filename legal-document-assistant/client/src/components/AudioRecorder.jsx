import React, { useState, useEffect } from 'react';
import { useAudioRecording } from '../hooks/useAudioRecording';
import './AudioRecorder.css';

const AudioRecorder = ({ onRecordingComplete }) => {
    const { isRecording, startRecording, stopRecording, audioBlob } = useAudioRecording();
    const [recordingStatus, setRecordingStatus] = useState('Click to start recording');

    useEffect(() => {
        if (audioBlob) {
            onRecordingComplete(audioBlob);
            setRecordingStatus('Recording complete! Click to record again.');
        }
    }, [audioBlob, onRecordingComplete]);

    const handleRecordClick = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
            setRecordingStatus('Recording... Click to stop.');
        }
    };

    return (
        <div className="audio-recorder">
            <button onClick={handleRecordClick} className="record-button">
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <p>{recordingStatus}</p>
        </div>
    );
};

export default AudioRecorder;