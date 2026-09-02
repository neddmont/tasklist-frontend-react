import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import RegisterForm from '../components/auth/RegisterForm';
import '../styles/AuthHTML.css';

const RegisterPage = () => {
    const [error, setError] = useState('');
    const { Register } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (email, password) => {
        try {
            await Register(email, password);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.detail || 'Ошибка Регистрации');
        }
    };

    return (
    
            <div className="container">
                <div className="form-Container">
                    <h2>Register</h2>
                        <RegisterForm onSubmit={handleRegister} error={error}/>
                    <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
                </div>
            </div>
       
        
    );
};

export default RegisterPage;