import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);  // Get deleteRecipe from the store
  const navigate = useNavigate();  // Use useNavigate for redirection

  const handleDelete = () => {
    deleteRecipe(recipeId);  // Delete the recipe from the store
    navigate('/');  // Redirect to the home or recipe list page (you can change this URL as needed)
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;