/* eslint-disable no-return-await */
/* eslint no-return-await: "error" */

import { appenddata } from '../redux/fitMeUpSlice';

export const signupUser = async (data) => (
  await (await fetch('https://fitmeup.onrender.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })).json()
);

// export const loginUser = async (token) =>

export const trainerForm = async (data, token, dispatch) => {
  const res = await (await fetch('https://fitmeup.onrender.com/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).json();

  if (res.id) dispatch(appenddata(res));

  return res;
};

export const bookTrainer = async (data, token) => (
  await (await fetch('https://fitmeup.onrender.com/api/v1/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).json()
);

export const specialityForm = async (data, token) => {
  const res = await (await fetch('https://fitmeup.onrender.com/api/v1/specialities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).json();

  return res;
};
