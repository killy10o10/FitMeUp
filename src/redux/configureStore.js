import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';
import SpecilatiySlice from './specilatiySlice';
import userSlice from './userSlice';
import UserSlice from './tokenSlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
  specilatiys: SpecilatiySlice,
  users: userSlice,
  currentuser: UserSlice,
});

const store = configureStore({
  reducer,
});

export default store;
