import { configureStore, combineReducers } from '@reduxjs/toolkit';
import fitMeUpSlice from './fitMeUpSlice';
import UserSliceReducer from './tokenSlice';

const reducer = combineReducers({
  trainers: fitMeUpSlice,
  currentuser: UserSliceReducer,
});

const store = configureStore({
  reducer,
});

export default store;
