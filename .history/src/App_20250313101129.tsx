import { ThemeProvider } from "@/components/theme-provider"
import './App.css'

import type { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {

  return (
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
