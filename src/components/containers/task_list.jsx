import React, {useEffect, useState} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);
    
    //Estado del componente
    const [task, setTask] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    //Control ciclo de vida del componente
    useEffect(() => {
        console.log("Task state has been modified")
        setLoading(false);
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [task]);

    const changeCompleted = (id) => {
        console.log("TO_DO: Cambiar estado de una tarea")
    }

    return (
        <div>
            <div className='col-12'>

                <div className='card'>
                {/* Card header (Title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TO_DO: Iterar sobre lista de tareas*/}
                            <TaskComponent task = {defaultTask}></TaskComponent>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            {/* TO_DO: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task = {defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
