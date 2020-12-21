import React,{createContext} from 'react';

export const TaskContext = createContext();
export const TaskProvider = (props) => {
  const [tasks, setTasks] = React.useState([
    {
      taskname: "New task created inside context.",
      id: 1,
    },
    {
      taskname: "2nd task created inside context.",
      id: 2,
    }
  ]);
  return(
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
}