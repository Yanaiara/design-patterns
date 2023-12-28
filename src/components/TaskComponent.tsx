import React, { useState } from 'react';
import TaskManager from '../patterns/Singleton';

const TaskComponent: React.FC = () => {
    const [task, setTask] = useState<string>('');

    const handleAddTask = () => {
        TaskManager.addTask(task);
        setTask('');
    };

    return (
        <div>
            <h2>Task List</h2>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {TaskManager.getTasks().map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskComponent;
