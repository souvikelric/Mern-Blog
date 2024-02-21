import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path= "/" Component={Home}/>
          <Route path= "/about" Component={About}/>
          <Route path= "/projects" Component={Projects}/>
          <Route path= "/signin" Component={SignIn}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
