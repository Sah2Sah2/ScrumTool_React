import React from 'react';
import Task from './Task'; 

const TaskColumn = ({ title, tasks, onDeleteTask, onUpdateTaskStatus }) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
