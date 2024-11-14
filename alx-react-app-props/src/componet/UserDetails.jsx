import React, { useContext } from 'react';
import UserContext from './componet/UserContext';  // Import the UserContext

const UserDetails = () => {
  const userData = useContext(UserContext);  // Consume the context

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserDetails;

