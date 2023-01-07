import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import books from '../books/booksReducer';
import categories from '../categories/categoriesReducer';
import authReducer from '../auth/authReducer';

const rootReducer = combineReducers({
  books,
  categories,
  authReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
