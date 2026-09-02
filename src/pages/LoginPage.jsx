import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/auth/LoginForm';


const loginPage = () => {
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.detail || 'Ошибка входа');
        }
    };

    return (
        <div className="container">
            <h2>Вход</h2>
            <LoginForm onSubmit={handleLogin} error = {error}/>
            <p>Нет аккаунта<Link to ="/register"> Register</Link></p>
        </div>
    );
};

export default loginPage;