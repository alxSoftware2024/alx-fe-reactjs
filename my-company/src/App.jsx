import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componet/Home'
import Contact from './componet/Contact'
import About from './componet/About'
import Services from './componet/Services'
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom'
function App() {

  return (
    <Router>
      <nav>
<Link to='/'>Home</Link>
<Link to='/About'>About Us</Link>
<Link to='/Contact'>Contact Us</Link>
<Link to='/Services'>Services</Link>

      </nav>
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
