/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

import React from 'react';

const Datepickers = ({ displayHandlerProp }) => (
  <main className=" date-form">
    <div>
      <button onClick={displayHandlerProp} className="btn text-white fs-4 float-end me-3" type="button">X</button>
    </div>
    <form className="container form">
      <div className="mb-3">
        <label htmlFor="InputDate" className="form-label fs-4"> Date</label>
        <input type="date" className="form-control fs-4 p-2" id="InputDate" aria-describedby="dateHelp" />
      </div>
      <button type="submit" className="btn btn-outline-success text-white date-button fs-4">Submit</button>
    </form>
  </main>
);

export default Datepickers;
