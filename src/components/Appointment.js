/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Appointment({ trainers }) {
  const [selectedCity, setselectedCity] = useState('');
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
            <p className="text-center">The moment you step into the Fit Me Up Community, you will be inspired to push a little harder, sweat a little longer, and believe in yourself a little more. We are deeply rooted and growing stronger every day. Our brand of fitness is one that strives for longevity. We prepare you today so that you can do the things that you love tomorrow.</p>
          </div>
          <div className="booking-buttons d-flex gap-3">
            <select
              className="book-btn select"
              name="trainers"
              id="trainers"
              value={selectedCity}
              onChange={searchHandler}
            >
              {trainers.map((element) => <option key={element.id} value={element.address}>{element.address}</option>)}
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
