import { useState, useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();  // Get the recipeId from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);  // Get updateRecipe from store
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // When the component mounts, set initial form values from the existing recipe
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  // Handle form submission to update the recipe
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission (which causes page reload)
    if (recipe) {
      updateRecipe(recipeId, { title, description });  // Use updateRecipe to update the recipe
      navigate(`/recipe/${recipeId}`);  // Navigate back to recipe details page
    }
  };

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;