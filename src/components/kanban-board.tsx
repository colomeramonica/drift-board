import React, { useEffect, useState } from 'react';
import TaskColumn from './task-column';
import { getTasks } from '../api';
import { TaskProps } from '../types';

const COLUMN_NAMES = {
  Open: 'Unrefined',
  'Ready to Dev': 'Ready to Do',
  'In Progress': 'In Progress',
  Completed: 'Done',
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [board, setBoard] = useState<Record<string, TaskProps[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks();
      setTasks(response as TaskProps[]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const groupedTasks = Object.keys(COLUMN_NAMES).reduce((acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
      return acc;
    }, {} as Record<string, TaskProps[]>);

    setBoard(groupedTasks);
  }, [tasks]);

  return (
    <div className="flex lg:flex-row flex-col gap-2 justify-between">
      {Object.entries(COLUMN_NAMES).map(([status, title]) => (
        <TaskColumn
          key={status}
          id={status}
          title={title}
          tasks={board[status] || []}
        />
      ))}
    </div>
  );
}
