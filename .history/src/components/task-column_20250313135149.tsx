import { useDroppable } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
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
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="bg-gray-500 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <SortableContext items={tasks}>
        {tasks?.map((task: TaskProps) => (
          <IssueCard key={task.id} issue={task} />
        ))}
      </SortableContext>
    </div>
  );
}
