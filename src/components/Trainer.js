/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trainerForm } from '../auth/Auth';

const Trainer = ({ trainers }) => {
  const [state, setState] = useState({
    username: '',
    full_name: '',
    email_address: '',
    phone_number: '',
    password: '',
    weight_in_kg: '',
    height_in_meter: '',
    address: '',
    date_of_birth: '',
    profile_pic: '',
    bio: '',
    price: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const token = useSelector((state) => state.currentuser.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    trainerForm(state, token, dispatch);
  };

  return (
    <div className="container pt-5">
      <p className="text-center fs-4 p-3"> Trainer Form</p>
      <form>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input
            type="email"
            name="email_address"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={state.email_address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pic" className="form-label">Profile pic</label>
          <input
            type="text"
            name="profile_pic"
            placeholder="enter image url"
            className="form-control"
            id="pic"
            value={state.profile_pic}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Full Name</label>
          <input
            type="text"
            name="full_name"
            className="form-control"
            id="fullname"
            value={state.full_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="text"
            name="password"
            className="form-control"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">Height</label>
          <input
            type="number"
            name="height_in_meter"
            placeholder="Height in meters"
            className="form-control"
            id="height"
            value={state.height_in_meter}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Weight</label>
          <input
            type="number"
            name="weight_in_kg"
            className="form-control"
            placeholder="weight in kg"
            id="weight"
            value={state.weight_in_kg}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneno" className="form-label">Phone Number</label>
          <input
            name="phone_number"
            type="number"
            className="form-control"
            id="phoneno"
            value={state.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="address"
            value={state.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">DOB</label>
          <input
            type="date"
            name="date_of_birth"
            className="form-control"
            id="dob"
            value={state.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            id="price"
            value={state.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <input
            type="text"
            name="bio"
            className="form-control"
            id="bio"
            value={state.bio}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
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
