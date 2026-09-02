import Button from '../ui/Button';
import Input from '../ui/Input';

const CreateTaskForm = ({ value, onChange, onCreate }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Название задачи"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            />
            <Button type="submit" variant="primary">
                ➕ Создать
            </Button>
        </form>
    );
};

export default CreateTaskForm;