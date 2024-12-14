import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission to fetch user data
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');  // Reset any previous errors
    setUserData(null); // Reset previous user data

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      // If there's an error, set a specific error message
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}  {/* Display error message here if any */}
      
      {userData && !loading && !error && (
        <div>
          <h2>{userData.name || 'No Name Available'}</h2>
          <p><strong>Username (login):</strong> {userData.login}</p> {/* Display the GitHub username */}
          <img src={userData.avatar_url} alt={userData.name || 'GitHub Avatar'} width={100} />
          <p>{userData.bio || 'No bio available'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
