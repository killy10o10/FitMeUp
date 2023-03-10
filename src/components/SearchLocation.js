import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';

const SearchLocation = () => {
  const location = useLocation();
  const { from } = location.state;

  return (
    <>
      <Home trainers={from} />
    </>
  );
};

export default SearchLocation;
