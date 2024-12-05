// src/components/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import the mock data from data.json file
import recipeData from '../data.json';

const HomePage = () => {
  // State to hold the recipe data
  const [recipes, setRecipes] = useState([]);

  // Load recipe data when the component mounts
  useEffect(() => {
    // In a real scenario, you could fetch this data from an API
    setRecipes(recipeData); // Set the data into state
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Recipe Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              {/* Recipe Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
              {/* Recipe Summary */}
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              {/* Link to view full recipe */}
              <a
                href={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                View Recipe
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
