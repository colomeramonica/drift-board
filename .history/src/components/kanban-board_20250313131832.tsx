import { DndContext } from '@dnd-kit/core';
import {
  closestCorners,
  getFirstCollision,
  KeyboardCode,
  DroppableContainer,
  KeyboardCoordinateGetter,
} from '@dnd-kit/core';

export default function KanbanBoard() {
  return (
    <DndContext>
      <div className="grid grid-cols-5 gap-2 bg-slate-900">
        <Droppable className="bg-gray-500 p-4 rounded">Backlog</Droppable>
        <div className="bg-gray-500 p-4 rounded">To Do</div>
        <div className="bg-gray-500 p-4 rounded">In Progress</div>
        <div className="bg-gray-500 p-4 rounded">Under Review</div>
        <div className="bg-gray-500 p-4 rounded">Done</div>
      </div>
    </DndContext>
  );
}
