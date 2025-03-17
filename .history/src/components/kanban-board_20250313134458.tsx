import { DndContext } from '@dnd-kit/core';
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
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceLane = Object.keys(lanes).find((key) =>
      lanes[key].some((item) => item.id === active.id)
    );
    const targetLane = over.id;

    if (sourceLane !== targetLane) {
      const itemToMove = lanes[sourceLane].find(
        (item) => item.id === active.id
      );
      setLanes((prev) => ({
        ...prev,
        [sourceLane]: prev[sourceLane].filter((item) => item.id !== active.id),
        [targetLane]: [...prev[targetLane], itemToMove],
      }));
    }
  };

  return (
    <DndContext>
      <div className="grid grid-cols-5 gap-2 bg-slate-900">
        {board.columns.map((column) => (
          <TaskColumn
            key={column.id}
            id={column.id.toString()}
            title={column.title}
            tasks={column.tasks}
          />
        ))}
      </div>
    </DndContext>
  );
}
