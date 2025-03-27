import React from 'react';
import IssueCard from './issue-card';
import type { TaskProps } from '@/types';

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
    <div className="bg-slate-800 p-3 h-full w-full items-center rounded-sm shadow-lg transition-transform transform backdrop-filter backdrop-blur-lg bg-opacity-30">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      {tasks?.map((task: TaskProps) => (
        <IssueCard key={task.id} issue={task} />
      ))}
    </div>
  );
}
