import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, nTask}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value       
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'royalblue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'goldenrod',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'darkred',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'></input>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description'></input>
                <select  className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                <option style={normalStyle} value={LEVELS.NORMAL}>
                    Normal
                </option>

                <option style={urgentStyle} value={LEVELS.URGENT}>
                    Urgent
                </option>
                
                <option style={blockingStyle} value={LEVELS.BLOCKING}>
                    Blocking
                </option>

                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                {nTask >0 ? 'Add new task' : 'Create your first task'}
            </button>
            </div>
            
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    nTask: PropTypes.number.isRequired
}

export default TaskForm;
