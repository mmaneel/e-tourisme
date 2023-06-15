import React, { useState } from 'react';

function Forgetpasswd () {

 const [email,setEmail]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password reset logic here
    // For simplicity, let's just log the email for now
    console.log('Email:', email);

    // Clear form field
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default Forgetpasswd;