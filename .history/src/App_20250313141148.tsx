import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

import KanbanBoard from './components/kanban-board';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen h-screen">
        <KanbanBoard />
      </div>
    </ThemeProvider>
  );
}

export default App;
