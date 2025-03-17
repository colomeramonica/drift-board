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
    <div
      ref={setNodeRef}
      className="bg-[#453954] p-4 h-full rounded shadow-lg transition-transform transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-30"
    >
      <SortableContext items={tasks.map((task) => task.id)}>
        {tasks?.map((task: TaskProps) => (
          <SortableIssueCard key={task.id} issue={task} />
        ))}
      </SortableContext>
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
