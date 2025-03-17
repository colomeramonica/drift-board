import Wave from '@/assets/wave';
import { useState } from 'react';
import NewTaskSidebar from './new-task-sidebar';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
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
            <div className="flex flex-col">
              <DrawerHeader>
                <DrawerTitle>Create a new task for the board</DrawerTitle>
                <DrawerDescription>
                  Fill out the form below to create a new task for the board.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <NewTaskSidebar />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </section>
  );
}
