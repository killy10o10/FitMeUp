import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
});

const store = configureStore({
  reducer,
});

export default store;
