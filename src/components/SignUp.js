import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/Provider';

const SignUp = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
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
    onLogin();
  };

  return (
    <section className="sign">
      <div className="sign-orange d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Sign Up</h1>
        <form className="sign-form d-flex flex-column">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              value={username}
              className="form-control"
              id="username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handlelogin}
            className="btn btn-primary align-self-center"
          >
            Sign In
          </button>
        </form>
        <div className="mt-1">
          <p className="fw-bold">
            Already Have an account?
            <Link className="text-warning" to="/login"> Log In</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;