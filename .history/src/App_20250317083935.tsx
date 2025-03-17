import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

import KanbanBoard from './components/kanban-board';

function App() {
  return (
    <ThemeProvider
      className="min-h-screen h-full"
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <KanbanBoard />
    </ThemeProvider>
  );
}

export default App;
