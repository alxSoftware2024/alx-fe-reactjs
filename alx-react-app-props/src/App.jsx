import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import UserContext from './UserContext';  // Import the UserContext
import ProfilePage from './ProfilePage';

const App = () => {
  // Example user data (you can replace this with actual data or a state hook)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  });

  return (
    <UserContext.Provider value={userData}>  {/* Provide the context */}
      <ProfilePage />
    </UserContext.Provider>
  );
};

export default App;
