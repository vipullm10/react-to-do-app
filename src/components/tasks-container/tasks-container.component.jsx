import React from 'react';
import {ReactComponent as Delete} from '../../assets/trash.svg';
import './tasks-container.styles.css';

const TasksContainer = ({tasks,handleDelete}) => (
    <div className="tasks-container">
        {
            tasks.map((task)=>{
                return(
                    <div key={task.key} className="task-field">
                        <div className="task-title">
                            <p>{task.title}</p>
                        </div>
                        <div className="remove-btn">
                            <Delete onClick={handleDelete} data-key={task.key} className="delete-btn"/>
                        </div>
                    </div>
                )
            })
        }
    </div>
)

export default TasksContainer;