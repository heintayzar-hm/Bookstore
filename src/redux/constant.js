const ADD_BOOK = 'Bookstore/src/redux/reducers/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/src/redux/reducers/books/REMOVE_BOOK';
const UPDATE_BOOK = 'Bookstore/src/redux/reducers/books/UPDATE_BOOK';
const UPDATE_PROGRESS = 'Bookstore/src/redux/reducers/books/UPDATE_PROGRESS';
const SHOW_BOOK = 'Bookstore/src/redux/reducers/books/SHOW_BOOK';
const ADD_CATEGORY = 'Bookstore/src/redux/reducers/categories/ADD_CATEGORY';
const GET_CATEGORIES = 'Bookstore/src/redux/reducers/categories/GET_CATEGORIES';
const apiUrl = import.meta.env.VITE_API_URL;
const apiSecret = import.meta.env.VITE_API_SECRET;
const apiState = ['/fulfilled', '/pending', '/rejected'];

export {
  ADD_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOK,
  ADD_CATEGORY,
  GET_CATEGORIES,
  UPDATE_PROGRESS,
  SHOW_BOOK,
  apiSecret,
  apiUrl,
  apiState,
};
