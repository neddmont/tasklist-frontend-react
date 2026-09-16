import {useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const CreateTaskForm = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert('Название задачи не может быть пустым');
            return;
        }
        onCreate(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Button type="submit" variant="primary">
                ➕ Создать
            </Button>
        </form>
    );
};

export default CreateTaskForm;