// src/components/Login.js
import  { useState } from 'react';
import { useAuth } from '../context/authcontext';
import { login } from '../services/authservice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login: loginUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login({ email, password });
            loginUser({ email }, data.token);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
