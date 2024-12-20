import React, { useState } from 'react';

const RegistrationForm = () => {
  // Define state for the form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');
  const iff= ["if (!email)", "if (!password)"];
  if(!email)  {
    setErrors('Password fields are required');

   }
   if(!password){
          setErrors('Password fields are required');

   }
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation to check if any field is empty
    // if (!username) {
    //   setError('UserName fields are required');
    // }
    if(!email)  {
     setErrors('Password fields are required');

    }
    if(!password){
           setErrors('Password fields are required');

    }

     
    
    //  else {
    //   setError('');
    //   // Form submission logic here (like sending data to an API)
    //   console.log('Form submitted:', { username, email, password });
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;