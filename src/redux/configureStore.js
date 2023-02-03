import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';
import SpecialitySlice from './specilatiySlice';
import UserSliceReducer from './tokenSlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
  specialities: SpecialitySlice,
  currentuser: UserSliceReducer,
});

const store = configureStore({
  reducer,
});

export default store;
