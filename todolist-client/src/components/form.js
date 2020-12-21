import React,{useState, useContext} from 'react';
import {TaskContext} from '../taskcontext';

const Form = () => {
    const [tasks, setTasks] = useContext(TaskContext);
    const [state, setState] = useState({
      text: ""
    })
    
    const handleChange = (e) => {
      setState({
        text: e.target.value
      })
    }
    
    const handleAdd = () => {
      if (!state.text) return;
      let temp = [...tasks]
      temp.push({
                taskname: state.text,
                id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 0
                })
      setTasks([...temp])
      setState({
        text: ""
        })
      }
      
    return(
      <div className="Container">
        <input type="text" value={state.text} name="taskname" id="taskname" placeholder="Add task" onChange={handleChange} />
        <button className="newbtn btn2" type="submit" onClick={handleAdd} >Add</button>
      </div>
    );
}

export default Form;