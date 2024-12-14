// src/components/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (err) {
        setError('Error fetching user data');
      }
    };

    getUserData();
  }, [username]);

  if (error) return <div>{error}</div>;

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <img src={userData.avatar_url} alt={userData.name} />
    </div>
  );
};

export default UserProfile;
