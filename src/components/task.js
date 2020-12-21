import React,{useContext} from 'react';
import {TaskContext} from '../taskcontext';

const Task = (props) => {
    const [tasks, setTasks] = useContext(TaskContext);
    const handleDelete = () => {
      let temp;
      temp = tasks.filter(item => item.id !== props.id)
      setTasks([...temp])
    }
    return(
      <div className="taskContainer"><hr/>
        <li className="task">{props.taskname} {/*props.id*/}</li>
        <button className="newbtn" onClick={handleDelete} >&#x2716;</button>
      </div>
    );
}

export default Task;