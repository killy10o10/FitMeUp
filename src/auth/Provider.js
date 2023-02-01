/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeAuth from './Auth';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
    navigate('/');
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
