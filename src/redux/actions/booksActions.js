import { ADD_BOOK, REMOVE_BOOK } from '../constant';

let BookID = 0;
const addBookAction = ({ title, author }) => {
  BookID += 1;
  return ({
    type: ADD_BOOK,
    id: BookID,
    title,
    author,
  });
};

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBookAction,
  removeBookAction,
};
