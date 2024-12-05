// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to hold form values
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Changed instructions to steps

  // State to handle validation errors
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '' // Changed instructions to steps
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation checks
    let formErrors = {
      title: '',
      ingredients: '',
      steps: '' // Changed instructions to steps
    };

    if (!title) formErrors.title = 'Title is required';
    if (!ingredients) formErrors.ingredients = 'Ingredients are required';
    if (!steps) formErrors.steps = 'Steps are required'; // Changed instructions to steps
    if (ingredients && ingredients.split('\n').length < 2) {
      formErrors.ingredients = 'Please provide at least two ingredients';
    }

    setErrors(formErrors);

    // If no errors, submit the form data (you can implement the actual submission logic)
    if (!formErrors.title && !formErrors.ingredients && !formErrors.steps) {
      // Submit logic here (e.g., API call to save the recipe)
      console.log('Form submitted with:', { title, ingredients, steps });

      // Reset form fields after successful submission
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Recipe</h2>

        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-2">Recipe Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the recipe title"
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients Field */}
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700 text-sm font-semibold mb-2">Ingredients</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the ingredients, each on a new line"
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
          </div>

          {/* Steps Field */}
          <div className="mb-6">
            <label htmlFor="steps" className="block text-gray-700 text-sm font-semibold mb-2">Preparation Steps</label>
            <textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the preparation steps"
            ></textarea>
            {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
