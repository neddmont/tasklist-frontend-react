import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../api/client';
import TaskList from '../components/tasks/TaskList';
import CreateTaskForm from '../components/tasks/CreateTaskForm';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import '../styles/dashboard.css'

const dashboard = () => {
    const { user, logout } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    const [newTitle, setNewTitle] = useState('')

    const loadTasks = async () => {
        try {
            const response = await getTasks();
            setTasks(response.data);
            setError('');
        } catch (error) {
            setError('Ошбика загрузки задач');
            console.error(err)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleCreateTask = async () => {
        if(!newTitle.trim()) {
            alert('Введите название задачи');
            return;
        };
        try {
            await createTask(newTitle);
            setNewTitle('');
            setIsModalOpen(false);
            loadTasks();
        } catch (err) {
            alert('Ошибка создания задачи');
        }
    };

    const handleToggleTask = async (id, done) => {
        try {
            await updateTaskStatus(id, !done);
            loadTasks();
        } catch (error) {
            alert('Ошибка обновления статуса');
        }
    };

    const handleDeleteTask = async (id) => {
        if (!confirm('Удалить задачу?')) return;
        try {
            await deleteTask(id);
            loadTasks();
        } catch (error) {
            alert('Ошибка удаления задачи');
        }
    };

    if (loading) return <div className="loading">Загрузка...</div>;

     return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>📋 TaskList</h1>
                <div className="header-right">
                    <span className="user-email">{user?.email}</span>
                    <Button onClick={logout} variant="danger">Выйти</Button>
                </div>
            </header>

            <main className="dashboard-main">
                <div className="task-header">
                    <h2>Мои задачи</h2>
                    <Button onClick={() => setIsModalOpen(true)} variant="primary">
                        ➕ Новая задача
                    </Button>
                </div>

                {error && <p className="error">{error}</p>}

                <TaskList
                    tasks={tasks}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                />
            </main>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Создать задачу</h2>
                <CreateTaskForm onCreate={handleCreateTask} />
                <Button onClick={() => setIsModalOpen(false)} variant="secondary">
                    Отмена
                </Button>
            </Modal>
        </div>
    );
};

export default dashboard;