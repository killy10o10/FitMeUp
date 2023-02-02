/* eslint-disable no-return-await */
// import { getdata } from "../redux/tokenSlice";
// import { settoken } from "../redux/tokenSlice";
// import { useDispatch } from "react-redux";

/* eslint no-return-await: "error" */
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

export const gettoken = async (item) => (
  await (await fetch('http://127.0.0.1:3001/api/v1/secure/auth_login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(item),
  })).json()
);

export const loginUser = async (token) => (await (await fetch('http://127.0.0.1:3001/api/v1/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: token,
  },
})).json());

export const trainerForm = async (data, token) => (
  await (await fetch('http://127.0.0.1:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })).json()
);

// export const logoutUser = () => {
//   const dispatch = useDispatch();
//   dispatch(settoken(null));
//   dispatch(getdata(null));
// };

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

// export const speciality = async (data,token) => (
//   await (await fetch('http://127.0.0.1:3001/api/v1/specialities', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization:token
//     },
//     body: JSON.stringify(data),
//   })).json()
// );
