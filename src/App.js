/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import './assets/Main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebars from './components/Sidebar';
import { FitMeUpThunk } from './redux/fitMeUpSlice';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Datepickers from './components/Datepicker';
import TrainerDetails from './components/TrainerDetails';

const App = () => {
  const trainersArray = useSelector((state) => state.trainers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (trainersArray.length === 0) {
      dispatch(FitMeUpThunk());
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebars />
        <Routes>
          <Route path="/" element={<Home trainers={trainersArray} />} />
          <Route path="/date" element={<Datepickers />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/trainerDetails" element={<TrainerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
