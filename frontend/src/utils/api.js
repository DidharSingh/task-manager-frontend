const API_URL = 'http://localhost:5000/api/tasks';

export const fetchTasks = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

export const addTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });
    return await response.json();
};

export const updateTask = async (id, completed) => {
    const response = await fetch(\`\${API_URL}/\${id}\`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });
    return await response.json();
};

export const deleteTask = async (id) => {
    await fetch(\`\${API_URL}/\${id}\`, { method: 'DELETE' });
};
