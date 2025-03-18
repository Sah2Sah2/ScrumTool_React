import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask, onUpdateTaskStatus }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
        />
      ))}
    </ul>
  );
};

export default TaskList;
