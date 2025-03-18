import React from 'react';

const Task = ({ task, onDeleteTask, onUpdateTaskStatus }) => {
  return (
    <li className={`task ${task.status}`}> {/* Dynamically applying the status class */}
      <h3>{task.name}</h3>
      <button onClick={() => onUpdateTaskStatus(task.id)}>
        {task.status === 'To Do' ? 'Start' : task.status === 'In Progress' ? 'Complete' : 'Reopen'}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
