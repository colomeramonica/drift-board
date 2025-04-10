import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, updateTask } from '../store/reducers/tasksReducer';
import { getTasks } from '../api';
import TaskColumn from './task-column';
import { TaskProps } from '../types';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  closestCenter,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const COLUMN_NAMES = {
  Open: { title: 'Open', id: 'column-open' },
  'Ready to Dev': { title: 'Ready to Dev', id: 'column-ready-to-dev' },
  'In Progress': { title: 'In Progress', id: 'column-in-progress' },
  Completed: { title: 'Completed', id: 'column-completed' },
};

export default function KanbanBoard() {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [board, setBoard] = useState<Record<string, TaskProps[]>>({});
  const [activeTask, setActiveTask] = useState<TaskProps | null>(null);

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const sourceColumn = active.data.current?.column;
      const targetColumn = over.id;

      if (sourceColumn && targetColumn) {
        const sourceTasks = board[sourceColumn];
        const targetTasks = board[targetColumn];
        const taskIndex = sourceTasks.findIndex(
          (task) => task.id === active.id
        );

        if (taskIndex !== -1) {
          const [movedTask] = sourceTasks.splice(taskIndex, 1);
          movedTask.status = targetColumn;
          targetTasks.push(movedTask);

          setBoard({
            ...board,
            [sourceColumn]: sourceTasks,
            [targetColumn]: targetTasks,
          });

          dispatch(updateTask(movedTask));
        }
      }
    }

    setActiveTask(null);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={(event) => {
        const task = tasks.find((t) => t.id === event.active.id);
        setActiveTask(task || null);
      }}
    >
      <div className="flex lg:flex-row flex-col gap-2 justify-between">
        {Object.entries(COLUMN_NAMES).map(([status, { title, id }]) => (
          <TaskColumn
            key={id}
            id={status}
            title={title}
            tasks={board[status] || []}
          />
        ))}
      </div>
      <DragOverlay>
        {activeTask ? (
          <div className="bg-white p-2 rounded shadow-md">
            {activeTask.title}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
