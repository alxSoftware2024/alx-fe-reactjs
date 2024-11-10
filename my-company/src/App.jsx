import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
function App() {

  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
<Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
