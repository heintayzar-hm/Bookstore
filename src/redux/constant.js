const ADD_BOOK = 'Bookstore/src/redux/reducers/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookstore/src/redux/reducers/books/REMOVE_BOOK';
const UPDATE_BOOK = 'Bookstore/src/redux/reducers/books/UPDATE_BOOK';

const SHOW_BOOK = 'Bookstore/src/redux/reducers/books/SHOW_BOOK';
const CLICK_CHECK_STATUS = 'Bookstore/src/redux/reducers/categories/CLICK_CHECK_STATUS';

const apiUrl = import.meta.env.VITE_API_URL;
const apiSecret = import.meta.env.VITE_API_SECRET;
const apiState = ['/fulfilled', '/pending', '/rejected'];

export {
  ADD_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOK,
  CLICK_CHECK_STATUS,
  SHOW_BOOK,
  apiSecret,
  apiUrl,
  apiState,
};
