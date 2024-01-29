import React, {useEffect, useState} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {
    const defaultTask1 = new Task("Example 1", "description 1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example 2", "description 2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example 3", "description 3", false, LEVELS.BLOCKING);


    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control ciclo de vida del componente
    useEffect(() => {
        console.log("Task state has been modified")
        setLoading(false);
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [tasks]);

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
                            {tasks.map((task, index) => {
                                return (
                                    <TaskComponent key={index} task = {task}>
                                    </TaskComponent>
                                    )
                                }
                            )}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <TaskForm></TaskForm>
            {/* TO_DO: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task = {defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
