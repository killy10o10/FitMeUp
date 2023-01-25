import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { FitMeUpThunk } from './redux/fitMeUpSlice';
import Home from './components/Home';
// import Appointment from './components/Appointment';

const App = () => {
  const trainerDispatch = useDispatch();

  useEffect(() => {
    trainerDispatch(FitMeUpThunk());
  }, [trainerDispatch]);
  return (
    <div className="App">
      <Home />
      {/* <Appointment /> */}
    </div>
  );
};

export default App;
