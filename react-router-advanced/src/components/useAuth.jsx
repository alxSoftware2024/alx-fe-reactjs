import React from "react";
import { useState, useEffect } from 'react';

// Simulate an authentication check
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authentication (e.g., from localStorage or a context)
  useEffect(() => {
    const user = localStorage.getItem('user'); // Or use your preferred method of checking auth
    setIsAuthenticated(!!user);
  }, []);

  return { isAuthenticated };
}

export default useAuth;