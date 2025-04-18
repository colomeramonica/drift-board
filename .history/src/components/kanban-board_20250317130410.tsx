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
            priority: 'Low',
            due_date: '2025-04-01',
          },
          {
            id: '2',
            title: 'Task 2',
            description: 'Description 2',
            assignee: 'User 2',
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
            assignee: 'User 1',
            status: 'Ready for development',
            due_date: '2025-03-22',
          },
          {
            id: '4',
            title: 'Task 2',
            description: 'Description 2',
            assignee: 'User 2',
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
            assignee: 'User 3',
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
            assignee: 'User 4',
            status: 'Completed',
            priority: 'High',
            due_date: '2025-03-14',
          },
        ],
      },
    ],
  });

  interface Task {
    id: string;
    title: string;
    description: string;
    assignee: string;
    status: string;
    priority?: string;
    due_date: string;
  }

  interface Column {
    id: number;
    title: string;
    tasks: Task[];
  }

  interface Board {
    columns: Column[];
  }

  interface DragEndEvent {
    active: { id: string };
    over: { id: string } | null;
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumnIndex = board.columns.findIndex((column) =>
      column.tasks.some((task) => task.id === active.id)
    );
    const targetColumnIndex = board.columns.findIndex(
      (column) => column.id.toString() === over.id
    );

    if (
      sourceColumnIndex !== -1 &&
      targetColumnIndex !== -1 &&
      sourceColumnIndex !== targetColumnIndex
    ) {
      const sourceColumn = board.columns[sourceColumnIndex];
      const targetColumn = board.columns[targetColumnIndex];
      const taskToMove = sourceColumn.tasks.find(
        (task) => task.id === active.id
      );

      if (!taskToMove) return;

      setBoard((prevBoard) => {
        const newSourceColumn: Column = {
          ...sourceColumn,
          tasks: sourceColumn.tasks.filter((task) => task.id !== active.id),
        };
        const newTargetColumn: Column = {
          ...targetColumn,
          tasks: [...targetColumn.tasks, ...(taskToMove ? [taskToMove] : [])],
        };

        const newColumns = [...prevBoard.columns];
        newColumns[sourceColumnIndex] = newSourceColumn;
        newColumns[targetColumnIndex] = newTargetColumn;

        return {
          ...prevBoard,
          columns: newColumns,
        };
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row gap-2 min-h-screen h-full justify-between">
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
