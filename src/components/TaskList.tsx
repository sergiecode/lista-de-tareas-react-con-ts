// src/components/TaskList.tsx
import React from 'react';
import { Task } from './Task';

interface TaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <div className='taskList'>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDeleteTask(index)} />
      ))}
    </div>
  );
};
