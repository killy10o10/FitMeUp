import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SpecilatiyApiUrl = '/api/v1/trainer/specilatiy.json';

const TrainerRequestMethod = '/get/specilatiys';

const initialState = [];

export const SpecilatiyThunk = createAsyncThunk(TrainerRequestMethod, async () => {
  const specilatiyData = await (await (fetch(SpecilatiyApiUrl))).json();
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
