/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';
import { gettoken, loginUser } from '../auth/Auth';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    data: [],
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    settoken: (state, action) => { state.token = action.payload; },
    // setStatus: (state, action) => { state.status = action.payload; },
    userChange: (state, action) => {
      state.data = state.data.map((user) => {
        if (user.user_id !== action.payload) return user;
        return { ...user, user: !user.user };
      });
    },
    traineradd: (state, action) => { state.data = action.payload; },
  },
});

export const {
  getdata, userChange, traineradd, settoken,
} = UserSlice.actions;

export default UserSlice.reducer;

// Thunks

export function fetchdata(item) {
  return async function fetchdataThunk(dispatch) {
    try {
      const { token } = await gettoken(item);
      dispatch(settoken(token));
      if (token !== 'unauthorized') {
        const data = await loginUser(token);
        dispatch(getdata(data));
      }
    } catch (error) {
      console.log('Unauthorized');
    }
  };
}
