import { useDroppable } from '@dnd-kit/core';
import IssueCard from './issue-card';

export default function TaskColumn({
  id,
  title,
  tasks,
}: {
  id: string;
  title: string;
  tasks: { id: string; [key: string]: any }[];
}) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="bg-gray-500 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {tasks?.map((task: any) => (
        <IssueCard key={task.id} issue={task} />
      ))}
    </div>
  );
}
