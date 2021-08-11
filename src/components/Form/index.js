import React, { useState } from 'react';

const Form = ({ getSearchInput }) => {
  const [username, setUsername] = useState('');

  const handleUsername = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchInput(username);
    setUsername('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="form" type="text" placeholder="Please enter your username" value={username} onChange={handleUsername} />
        <p></p>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
