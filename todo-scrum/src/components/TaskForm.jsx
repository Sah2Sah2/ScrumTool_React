// src/components/TaskForm.jsx
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');
  const [taskStatus, setTaskStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName) return; 

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      status: taskStatus,
    };

    onAddTask(newTask);

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Priority:</label>
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Status:</label>
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
