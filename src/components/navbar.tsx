import React from 'react';
import Wave from '@/assets/wave';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import NewTaskModal from './new-task-modal';

export default function NavBar() {
  return (
    <section>
      <nav className="rounded-sm bg-slate-800 p-2 gap-3 min-w-full flex justify-between shadow-md mb-4">
        <h1 className="justify-center font-kanit flex flex-row gap-2 text-white text-2xl font-light align-middle items-center">
          <Wave stroke="white" width="48px" height="48px" />
          Drift Board
        </h1>
        <Dialog>
          <DialogTrigger>
            <Button variant="default" className="cursor-pointer">Create Task</Button>
          </DialogTrigger>
          <NewTaskModal />
        </Dialog>
      </nav>
    </section>
  );
}
