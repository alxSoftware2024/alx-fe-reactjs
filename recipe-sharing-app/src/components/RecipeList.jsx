import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; 
  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
             {/* Using Link to navigate to a detailed page for each recipe */}
             <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p></Link>
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList