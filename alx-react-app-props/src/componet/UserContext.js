import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = React.createContext();

// Create a Provider component that will manage the user data
export const UserProvider = ({ children }) => {
  // Initialize some sample user data (you can modify this)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};