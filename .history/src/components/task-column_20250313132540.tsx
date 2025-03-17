import { useDroppable } from '@dnd-kit/core';

export default function TaskColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className="bg-gray-500 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
