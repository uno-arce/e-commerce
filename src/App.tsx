import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {UserProvider} from './UserContext.tsx';

function App() {
  const [user, setUser] = useState({
    id: null,
    role: null
  })

  const unSetUser = () => {
    setUser({
      id: null,
      role: null
    });
    localStorage.clear()
  }

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/users/details`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(result => result.json())
      .then(data => {
        if (typeof data._id !== 'undefined') {
          setUser({
            id: data._id,
            role: data.role
          });
        } else {
          setUser({
            id: null,
            role: null
          });
        }
      });
    } else {
      // Handle the case when there is no token in local storage
      setUser({
        id: null,
        role: null
      });
    }
  }, [token]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserProvider value={{user, setUser, unSetUser}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Toaster />
        </Router>
      </UserProvider>
    </ThemeProvider>
      
    
  )
}

export default App
