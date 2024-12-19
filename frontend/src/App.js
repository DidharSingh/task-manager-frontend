import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { fetchTasks, addTask, updateTask, deleteTask } from './utils/api';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then(setTasks);
    }, []);

    const handleAddTask = (task) => {
        addTask(task).then(newTask => setTasks([...tasks, newTask]));
    };

    const handleUpdateTask = (id, completed) => {
        updateTask(id, completed).then(updatedTask => {
            setTasks(tasks.map(task => task._id === id ? updatedTask : task));
        });
    };

    const handleDeleteTask = (id) => {
        deleteTask(id).then(() => {
            setTasks(tasks.filter(task => task._id !== id));
        });
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTask onAdd={handleAddTask} />
            <TaskList tasks={tasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
        </div>
    );
}

export default App;
