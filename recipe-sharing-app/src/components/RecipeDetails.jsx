 // RecipeDetails component
 import { useRecipeStore } from './recipeStore';
 import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

   return (
     <div>
       <h1>{recipe.title}</h1>
       <p>{recipe.description}</p>
       {/* Render EditRecipeForm and DeleteRecipeButton here */}
       <Router>
       <nav>
            <Link to='/EditRecipeForm'>EditRecipeForm</Link>
            <Link to='/DeleteRecipeButton'>DeleteRecipeButton</Link>
          </nav>
        <Routes>
        <Route path='/EditRecipeForm' element={<EditRecipeForm/>}/>
        <Route path='/DeleteRecipeButton' element={<DeleteRecipeButton/>}/>

        </Routes>
       </Router>
     </div>
   );
 };