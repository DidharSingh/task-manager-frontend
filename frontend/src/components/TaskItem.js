import React from 'react';

function TaskItem({ task, onUpdate, onDelete }) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onUpdate(task._id, !task.completed)}
            />
            <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
