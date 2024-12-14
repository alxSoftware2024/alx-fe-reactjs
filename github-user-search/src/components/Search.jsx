import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleInputChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'location') {
      setLocation(e.target.value);
    } else if (e.target.name === 'minRepos') {
      setMinRepos(e.target.value);
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);
    
    try {
      const data = await fetchUserData(username, location, minRepos, page);
      setUserData(data.items);
    } catch (err) {
      setError("Looks like we can't find any users matching that criteria");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
    await handleSearchSubmit();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form className="space-y-4" onSubmit={handleSearchSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            placeholder="Location (optional)"
            value={location}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="number"
            name="minRepos"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="space-y-4 mt-4">
        {userData.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h2 className="font-bold">{user.login}</h2>
            <p>{user.name}</p>
            <p>{user.location || 'Location not available'}</p>
            <p>{user.public_repos} Repositories</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View GitHub Profile
            </a>
          </div>
        ))}
      </div>

      {userData.length > 0 && (
        <button onClick={handleLoadMore} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
