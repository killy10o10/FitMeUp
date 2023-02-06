import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const TrainerApiUrl = 'https://fitmeup.onrender.com/api/v1/trainers';

const TrainerRequestMethod = '/get/trainers';

const initialState = [];

export const FitMeUpThunk = createAsyncThunk(TrainerRequestMethod, async () => {
  const trainerData = await (await (fetch(TrainerApiUrl))).json();
  return trainerData;
});

const FitMeUpSlice = createSlice({
  name: 'FitMeUp',
  initialState,
  reducers: {
    appenddata: (state, action) => [
      ...state, action.payload,
    ],

    filterdata: (state, action) => {
      state.filter((item) => item === action.payload);
      return [
        ...state, action.payload,
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FitMeUpThunk.fulfilled, (state, action) => {
      const { payload } = action;
      return [
        ...payload,
      ];
    });
  },
});

export const { appenddata } = FitMeUpSlice.actions;

export default FitMeUpSlice.reducer;
