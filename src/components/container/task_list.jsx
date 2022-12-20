import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default descriptiion', false, LEVELS.NORMAL);
    return (
        <>
            <div>
                Your Task:
            </div>
            {/* Aplicar un For/Map para renderizar una lista*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </>
    );
};


export default TaskListComponent;
