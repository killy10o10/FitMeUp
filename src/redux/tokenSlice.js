/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    data: [],
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setdata: (state,action) => {state.data=+action.payload},
    // setStatus: (state, action) => { state.status = action.payload; },
    userChange: (state, action) => {
      state.data = state.data.map((user) => {
        if (user.user_id !== action.payload) return user;
        return { ...user, user: !user.user };
      });
    },
    traineradd: (state, action) => { state.data = + action.payload },
  },
});

export const { getdata,  userChange, traineradd, setdata } = UserSlice.actions;

export default UserSlice.reducer;

// Thunks

export function fetchdata(item) {
  return async function fetchdataThunk(dispatch) {
    try {
      const { token } = gettoken(item)

      if (token !== 'unauthorized') {
        const data = loginUser();
        const obj = {
          token,
          data
        }
      dispatch(setdata(obj));
      }
   
    } catch (error) {
      console.log("Unauthorized");
    }
  };
}
