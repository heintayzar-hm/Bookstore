// Actions
import {
  ADD_BOOK, apiState, REMOVE_BOOK, SHOW_BOOK, UPDATE_BOOK,
} from '../constant';
import { addBookAction, removeBookAction, showBookAction } from '../actions/booksActions';
//
const [success, waiting, fail] = apiState;
const initialState = [];
const books = (state = initialState, action) => {
  let book = {};
  let books = [];
  switch (action.type) {
    case ADD_BOOK + success:
      book = { ...action.meta.arg, ...action.payload };
      return [
        ...state,
        {
          ...book,
        },
      ];
    case SHOW_BOOK + success:
      return action.payload;
    case SHOW_BOOK + waiting:
      return state;
    case SHOW_BOOK + fail:
      return state;
    case REMOVE_BOOK + success:
      return state.filter((book) => book.id !== action.meta.arg);
    case REMOVE_BOOK + fail:
      return state;
    case UPDATE_BOOK + success:
      books = state.map((book) => {
        if (action.meta.arg.id === book.id) {
          return { ...action.meta.arg };
        }
        return book;
      });
      return books;
    case UPDATE_BOOK + fail:
      return state;
    default:
      return state;
  }
};

export default books;

// Creators
export {
  addBookAction,
  removeBookAction,
  showBookAction,
};
