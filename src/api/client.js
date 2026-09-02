import axios from 'axios';

const API_URL = 'https://tasklist-backend-j30i.onrender.com';


export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


api.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});


export const register = (email, password) => {
    return api.post('/auth/register', {email , password});
}

export const login = (email, password) => {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    return api.post('/auth/login', formdata, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getTasks = () => api.get('/tasks');


export const createTask = (title) => api.post('/tasks', {title, done: false});

export const updateTaskStatus = (taskId, done) => 
    api.patch(`/tasks/${taskId}` , {done});

export const deleteTask = (taskId) => api.delete(`/tasks/${taskId}`);




