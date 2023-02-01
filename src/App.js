/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import './assets/Main.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebars from './components/Sidebar';
import { FitMeUpThunk } from './redux/fitMeUpSlice';
import { SpecilatiyThunk } from './redux/specilatiySlice';
import { userThunk } from './redux/userSlice';
import Home from './components/Home';
import Appointment from './components/Appointment';
import TrainerDetails from './components/TrainerDetails';
import SearchLocation from './components/SearchLocation';
import Specilatiy from './components/Specilatiy';
import Trainer from './components/Trainer';
import Login from './components/Login';
import { AuthProvider } from './auth/Provider';
import ProtectedRoute from './auth/ProtectedRoute';

const App = () => {
  const trainersArray = useSelector((state) => state.trainers);
  const specilatiyArray = useSelector((state) => state.specilatiys);
  const userArray = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    if (trainersArray.length === 0) {
      dispatch(FitMeUpThunk());
    }
    if (specilatiyArray.length === 0) {
      dispatch(SpecilatiyThunk());
    }
    if (userArray.length === 0) {
      dispatch(userThunk());
    }
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <Sidebars />
        <Routes>
          <Route path="/" element={<Home trainers={trainersArray} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<ProtectedRoute>
            <Appointment trainers={trainersArray} />
          </ProtectedRoute>} />
          <Route path="/trainerDetails" element={<ProtectedRoute>
            <TrainerDetails />
          </ProtectedRoute>} />
          <Route path="/search" element={<SearchLocation />} />
          <Route path="/specilatiy" element={<ProtectedRoute>
            <Specilatiy specilatiy={specilatiyArray} />
          </ProtectedRoute>} />
          <Route path="/trainer" element={<ProtectedRoute>
            <Trainer users={userArray} trainers={trainersArray} />
          </ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
