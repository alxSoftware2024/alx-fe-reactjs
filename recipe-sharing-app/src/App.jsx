import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import required components
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails component
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList/>
      <AddRecipeForm/>
      <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
