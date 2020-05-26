import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, {
        loading: true,
        error: null,
      });
    case actionTypes.AUTH_SUCCESS:
      return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        loading: false,
        error: null,
      });
    case actionTypes.AUTH_ERROR:
      return updateObject(state, {
        error: action.error,
        loading: false,
      });
    case actionTypes.AUTH_LOGOUT:
      return updateObject(state, {
        token: null,
        userId: null,
      });

    default:
      return state;
  }
};

export default reducer;
