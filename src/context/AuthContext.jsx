import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as apiLogin, register as apiRegister } from '../api/client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        const email = localStorage.getItem('user_email');
        if (token && email) {
            setUser({ email });
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await apiLogin(email, password);
        const { access_token } = response.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_email', email);
        setUser({ email });
        return response;
    };

    const register = async (email, password) => {
        const response = await apiRegister(email, password);
        return response;
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_email');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);