import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserProvider } from './UserContext'
import ProfilePage from '..ProfilePage/ProfilePage'
import './App.css'
export const data=React.createContext();
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }
  
  return (
    <data.Provider value={userData}>
<ProfilePage/>
    </data.Provider>
    
  )
}

export default App
