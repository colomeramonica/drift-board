import React from 'react';
import type { TaskProps } from '@/types';
import CardComponent from './card';
import { useDroppable } from '@dnd-kit/core';

export default function TaskColumn({
  id,
  title,
  tasks,
}: {
  id: string;
  title: string;
  tasks: TaskProps[];
}) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-primary-foreground p-3 h-full w-full items-center rounded-sm shadow-lg transition-transform transform"
    >
      <h2 className="text-primary text-lg font-semibold mb-4">{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task: TaskProps) => (
          <CardComponent key={task.id} issue={task} column={id} />
        ))
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
}
