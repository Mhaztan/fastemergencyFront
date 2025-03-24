// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import './styles/login.css'; // Global CSS
// import { loginUser } from '../utils/api';  // Import API function

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [messageType, setMessageType] = useState(''); // "success" or "error"
//     const navigate = useNavigate();
//     const location = useLocation();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage(''); // Clear previous message

//         try {
//             const data = await loginUser(email, password);

//             localStorage.setItem('token', data.token); // Store the token
//             setMessageType('success');
//             setMessage('Login successful!');
//             navigate('/', { state: { message: 'Login successful!', type: 'success' } }); // Redirect to home with message
//         } catch (error) {
//             setMessageType('error');
//             setMessage(error.message || 'Login failed. Please check your credentials.');
//             navigate('/', { state: { message: error.message || 'Login failed. Please check your credentials.', type: 'error' } }); // Redirect to home with message
//         }
//     };

//     return (
//         <div className="loginPage">
//             <header className="loginHeader">
//                 <h1>Login</h1>
//             </header>
//             <main className="loginContent">
//                 <form className="loginForm" onSubmit={handleSubmit}>
//                     <div className="formGroup">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="formGroup">
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="loginButton">Login</button>
//                     {message && <div className={`message ${messageType}`}>{message}</div>}
//                 </form>
//                 <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//             </main>
//         </div>
//     );
// }

// export default Login;

// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/login.css'; // Global CSS
import { loginUser } from '../utils/api';  // Import API function

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // "success" or "error"
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous message

        try {
            const data = await loginUser(email, password);

            localStorage.setItem('token', data.token); // Store the token
            setMessageType('success');
            setMessage('Login successful!');
            // Optionally: Redirect after a short delay
            setTimeout(() => {
                navigate('/'); // Redirect to home after a delay
            }, 1500);
        } catch (error) {
            setMessageType('error');
            setMessage(error.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="loginPage">
            <header className="loginHeader">
                <h1>Login</h1>
            </header>
            <main className="loginContent">
                <form className="loginForm" onSubmit={handleSubmit}>
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
                    <button type="submit" className="loginButton">Login</button>
                    {message && <div className={`message ${messageType}`}>{message}</div>}
                </form>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </main>
        </div>
    );
}

export default Login;