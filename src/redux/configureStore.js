import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';
import SpecilatiySlice from './specilatiySlice';
import userSlice from './userSlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
  specilatiys: SpecilatiySlice,
  users: userSlice,
});

const store = configureStore({
  reducer,
});

export default store;
