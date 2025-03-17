import { DndContext } from '@dnd-kit/core';
import TaskColumn from './task-column';

export default function KanbanBoard() {
  const board = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        tasks: [
          {
            id: '1',
            title: 'Task 1',
            description: 'Description 1',
            assignee: 'User 1',
            status: 'Open',
            due_date: '2021-12-31',
          },
          {
            id: '2',
            title: 'Task 2',
            description: 'Description 2',
            assignee: 'User 2',
            status: 'Open',
            due_date: '2021-12-31',
          },
        ],
      },
      {
        id: 2,
        title: 'ToDo',
        tasks: [
          {
            id: '1',
            title: 'Task 1',
            description: 'Description 1',
            assignee: 'User 1',
            status: 'Open',
            due_date: '2021-12-31',
          },
          {
            id: '2',
            title: 'Task 2',
            description: 'Description 2',
            assignee: 'User 2',
            status: 'Open',
            due_date: '2021-12-31',
          },
        ],
      },
    ],
  };
  return (
    <DndContext>
      <div className="grid grid-cols-5 gap-2 bg-slate-900">
        {board.columns.map((column) => (
          <TaskColumn key={column.id} title={column.title} />
        ))}
      </div>
    </DndContext>
  );
}
