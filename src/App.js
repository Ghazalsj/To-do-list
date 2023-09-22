import React, { useState } from 'react';
import './App.css';




function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  const editTask = (index) => {
    const updatedTask = prompt("Enter a new task:", todoList[index]);
    if (updatedTask !== null) {
   const updatedTodoList = [...todoList];
   updatedTodoList[index] = updatedTask;
      setTodoList(updatedTodoList);
    }
  };
  const deleteTask = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
    

      <div className="section">
        <h2>Tasks</h2>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>
              <div className="task">{item}</div>
              <div className="actions">
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            </li>
                 ))}
                 </ul>
               </div>
             </div>
           );
         }
export default App;









