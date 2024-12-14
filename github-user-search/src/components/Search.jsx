import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
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
      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={userData.name} width={100} />
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
