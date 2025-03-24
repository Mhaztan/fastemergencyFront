// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/signup.css'; // Global CSS
import { registerUser } from '../utils/api';  // Import API function

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // "success" or "error"
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous message

        try {
            await registerUser(username, email, password);
            setMessageType('success');
            setMessage('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login', { state: { message: 'Registration successful! Please login.', type: 'success' } }); // Redirect to login with message
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            setMessageType('error');
            setMessage(error.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div className="signupPage">
            <header className="signupHeader">
                <h1>Sign Up</h1>
            </header>
            <main className="signupContent">
                <form className="signupForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signupButton">Sign Up</button>
                    {message && <div className={`message ${messageType}`}>{message}</div>}
                </form>
            </main>
        </div>
    );
}

export default Signup;