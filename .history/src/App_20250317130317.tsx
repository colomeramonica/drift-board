import { ThemeProvider } from '@/components/theme-provider';
import './App.css';

import KanbanBoard from './components/kanban-board';
import NavBar from './components/navbar';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <KanbanBoard />
    </ThemeProvider>
  );
}

export default App;
