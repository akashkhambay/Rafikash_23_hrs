import React, { useState } from 'react';
import { Form, UserDetails } from '../../components';

const MainPage = () => {
  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput);
  const getSearchInput = (input) => {
    setSearchInput(input);
  };
  return (
    <>
      <Form getSearchInput={getSearchInput} />
      <UserDetails searchInput={searchInput} />
    </>
  );
};

export default MainPage;
