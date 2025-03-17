import Wave from '@/assets/wave';
import { useState, useId } from 'react';
import NewTaskSidebar from './new-task-sidebar';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';
import { VisuallyHidden } from './ui/visually-hidden';

export default function NavBar() {
  const descriptionId = useId();

  return (
    <section>
      <nav className="rounded-sm w-screen min-w-screen bg-slate-800 p-2 flex justify-between items-center shadow-md mb-4">
        <h1 className="justify-center font-kanit flex flex-row gap-2 text-white text-2xl font-light align-middle items-center">
          <Wave stroke="white" width="48px" height="48px" />
          Drift Board
        </h1>
        <Drawer>
          <DrawerTrigger>
            <Button variant="default">Create Task</Button>
          </DrawerTrigger>
          <DrawerContent aria-describedby={descriptionId}>
            <VisuallyHidden>
              <h2>New Task Form</h2>
            </VisuallyHidden>
            <p id={descriptionId} className="sr-only">
              Use this form to create a new task.
            </p>
            <NewTaskSidebar />
          </DrawerContent>
        </Drawer>
      </nav>
    </section>
  );
}
