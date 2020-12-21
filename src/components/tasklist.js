import React,{useContext} from 'react';
import Task from './task';
import {TaskContext} from '../taskcontext';

const TaskList = () => {
    const [tasks] = useContext(TaskContext);
    
    return(
      <div id="listContainer">
            <ul>
              {tasks.length > 0 ? (tasks.map(obj => (
                <div>
                  <Task id={obj.id} taskname={obj.taskname} />
                </div>
              ))) : <div className="icon"><i class="fas fa-pencil-alt fa-5x"></i><span></span></div>}
            </ul>
      </div>
    );
}

export default TaskList;