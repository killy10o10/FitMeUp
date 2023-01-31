import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const UserApiUrl = '/api/v1/trainer/user.json';

const UserRequestMethod = '/get/users';

const initialState = [];

export const userThunk = createAsyncThunk(UserRequestMethod, async () => {
  const userData = await (await (fetch(UserApiUrl))).json();
  return userData;
});

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export default userSlice.reducer;
