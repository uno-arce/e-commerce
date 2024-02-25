import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <div className='grid justify-items-center'>
        <Login/>
      </div>
    </ThemeProvider>
      
    
  )
}

export default App
