// Actions
import { ADD_CATEGORY, GET_CATEGORIES, apiState } from '../constant';

// eslint-disable-next-line no-unused-vars
const [success, waiting, fail] = apiState;

const initialState = [];

// Reducer
const categories = (state = initialState, action) => {
  let category = {};

  switch (action.type) {
    case GET_CATEGORIES + success:
      return action.payload;
    case ADD_CATEGORY + success:
      category = {
        name: action.meta.arg,
        id: action.payload.id,
      };
      return [
        ...state,
        {
          ...category,
        },
      ];
    default:
      return state;
  }
};

export default categories;
