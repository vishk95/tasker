import React,{useContext} from 'react';
import {TaskContext} from '../taskcontext';
import axios from 'axios';

const Task = (props) => {
    const [tasks, setTasks] = useContext(TaskContext);

    const handleDelete = (id) => {
      let temp;
      temp = tasks.filter(item => item._id !== id)
      setTasks([...temp])

      axios({
        method: 'delete',
        url: `/list/${id}`
      });
      console.log(`Deleting ${id}`)
    }

    const handleEdit = (id) => {
      const newTask = prompt("Enter new name");
      let temp = [...tasks];
      const index = tasks.findIndex(j => j._id === id);
      temp[index].taskname = newTask;
      console.log("Editing: " + temp[index].taskname);
      setTasks([...temp])

      axios({
        method: 'put',
        url: '/list',
        data: {
          taskname: newTask,
          _id: id 
        }
      });
    }

    return(
      <div className="taskContainer">
        <div className="taskContainerFront"><hr/>
        <li className="task">{props["taskname"]}</li></div>
        <div><button className="newbtn" onClick={() => { handleDelete(props._id)} } >&#x2716;</button>
        <button className="newbtn" onClick={() => { handleEdit(props._id)} } ><i className="fas fa-pencil-alt fa-1x"/></button></div>
      </div>
    );
}

export default Task;