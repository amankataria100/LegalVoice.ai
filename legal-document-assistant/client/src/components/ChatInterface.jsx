import React, { useState } from 'react';
import './ChatInterface.css';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            // Here you would typically send the message to the backend or process it
            setInput('');
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={handleSendMessage} className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatInterface;