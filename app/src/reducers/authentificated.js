import produce from 'immer';
import { AUTHENTICATED_SET, AUTHENTICATED_RESET } from '../actions/authentificated';

const initialState = null;

const authenticatedReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED_SET:
      state = action.payload;
      break;
    case AUTHENTICATED_RESET:
      state = initialState;
      break;
    default:
      break;
  }

  return state;
});

export default authenticatedReducer;
