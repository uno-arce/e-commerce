import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='grid justify-items-end'>
        <ModeToggle/>
      </div>
      <div className='grid justify-items-center'>
        <Login/>
      </div>
    </ThemeProvider>
      
    
  )
}

export default App
