import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { CounterProvider, TaskProvider } from './Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <TaskProvider>

      <CounterProvider>
        <BrowserRouter>
          <App />

        </BrowserRouter>

      </CounterProvider>

    </TaskProvider>

  </StrictMode>,
)
