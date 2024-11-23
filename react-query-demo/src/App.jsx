import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <PostsComponent />
  </QueryClientProvider>
  );
}

export default App
