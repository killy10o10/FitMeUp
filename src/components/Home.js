/* eslint-disable react/prop-types */
import React from 'react';
import TrainerList from './TrainerList';

const Home = (props) => {
  const { trainers } = props;
  return (
    <section className="home container d-flex flex-column align-items-center">
      <div className="mt-5 pt-5">
        <h1 className="text-uppercase text-center ">Industry Level Trainers</h1>
        <h4 className="text-secondary fs-5 text-center">Please select a trainer from list</h4>
      </div>
      <TrainerList trainers={trainers} />
    </section>
  );
};

export default Home;
