import React from 'react';

const Datepickers = () => (
  <main className="container date-form">
    <form className="form">
      <div className="mb-3">
        <label htmlFor="InputDate" className="form-label fs-4"> Date</label>
        <input type="date" className="form-control fs-4 p-2" id="InputDate" aria-describedby="dateHelp" />
      </div>
      <button type="submit" className="btn btn-outline-success text-white date-button fs-4">Submit</button>
    </form>
  </main>
);

export default Datepickers;
