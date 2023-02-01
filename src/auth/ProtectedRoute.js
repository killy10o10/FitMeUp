/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Provider';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { token } = useAuth();
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
