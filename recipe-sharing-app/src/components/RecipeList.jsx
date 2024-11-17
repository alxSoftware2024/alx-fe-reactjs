import React from 'react';
import { Link } from 'react-router-dom';  // Make sure this import is present

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            {/* Using Link to navigate to a detailed page for each recipe */}
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.name}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;