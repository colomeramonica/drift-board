import Wave from '@/assets/wave';
import { useState } from 'react';
import NewTaskSidebar from './new-task-sidebar';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';

export default function NavBar() {
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
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <NewTaskSidebar />
          </DrawerContent>
        </Drawer>
      </nav>
    </section>
  );
}
