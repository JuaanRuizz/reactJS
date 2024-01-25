import React, {useEffect, useState} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
    
    //Estado del componente
    const [task, setTask] = useState(defaultTask);

    //Control ciclo de vida del componente
    useEffect(() => {
        console.log("Task state has been modified")
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [task]);

    const changeCompleted = (id) => {
        console.log("TO_DO: Cambiar estado de una tarea")
    }

    return (
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
            {/* TO_DO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task = {defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
