import { useDroppable } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import IssueCard from './issue-card';
import type { TaskProps } from '@/types';
import { useState } from 'react';
import { Card } from './ui/card';

export default function TaskColumn({
  id,
  title,
  tasks,
}: {
  id: string;
  title: string;
  tasks: TaskProps[];
}) {
  const { setNodeRef } = useDroppable({ id });
  const [empty, setEmpty] = useState(tasks.length === 0);

  return (
    <div
      ref={setNodeRef}
      className="bg-slate-800 p-4 h-full rounded-sm shadow-lg transition-transform transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-30"
    >
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <SortableContext items={tasks.map((task) => task.id)}>
        {tasks?.map((task: TaskProps) => (
          <SortableIssueCard key={task.id} issue={task} />
        ))}
      </SortableContext>
      {empty && (
        <Card className="bg-slate-900 text-gray-300 p-4 mt-4">
          No tasks in this column
        </Card>
      )}
    </div>
  );
}

function SortableIssueCard({ issue }: { issue: TaskProps }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: issue.id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mt-4"
    >
      <IssueCard issue={issue} />
    </div>
  );
}
