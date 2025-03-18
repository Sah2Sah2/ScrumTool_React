import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a task (a user story)
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update task status (progress)
  const updateTaskStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status:
              task.status === 'To Do'
                ? 'In Progress'
                : task.status === 'In Progress'
                ? 'Completed'
                : 'To Do',
          }
        : task
    ));
  };

  // Categorize tasks based on their status
  const taskColumns = {
    'To Do': tasks.filter((task) => task.status === 'To Do'),
    'In Progress': tasks.filter((task) => task.status === 'In Progress'),
    'Completed': tasks.filter((task) => task.status === 'Completed'),
  };

  return (
    <div className="App">
      <h1>Scrum Task Board</h1>
      <TaskForm onAddTask={addTask} />
      <div className="kanban-board">
        {/* To Do Column */}
        <div className={`kanban-column ${taskColumns['To Do'].length === 0 ? 'empty' : ''}`}>
          <h2>To Do</h2>
          <TaskList
            tasks={taskColumns['To Do']}
            onDeleteTask={deleteTask}
            onUpdateTaskStatus={updateTaskStatus}
          />
        </div>

        {/* In Progress Column */}
        <div className={`kanban-column ${taskColumns['In Progress'].length === 0 ? 'empty' : ''}`}>
          <h2>In Progress</h2>
          <TaskList
            tasks={taskColumns['In Progress']}
            onDeleteTask={deleteTask}
            onUpdateTaskStatus={updateTaskStatus}
          />
        </div>

        {/* Completed Column */}
        <div className={`kanban-column ${taskColumns['Completed'].length === 0 ? 'empty' : ''}`}>
          <h2>Completed</h2>
          <TaskList
            tasks={taskColumns['Completed']}
            onDeleteTask={deleteTask}
            onUpdateTaskStatus={updateTaskStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
