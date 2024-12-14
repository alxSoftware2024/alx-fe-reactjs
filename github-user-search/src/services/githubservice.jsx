// src/services/githubService.js
import axios from 'axios';

const API_URL = 'https://api.github.com/users/'; // GitHub API URL

export const fetchUserData = async (username) => {
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY;  // Use the environment variable

  try {
    const response = await axios.get(`${API_URL}${username}`, {
      headers: {
        Authorization: `token ${apiKey}`,  // Passing the API key in headers
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from GitHub:", error);
    throw error;
  }
};
