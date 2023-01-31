import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';
import SpecilatiySlice from './specilatiySlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
  specilatiys: SpecilatiySlice,
});

const store = configureStore({
  reducer,
});

export default store;
