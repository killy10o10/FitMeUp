import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/Provider';

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [message, setMessage] = useState(true);
  const { onLogin } = useAuth();

  const handlelogin = (e) => {
    e.preventDefault();
    // let item = {
    //     "username": username,
    //     "password": password
    // }

    // let res = await fetch('/', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(item)
    // });

    // let result = await res.json();
    if (state.username.length !== 0 && state.password.length !== 0) {
      onLogin();
    } else {
      onsubmit = false;
      setMessage(false);
    }
  };

  return (
    <section className="sign">
      <div className="sign-orange d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Log In</h1>
        <form className="sign-form d-flex flex-column">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={state.username}
              className="form-control"
              id="username"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handlelogin}
            className="btn btn-primary align-self-center"
          >
            Log In
          </button>
        </form>
        <div className="mt-1">
          <p className="fw-bold">
            Dont Have an account?
            <Link className="text-warning" to="/signup"> Sign Up</Link>
          </p>
          {message === false && <p className="fw-bold text-center text-danger animate__animated animate__bounceIn">Please fill out all inputs</p>}
        </div>
      </div>
    </section>
  );
};

export default Login;
