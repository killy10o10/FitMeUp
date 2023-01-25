import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const TrainerApiUrl = '/api/v1/trainer/trainer.json';

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
