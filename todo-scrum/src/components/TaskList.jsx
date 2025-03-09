// src/components/TaskList.jsx
import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onUpdateTaskStatus }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.status.replace(' ', '')}> {/* Remove spaces from status for CSS classes */}
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <div className="task-info">
              <div><strong>Priority:</strong> {task.priority}</div>
              <div><strong>Status:</strong> {task.status}</div>
            </div>
            <button onClick={() => onUpdateTaskStatus(task.id)}>
              Toggle Status
            </button>
            <button onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
