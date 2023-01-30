/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Datepickers from './Datepicker';

const TrainerDetails = () => {
  const location = useLocation();
  const [displayStatus, updateDisplayStatus] = useState(false);
  const { state } = location;
  const trainerSpecialty = state.speciality.map((item) => item).join(', ');

  const displayHandler = () => {
    updateDisplayStatus(!displayStatus);
  };
  return (
    <section className="trainer-details h-100 align-items-center d-flex position-relative">
      <div className="trainer-img d-flex justify-content-center">
        <img src={state.profile_pic} alt={state.full_name} />
      </div>
      <div className="trainer-details d-flex flex-column">
        <div className="trainer-name">
          <h1>{state.full_name}</h1>
          <small className="fst-italic">{trainerSpecialty}</small>
        </div>
        <table className="table table-striped shadow-sm">
          <tbody>
            <tr>
              <td>Location</td>
              <td>{state.address}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{state.price}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{state.height_in_meter}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{state.weight_in_kg}</td>
            </tr>
          </tbody>
        </table>
        <div className="booking shadow-lg d-flex align-items-center p-1  mt-4">
          <i className="bi bi-bookmark-check mx-1 fs-4 text-white" />
          <button className="book-btn book mx-4" type="button" onClick={displayHandler}>Book Trainer</button>
        </div>
      </div>
      <div className={`position-absolute top-0 date-div ${displayStatus ? 'd-flex' : 'd-none'}`}>
        <Datepickers displayHandlerProp={displayHandler} />
      </div>
    </section>
  );
};
export default TrainerDetails;
