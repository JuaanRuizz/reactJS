import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//Importamos la hoja de estilos task.scss
// import "../../../src/styles/task.scss" 

const TaskComponent = ({ task, complete, remove}) => {

    useEffect(() => {
        console.log("Created task")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

//Function that returns a badge depending on the level task.
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
                default:
                    break;
        }
    }

    // Function that returns icon depending in completion of the task

    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align-middle'>
                <span>{task.description}</span>
            </td>

            <td className='align-middle'>
            {/* Execution of function to return a badge element */}
                {taskLevelBadge()}
            </td>
            
            <td className='align-middle'>
            {/* Execution of function to return a icon dependind on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)} ></i>
        
            </td>
        </tr>
        
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
