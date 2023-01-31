/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import './assets/Main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebars from './components/Sidebar';
import { FitMeUpThunk } from './redux/fitMeUpSlice';
import { SpecilatiyThunk } from './redux/specilatiySlice';
import { userThunk } from './redux/userSlice';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Datepickers from './components/Datepicker';
import TrainerDetails from './components/TrainerDetails';
import SearchLocation from './components/SearchLocation';
import Specilatiy from './components/Specilatiy';
import Trainer from './components/Trainer';

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
      <BrowserRouter>
        <Sidebars />
        <Routes>
          <Route path="/" element={<Home trainers={trainersArray} />} />
          <Route path="/date" element={<Datepickers />} />
          <Route path="/appointment" element={<Appointment trainers={trainersArray} />} />
          <Route path="/trainerDetails" element={<TrainerDetails />} />
          <Route path="/search" element={<SearchLocation />} />
          <Route path="/specilatiy" element={<Specilatiy specilatiy={specilatiyArray} />} />
          <Route path="/trainer" element={<Trainer users={userArray} trainers={trainersArray} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
