import React from 'react';
import type { TaskProps } from '@/types';
import CardComponent from './card';

export default function TaskColumn({
  id,
  title,
  tasks,
}: {
  id: string;
  title: string;
  tasks: TaskProps[];
}) {
  return (
    <div className="bg-primary-foreground p-3 h-full w-full items-center rounded-sm shadow-lg transition-transform transform">
      <h2 className="text-primary text-lg font-semibold mb-4">{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task: TaskProps) => (
          <CardComponent key={task.id} issue={task} isEmpty={false} />
        ))
      ) : (
        <CardComponent isEmpty={true} />
      )}
    </div>
  );
}
