import React from 'react';
import './task-form.styles.css';

const TaskForm = ({getTask,handleClick}) => (
    <div className="task-form">
            <input 
                type="text" 
                placeholder="Enter Task Title"  
                className="task-input"
                onChange={getTask}
            >
            </input>
            <button className="submit-button" onClick={handleClick}>
            Add Task</button>
    </div>
)

export default TaskForm;