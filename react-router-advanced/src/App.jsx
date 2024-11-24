import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as  Router, Route, Routes, Link, useMatch } from 'react-router-dom';
import BlogPost from './components/BlogPost'; // Import your BlogPost component
import Home from './components/Profile'; // Example of Profile component
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        {/* Define the dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
