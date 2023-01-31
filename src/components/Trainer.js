/* eslint-disable react/prop-types */
import React from 'react';

const Trainer = ({ trainers }) => (
  <div className="container pt-5">
    <form>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullName" />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="fullName" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneno" className="form-label">Phone Number</label>
        <input type="number" className="form-control" id="phoneno" />
      </div>
      <div className="mb-3">
        <label htmlFor="height" className="form-label"> Height</label>
        <input type="number" className="form-control" id="height" />
      </div>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">Weight</label>
        <input type="number" className="form-control" id="weight" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <p className='text-center p-3 fs-3'> Trainer List</p>
    <div className="border p-2 mt-3">
      {trainers.map((el, index) => (
        <div key={index} className="d-flex justify-content-between mb-3 border-bottom pb-2">
          <p>{el.full_name}</p>
          <button className="btn btn-danger" type="button">Delete</button>
        </div>
      ))}
    </div>
  </div>
);

export default Trainer;
