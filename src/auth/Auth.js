/* eslint-disable no-return-await */
/* eslint no-return-await: "error" */

import { appenddata } from '../redux/fitMeUpSlice';
import { appendspecial } from '../redux/specilatiySlice';

export const signupUser = async (data) => (
  await (await fetch('http://127.0.0.1:3001/api/v1/users', {
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
  const res = await (await fetch('http://127.0.0.1:3001/api/v1/users', {
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

// export const deleteform = async () => {

//   const res = await (await fetch('http://127.0.0.1:3001/api/v1/users', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: token,
//     },
//     body: JSON.stringify(data),
//   })).json();

//   if(res.id)
//   dispatch(appenddata(res));

//   return res;

// }

export const bookTrainer = async (data, token) => (
  await (await fetch('http://127.0.0.1:3001/api/v1/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).json()
);

// export const logoutUser = () => (dispatch) => fetch('http://localhost:3000/logout', {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: getToken(),
//   },
// }).then((res) => {
//   deleteToken();
//   if (res.ok) {
//     return res.json()
//       .then(() => dispatch({ type: NOT_AUTHENTICATED }));
//   }
//   return res.json().then((errors) => {
//     dispatch({ type: NOT_AUTHENTICATED });
//     return Promise.reject(errors);
//   });
// });

export const specialityForm = async (data, token, dispatch) => {
  const res = await (await fetch('http://127.0.0.1:3001/api/v1/specialities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).json();

  if (res.id) dispatch(appendspecial(res));

  return res;
};
