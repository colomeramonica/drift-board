import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from '../store/reducers/tasksReducer';
import { getTasks } from '../api';
import TaskColumn from './task-column';
import { TaskProps } from '../types';

const COLUMN_NAMES = {
  Open: 'Open',
  'Ready to Dev': 'Ready to Dev',
  'In Progress': 'In Progress',
  Completed: 'Completed',
};

export default function KanbanBoard() {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [board, setBoard] = useState<Record<string, TaskProps[]>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTasks();
      dispatch(setTasks(response as TaskProps[]));
    };

    fetchData();
  }, [dispatch]);

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
