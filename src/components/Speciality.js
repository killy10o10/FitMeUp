/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { specialityForm } from '../auth/Auth';
import { deleteSpecialityThunk } from '../redux/tokenSlice';

const Speciality = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
  });

  const data = useSelector((state) => state.currentuser);

  const deleteSpecilityHandler = (obj) => {
    dispatch(deleteSpecialityThunk(obj));
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // specialityForm(state, data.token, dispatch);
  };

  return (
    <div className="container pt-5">
      <p className="text-center fs-3 p-2">Speciality Form</p>
      <form>
        <div className="mb-3">
          <label htmlFor="specialityName" className="form-label fs-5">Speciality Name</label>
          <input type="text" className="form-control" id="specialityName" name="name" onChange={handleChange} value={state.name} />
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
      </form>
      <p className="text-center fs-3 p-2">Speciality List</p>
      <div className="border p-2 mt-3">
        {data.specialities.map((el) => (
          <div key={el.id} className="d-flex justify-content-between mb-3 border-bottom pb-2">
            <p>{el.name}</p>
            <button className="btn btn-danger" type="button" onClick={() => deleteSpecilityHandler({ id: el.id, token: data.token })}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
