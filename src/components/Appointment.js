/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Appointment({ trainers }) {
  const [selectedCity, setselectedCity] = useState('UK');
  let trainer = trainers.filter((element) => (element.address === selectedCity));
  const searchHandler = (e) => {
    setselectedCity(e.target.value);
    trainer = trainers.filter((element) => (element.address === selectedCity));
  };

  return (
    <section className="appointments">
      <div className="appointments-green">
        <div className="book-trainer d-flex flex-column align-items-center justify-content-center">
          <div className="title p-2 border-bottom">
            <h1 className="text-center">Book A Professional Trainer</h1>
          </div>
          <div className="booking-intro p-3">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint quibusdam quas deserunt ea corporis est quaerat magni hic dignissimos, labore tempore. Recusandae sapiente facere aspernatur assumenda atque vitae nisi!</p>
          </div>
          <div className="booking-buttons d-flex gap-3">
            <select
              className="book-btn select"
              name="trainers"
              id="trainers"
              value={selectedCity}
              onChange={searchHandler}
            >
              <option value="London, UK">London</option>
              <option value="UK">UK</option>
              <option value="mumbai">Mumbai</option>
              <option value="congo">Congo</option>
              <option value="accra">Accra</option>
              <option value="New South Wales, Australia">New South Wales, Australia</option>
            </select>
            <button type="button" className="book-btn book">
              <Link to={`/search/?location=${selectedCity}`} state={{ from: trainer }}>Search Trainer</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
