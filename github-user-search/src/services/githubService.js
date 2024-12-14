import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    // Construct the query parameters based on the user input
    let query = `type:user`;
    
    if (username) query += `+in:login ${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`
    );

    return response.data;
  } catch (err) {
    throw new Error("Error fetching user data");
  }
};
