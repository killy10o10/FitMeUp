/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import TrainerList from './TrainerList';

const Home = (props) => {
  const { trainers } = props;
  return (
    <section className="home container d-flex flex-column align-items-center">
      <div className="mt-1 pt-5 mb-5">
        <h1 className="text-uppercase text-center title-1">Industry Level Trainers</h1>
        {/* debut */}
        <div className="textanimation">
          <div id="container">
            <h3 className="text-secondary fs-5">How simple it works?</h3>
            <div id="flip">
              <div><div>1. Book Appointment 🧾</div></div>
              <div><div>3. Train with the Best 🏋🏼</div></div>
              <div><div>2. Get approved ✅</div></div>
            </div>
          </div>
        </div>
        {/* fin */}
      </div>
      <TrainerList trainers={trainers} />
    </section>
  );
};

export default Home;
