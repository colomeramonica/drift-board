import { DndContext } from '@dnd-kit/core';

export default function KanbanBoard() {
  return (
    <DndContext>
      <div className="grid grid-cols-5 gap-2">
        <div className="bg-gray-100 p-4">Backlog</div>
        <div className="bg-gray-200 p-4">To Do</div>
      </div>
    </DndContext>
  );
}
