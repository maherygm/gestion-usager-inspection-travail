import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  GET_USER,
  GET_ONE_USER,
} from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  //comportement a faire switch

  switch (action.type) {
    case GET_USER:
      return action.payLoad;

    case ADD_USER:
      return [...state, action.payLoad];

    case GET_ONE_USER:
      return [...state, action.payLoad];

    case EDIT_USER:
      return state.map((user) => {
        if (user._id === action.payLoad._id) {
          return action.payLoad;
        } else {
          return user;
        }
      });
    case DELETE_USER:
      console.log("user id ", "id ", action.payLoad._id);
      return state.filter((user) => user._id !== action.payLoad._id);
    default:
      return state;
  }
}
