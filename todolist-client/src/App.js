import React from 'react';
import './App.css';
import Nav from "./components/nav.js"
import Form from "./components/form.js"
import TaskList from "./components/tasklist.js"
import {TaskProvider} from "./taskcontext"

function App() {
  

  return (
    <div className="App">
      <TaskProvider>
        <div className="App">
          <Nav/>
          <Form/>
          <TaskList/>
        </div>
      </TaskProvider>
    </div>
  );
}

export default App;
