import React from 'react';

import KanbanBoard from './components/kanban-board';
import NavBar from './components/navbar';

function App() {
  return (
    <section className="min-h-screen w-full p-4 bg-slate-900">
      <NavBar />
      <KanbanBoard />
    </section>
  );
}

export default App;
