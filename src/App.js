/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import './assets/Main.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebars from './components/Sidebar';
import { FitMeUpThunk } from './redux/fitMeUpSlice';
import Home from './components/Home';
import Appointment from './components/Appointment';
import TrainerDetails from './components/TrainerDetails';
import SearchLocation from './components/SearchLocation';
import Speciality from './components/Speciality';
import Trainer from './components/Trainer';
import Login from './components/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import SignUp from './components/SignUp';
import AppoinmentDetails from './components/AppoinmentDetails';

const App = () => {
  const trainersArray = useSelector((state) => state.trainers);
  const specialityArray = useSelector((state) => state.specialities);

  const dispatch = useDispatch();

  useEffect(() => {
    if (trainersArray.length === 0) {
      dispatch(FitMeUpThunk());
    }
  }, []);

  return (
    <div className="App">
      <Sidebars />
      <Routes>
        <Route path="/" element={<Home trainers={trainersArray} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/appointment-details"
          element={(
            <ProtectedRoute>
              <AppoinmentDetails />
            </ProtectedRoute>
      )}
        />
        <Route
          path="/appointment"
          element={(
            <ProtectedRoute>
              <Appointment trainers={trainersArray} />
            </ProtectedRoute>
)}
        />
        <Route
          path="/trainerDetails"
          element={(
            <ProtectedRoute>
              <TrainerDetails />
            </ProtectedRoute>
 )}
        />
        <Route path="/search" element={<SearchLocation />} />
        <Route
          path="/speciality"
          element={(
            <ProtectedRoute>
              <Speciality speciality={specialityArray} />
            </ProtectedRoute>
 )}
        />
        <Route
          path="/trainer"
          element={(
            <ProtectedRoute>
              <Trainer trainers={trainersArray} />
            </ProtectedRoute>
 )}
        />
      </Routes>
    </div>
  );
};

export default App;
