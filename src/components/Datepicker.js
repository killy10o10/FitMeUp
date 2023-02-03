/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { bookTrainer } from '../auth/Auth';

const Datepickers = (props) => {
  const { displayHandlerProp, bookInfo } = props;
  const [book, setBook] = useState(moment().format('YYYY-MM-DD'));
  const user = useSelector((state) => state.currentuser);

  const bookState = {
    user_id:user.data.id,
    trainer_id: bookInfo.id,
    appointment_date:book,
  };

  const onChangeDate = ({ target }) => {
    setBook(target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    bookTrainer(bookState, user.token);
    console.warn('Appoiment booked');
  };

  return (
    <main className=" date-form">
      <div>
        <button onClick={displayHandlerProp} className="btn text-white fs-4 float-end me-3" type="button">X</button>
      </div>
      <form className="container form">
        <div className="mb-3">
          <label htmlFor="InputDate" className="form-label fs-4"> Date</label>
          <input type="date" className="form-control fs-4 p-2" name="date" value={book} onChange={onChangeDate} id="InputDate" aria-describedby="dateHelp" />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-outline-success text-white date-button fs-4">Submit</button>
      </form>
    </main>
  );
};
export default Datepickers;
