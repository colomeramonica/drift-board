import React from 'react';
import TaskColumn from './task-column';
import { useState } from 'react';

export default function KanbanBoard() {
  const [board, setBoard] = useState({
    columns: [
      {
        id: 1,
        title: 'Backlog',
        tasks: [
          {
            id: '1',
            title: 'Task 1',
            description: 'Description 1',
            responsible: 'User 1',
            status: 'Open',
            priority: 'Low',
            due_date: '2025-04-01',
          },
          {
            id: '2',
            title: 'Task 2',
            description: 'Description 2',
            responsible: 'User 2',
            status: 'Open',
            priority: 'Low',
            due_date: '2025-04-01',
          },
        ],
      },
      {
        id: 2,
        title: 'ToDo',
        tasks: [
          {
            id: '3',
            title: 'Task 1',
            description: 'Description 1',
            responsible: 'User 1',
            status: 'Ready for development',
            priority: 'Low',
            due_date: '2025-03-22',
          },
          {
            id: '4',
            title: 'Task 2',
            description: 'Description 2',
            responsible: 'User 2',
            status: 'Ready for development',
            priority: 'High',
            due_date: '2025-03-19',
          },
        ],
      },
      {
        id: 3,
        title: 'Doing',
        tasks: [
          {
            id: '5',
            title: 'Task 3',
            description: 'Description 3',
            responsible: 'User 3',
            status: 'In Progress',
            priority: 'Medium',
            due_date: '2025-03-21',
          },
        ],
      },
      {
        id: 4,
        title: 'Done',
        tasks: [
          {
            id: '6',
            title: 'Task 4',
            description: 'Description 4',
            responsible: 'User 4',
            status: 'Completed',
            priority: 'High',
            due_date: '2025-03-14',
          },
        ],
      },
    ],
  });

  return (
    <div className="flex lg:flex-row flex-col gap-2 justify-between">
      {board.columns.map((column) => (
        <TaskColumn
          key={column.id}
          id={column.id.toString()}
          title={column.title}
          tasks={column.tasks}
        />
      ))}
    </div>
  );
}
