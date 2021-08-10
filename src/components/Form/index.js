import React, { useState } from 'react';

const Form = ({ getSearchInput }) => {
  const [username, setUsername] = useState('');

  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchInput(username);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Please enter your username" value={username} onChange={handleUsername} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
