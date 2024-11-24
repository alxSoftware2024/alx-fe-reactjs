import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '/useAuth'; // Import the useAuth hook

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if authenticated
  return element;
}

export default ProtectedRoute;