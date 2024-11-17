import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const editRecipe = useRecipeStore((state) => state.editRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe) {
      editRecipe(recipeId, { title, description });
      navigate(`/recipe/${recipeId}`); // Navigate back to the recipe details page
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