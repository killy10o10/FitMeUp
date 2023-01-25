/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { FitMeUpThunk } from './redux/fitMeUpSlice';
import Home from './components/Home';
// import Appointment from './components/Appointment';

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
      <Home trainers={trainersArray} />
      {/* <Appointment /> */}
    </div>
  );
};

export default App;
