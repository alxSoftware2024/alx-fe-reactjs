import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import required components
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails component
import EditRecipeForm from './components/EditRecipeForm';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList/>
      <AddRecipeForm/>
      <Router>  {/* Wrap your app in Router to enable routing */}
      <Routes>  {/* Define your routes inside Routes */}
        <Route path="recipe/:recipeId" element={<RecipeDetails />} />  {/* Define route for RecipeDetails */}
        <Route path="edit/:recipeId" element={<EditRecipeForm />} />  {/* Define route for EditRecipeForm */}
        {/* Add additional routes here */}
      </Routes>
    </Router>
    </>
  )
}

export default App