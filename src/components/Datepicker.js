import React from 'react';

const Datepickers = () => (
  <main className="d-flex justify-content-center align-items-center date-form">
    <form action="/">
      <div className="mb-3">
        <label htmlFor="Start-date" className="form-label">
          {' '}
          Date:
          <input type="date" name="date" id="Start-date" className="form-control" />
        </label>
      </div>
      <div className="mb-3">
        <input type="submit" className="btn btn-outline-success text-white light date-button" />
      </div>
    </form>
  </main>
);

export default Datepickers;
