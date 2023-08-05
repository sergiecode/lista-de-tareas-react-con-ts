// src/components/Task.tsx
import React from 'react';

interface TaskProps {
  task: string;
  onDelete: () => void;
}

export const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <span>{task}</span>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};
