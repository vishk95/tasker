import React from 'react'

const AddTask = (createTask) => {
     return (
         <div>
            <input type="text"  name="taskname" id="taskname" placeholder="Add task" />
            <button type="button" onClick= {(e) => createTask()} >Add</button>           
         </div>
     );
}

export default AddTask