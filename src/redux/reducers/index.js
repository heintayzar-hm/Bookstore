import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import books from '../books/booksReducer';
import categories from '../categories/categoriesReducer';

const rootReducer = combineReducers({
  books,
  categories,
  firestore: firestoreReducer,
});

export default rootReducer;
