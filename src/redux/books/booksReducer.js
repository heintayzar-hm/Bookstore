// Actions
import { ADD_BOOK, REMOVE_BOOK } from '../constant';
import { addBookAction, removeBookAction } from '../actions/booksActions';
//
const initialState = [];
const books = (state = initialState, action) => {
  const { id, author, title } = action;
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id, author, title,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== id);
    default:
      return state;
  }
};

export default books;

// Creators
export {
  addBookAction,
  removeBookAction,
};
