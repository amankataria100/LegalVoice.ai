import { useEffect, useState } from 'react';

const useSpeechRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal) {
                    setTranscript((prev) => prev + result[0].transcript + ' ');
                } else {
                    interimTranscript += result[0].transcript;
                }
            }
            setTranscript((prev) => prev + interimTranscript);
        };

        recognition.onerror = (event) => {
            setError(event.error);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        if (isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }

        return () => {
            recognition.stop();
        };
    }, [isListening]);

    return { isListening, transcript, error, setIsListening };
};

export default useSpeechRecognition;