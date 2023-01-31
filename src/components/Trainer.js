/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Trainer = ({ trainers, users }) => {
  const [selectedUser, setselectedUser] = useState('');
  const handleChange = (e) => {
    setselectedUser(e.target.value);
  };
  return (
    <div className="container pt-5">
      <p className="text-center fs-4 p-3"> Trainer Form</p>
      <form>
        <select
          className="form-select mb-3"
          size="lg"
          name="users"
          id="users"
          value={selectedUser}
          onChange={handleChange}
        >
          {users.map((el) => <option key={el.id} value={el.id}>{el.full_name}</option>)}
        </select>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <input type="text" className="form-control" id="bio" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p className="text-center p-3 fs-3"> Trainer List</p>
      <div className="border p-2 mt-3">
        {trainers.map((el) => (
          <div key={el.id} className="d-flex justify-content-between mb-3 border-bottom pb-2">
            <p>{el.full_name}</p>
            <button className="btn btn-danger" type="button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
