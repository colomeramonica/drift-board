import { DndContext } from '@dnd-kit/core';

export default function KanbanBoard() {
  return (
    <DndContext>
      <div className="grid grid-cols-5 gap-2 bg-slate-900">
        <div className="bg-gray-500 p-4 rounded">Backlog</div>
        <div className="bg-gray-500 p-4 ">To Do</div>
        <div className="bg-gray-500 p-4">In Progress</div>
        <div className="bg-gray-500 p-4">Under Review</div>
        <div className="bg-gray-500 p-4">Done</div>
      </div>
    </DndContext>
  );
}
