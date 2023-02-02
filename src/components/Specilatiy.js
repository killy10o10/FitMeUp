/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Specilatiy = ({ specilatiy }) => {
  const [state, setState] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container pt-5">
      <p className="text-center fs-3 p-2">Specilatiy Form</p>
      <form>
        <div className="mb-3">
          <label htmlFor="specilatiyName" className="form-label fs-5">Specilatiy Name</label>
          <input type="text" className="form-control" id="specilatiyName" name="name" onChange={handleChange} value={state.name} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      <p className="text-center fs-3 p-2">Specilatiy List</p>
      <div className="border p-2 mt-3">
        {specilatiy.map((el) => (
          <div key={el.id} className="d-flex justify-content-between mb-3 border-bottom pb-2">
            <p>{el.name}</p>
            <button className="btn btn-danger" type="button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specilatiy;
