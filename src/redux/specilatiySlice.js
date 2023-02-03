import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SpecialityApiUrl = 'http://127.0.0.1:3001/api/v1/specialities';

const SpecialityRequestMethod = '/get/specilatiys';

const initialState = [];

export const SpecialityThunk = createAsyncThunk(SpecialityRequestMethod, async (token) => {
  const specialityData = await (await (fetch(SpecialityApiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  }))).json();
  return specialityData;
});

const SpecialitySlice = createSlice({
  name: 'Speciality',
  initialState,
  reducers: {
    appendspecial: (state, action) => [
      ...state, action.payload,
    ],
  },
  extraReducers: (builder) => {
    builder.addCase(SpecialityThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export const { appendspecial } = SpecialitySlice.actions;

export default SpecialitySlice.reducer;
