import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const TrainerApiUrl = 'http://127.0.0.1:3001/api/v1/trainers';

const TrainerRequestMethod = '/get/trainers';

const initialState = [];

export const FitMeUpThunk = createAsyncThunk(TrainerRequestMethod, async () => {
  const trainerData = await (await (fetch(TrainerApiUrl))).json();
  return trainerData;
});

const FitMeUpSlice = createSlice({
  name: 'FitMeUp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FitMeUpThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export default FitMeUpSlice.reducer;
