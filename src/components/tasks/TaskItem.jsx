
const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <li className="task-item">
            <span className="task-title">{task.title}</span>
            <span className="task-done">
                {task.done ? '✅ Выполнено' : '⏳ В процессе'}
            </span>
            <div className="task-actions">
                <button onClick={() => onToggle(task.id, task.done)}>
                    {task.done ? '↩️ Вернуть' : '✅ Выполнить'}
                </button>
                <button onClick={() => onDelete(task.id)}>🗑️</button>
            </div>
        </li>
    );
};

export default TaskItem;