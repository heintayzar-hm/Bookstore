import { configureStore } from '@reduxjs/toolkit';
import db from '../firebase/firebase';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    firestore: db,
  },
});

export default store;
