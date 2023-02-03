/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.currentuser.token);
  const location = useLocation();
  if (!token) {
    return (
      <>
        <Navigate to="/login" replace state={{ from: location }} />
        ;
      </>
    );
  }
  return children;
};

export default ProtectedRoute;
