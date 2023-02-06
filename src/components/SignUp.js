/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signupUser } from '../auth/Auth';

const SignUp = () => {
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
    confirm_password: '',
    bio: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlelogin = (e) => {
    e.preventDefault();

    const {
      username, email_address, phone_number, password, confirm_password, full_name,
    } = state;
    if (username.length === 0 || email_address.length === 0 || full_name.length === 0
      || phone_number.length === 0
      || password.length === 0 || confirm_password.length === 0) {
      onsubmit = false;
      setMessage('empty inputs');
    } else if (password !== confirm_password) {
      onsubmit = false;
      setMessage('password mismatch');
    } else {
      signupUser(state);
    }
  };

  return (
    <section className="sign">
      <div className="sign-orange d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Sign Up</h1>
        <form className="sign-form d-flex flex-column">

          <div className="input-group">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username *</label>
              <input
                type="text"
                name="username"
                value={state.username}
                className="form-control"
                id="username"
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
          </div>

          <div className="input-group">
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
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                name="email_address"
                value={state.email_address}
                className="form-control"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone_number"
                value={state.phone_number}
                className="form-control"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-4567-8901"
                minLength="9"
                maxLength="10"
                required
                id="phone"
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
          </div>

          <div className="input-group">
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

          </div>
          <div className="input-group">
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
              <label htmlFor="password" className="form-label">Password *</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>

          </div>
          <div className="input-group">
            <div className="mb-3">
              <label htmlFor="confirm-password" className="form-label">Confirm Password *</label>
              <input
                type="password"
                name="confirm_password"
                className="form-control"
                id="confirm-password"
                value={state.confirm_password}
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

          </div>
          <button
            type="submit"
            onClick={handlelogin}
            className="btn btn-primary align-self-center"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-1">
          <p className="fw-bold">
            Already Have an account?
            <Link className="text-warning" to="/login"> Log In</Link>
          </p>
          {message === 'empty inputs' && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please fill out all required inputs</p>}
          {message === 'password mismatch' && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please make sure passwords match</p>}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
