import axios from 'axios';
import React,{createContext ,useEffect} from 'react';

export const TaskContext = createContext();
export const TaskProvider = (props) => {
  
  useEffect(() => {
    axios({
      method: "get",
      withCredentials: true,
      url: "/list"

    }).then((res) => {
      setTasks(res.data)
    });
  }, []);

  const [tasks, setTasks] = React.useState([
    {}
  ]);


  return(
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
}