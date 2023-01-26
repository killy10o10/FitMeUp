import React from 'react';

const Datepickers = () => (
  <main className="d-flex justify-content-center align-items-center date-form">
    <form action="/">
      <label htmlFor="Start-date">
        Date:
        <br />
        <input type="date" name="date" id="Start-date" />
      </label>
      <input type="submit" />
    </form>
  </main>
);

export default Datepickers;
