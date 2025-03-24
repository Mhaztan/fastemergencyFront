// src/admin/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { loginAdmin } from '../../utils/api';  // Import the new api call

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const token = await loginAdmin(email, password); // Call API

            if (token) {
                localStorage.setItem('adminToken', token);
                navigate('/admin/dashboard');  // Redirect to dashboard on success
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <Paper elevation={3} style={{ padding: 20, width: 300, margin: '50px auto' }}>
            <Typography variant="h5" align="center" gutterBottom>
                Admin Login
            </Typography>
            {error && <Typography color="error" align="center">{error}</Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Paper>
    );
}

export default LoginForm;