
import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTaskStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, status: task.status === 'To Do' ? 'In Progress' : task.status === 'In Progress' ? 'Completed' : 'To Do' }
        : task
    ));
  };

  return (
    <div className="App">
      <h1>Scrum To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTaskStatus={updateTaskStatus} />
    </div>
  );
}

export default App;
