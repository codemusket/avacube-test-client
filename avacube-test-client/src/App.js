import React from 'react';
import './App.css';

function App() {
  // Function for Create Task
  const createTask = () => {
    console.log("Create Task Called");
    alert("Create Task Function Called");
  };

  // Function for List Task
  const listTask = () => {
    console.log("List Task Called");
    alert("List Task Function Called");
  };

  // Function for Delete Task
  const deleteTask = () => {
    console.log("Delete Task Called");
    alert("Delete Task Function Called");
  };

  // Function for Cancel Task
  const cancelTask = () => {
    console.log("Cancel Task Called");
    alert("Cancel Task Function Called");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management</h1>
        <div style={{ margin: '20px' }}>
          <button onClick={createTask}>Create Task</button>
        </div>
        <div style={{ margin: '20px' }}>
          <button onClick={listTask}>List Task</button>
        </div>
        <div style={{ margin: '20px' }}>
          <button onClick={deleteTask}>Delete Task</button>
        </div>
        <div style={{ margin: '20px' }}>
          <button onClick={cancelTask}>Cancel Task</button>
        </div>
      </header>
    </div>
  );
}

export default App;
