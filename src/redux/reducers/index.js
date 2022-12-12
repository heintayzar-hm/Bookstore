import { combineReducers } from 'redux';
import books from '../books/booksReducer';
import categories from '../categories/categoriesReducer';

const rootReducer = combineReducers({
  books,
  categories,
});

export default rootReducer;
