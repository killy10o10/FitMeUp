/* eslint no-param-reassign: "error" */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { SpecialityThunk } from './specilatiySlice';
// import { loginUser } from '../auth/Auth';

const SpecialityApiUrl = 'http://127.0.0.1:3001/api/v1/specialities';

export const getUser = createAsyncThunk('/jcjdc/adahgshs', async (item) => {
  const result = await (await fetch('http://127.0.0.1:3001/api/v1/secure/auth_login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(item),
  })).json();

  if (result.token !== undefined) {
    const user = (await (await fetch('http://127.0.0.1:3001/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: result.token,
      },
    })).json());
    let obj = {};
    if (user.role === 'admin') {
      const specialities = await (await (fetch(SpecialityApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: result.token,
        },
      }))).json();
      obj = {
        token: result.token,
        data: user,
        specialities,
      };
    } else {
      obj = {
        token: result.token,
        data: user,
      };
    }
    return obj;
  }
  const { token } = result;
  return {
    token,
  };
});

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    data: {},
    specialities: [],
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    // settoken: (state, action) => { state.token = action.payload; },
    // appendappointment: (state, action) => {
    //   return {...state,
    //     state.data.appointments: [...state.data.appointments,action.payload]
    //   }
    // },
    signout: () => ({ token: '', data: {} }),
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      const { payload } = action;
      return payload;
    });
  },
});

export const {
  getdata, signout,
} = UserSlice.actions;

export default UserSlice.reducer;

// export function fetchdata(item) {
//   return async function fetchdataThunk(dispatch) {
//       };
// }

// export const fetchUser = createAsyncThunk('/ashasghdsgd', async ({ dispatch, item }) => {
//   try {
//     if (token !== 'unauthorized') {
//       const data = await loginUser(token);
//       dispatch(getdata(data));
//       if (data.role === 'admin') dispatch(SpecialityThunk(token));
//     }
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.warn('Unauthorized');
//   }
// });
