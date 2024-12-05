// src/components/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  // Get the recipe ID from the URL parameters
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  // Fetch the recipe details based on the ID
  useEffect(() => {
    // Find the recipe by its ID
    const foundRecipe = recipeData.find((recipe) => recipe.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);

  // Redirect if recipe is not found
  if (!recipe) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Recipe not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Go back to the Home Page
        </button>
      </div>
    );
  }

  // Check if the recipe properties (ingredients and instructions) are available before rendering
  if (!recipe.ingredients || !recipe.instructions) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Recipe details are incomplete.</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Go back to the Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="text-blue-500 hover:text-blue-700 mb-6"
        >
          Back to Home
        </button>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Recipe Image */}
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />

          {/* Recipe Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 mb-6">
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))
            ) : (
              <li className="text-gray-600">No ingredients listed.</li>
            )}
          </ul>

          {/* Cooking Instructions Section */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal pl-6">
            {recipe.instructions && recipe.instructions.length > 0 ? (
              recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-600 mb-2">{step}</li>
              ))
            ) : (
              <li className="text-gray-600">No instructions available.</li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
