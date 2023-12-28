import React, { ReactElement } from 'react';
import { Task, createImportantTask, createSimpleTask } from '../patterns/TaskFactory';

const TaskFactoryComponent: React.FC = () => {
    const renderTask = (createTask: (taskName: string) => Task, taskName: string): React.ReactNode => {
        const task = createTask(taskName);
        return <li key={taskName}>{task.display() as unknown as ReactElement}</li>;
    };

    return (
        <div>
            <h2>Task Factory</h2>
            <ul>
                {renderTask(createSimpleTask, 'Do something simple')}
                {renderTask(createImportantTask, 'Do something important')}
            </ul>
        </div>
    );
};

export default TaskFactoryComponent;
