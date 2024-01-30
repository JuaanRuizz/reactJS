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
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log("TaskList component is going to unmount...")
        };
    }, [tasks]);

    function completeTask (task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //We update the component´s state with the new task´s list and it will update the task´s iteration in order to show the task updated
        setTasks(tempTask); 
    }

    function removeTask(task){
        console.log('Remove this Task:', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        setTasks(tempTask);
    }
    
    function addTask(task){
        console.log('Remove this Task:', task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask)
    }

    const Table = () => {
        return(
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
                            <TaskComponent 
                            key={index} 
                            task = {task} 
                            complete={completeTask}
                            remove ={removeTask}>                             
                            </TaskComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let taskTable = <Table></Table>

    if(tasks.length > 0){
        taskTable = <Table></Table>
    }else{
        taskTable = (
        <div>
            <h3> There are no tasks to show</h3>
            <h4> Please create one</h4>
        </div>)
        
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
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
                    {/* TO_DO: Add loading spinner */}
                    {loading ? (<p style={loadingStyle}>Loading task...</p>) :taskTable}
                </div>
                </div>
            </div>
            
            <TaskForm add = {addTask} nTask={tasks.length}></TaskForm>
            {/* TO_DO: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task = {defaultTask}></TaskComponent> */}
        </div>
    );
};


export default TaskListComponent;
