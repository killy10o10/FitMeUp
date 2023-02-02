import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';
import SpecilatiySlice from './specilatiySlice';
import userSlice from './userSlice';
import UserSliceReducer from './tokenSlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
  specilatiys: SpecilatiySlice,
  users: userSlice,
  currentuser: UserSliceReducer,
});

const store = configureStore({
  reducer,
});

export default store;
