import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SpecilatiyApiUrl = 'http://127.0.0.1:3001/api/v1/specialities';

const SpecilatiyRequestMethod = '/get/specilatiys';

const initialState = [];

export const SpecilatiyThunk = createAsyncThunk(SpecilatiyRequestMethod, async (token) => {
  const specilatiyData = await (await (fetch(SpecilatiyApiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  }))).json();
  return specilatiyData;
});

const SpecilatiySlice = createSlice({
  name: 'Specilatiy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SpecilatiyThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export default SpecilatiySlice.reducer;
