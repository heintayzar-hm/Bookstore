// Actions
import { CLICK_CHECK_STATUS } from '../constant';
import clickCheckStatus from '../actions/categories';

const initialState = [];

// Reducer
const categories = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default categories;
// Creator Actions
export {
  clickCheckStatus,
};
