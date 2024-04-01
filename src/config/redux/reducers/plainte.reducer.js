import {
  ADD_PLAINTES,
  DELETE_PLAINTES,
  EDIT_PLAINTES,
  GET_PLAINTES,
  LIKE_PLAINTES,
} from "../actions/plainte.action";

const initialState = {};

export default function plainteReducer(state = initialState, action) {
  //comportement a faire switch

  switch (action.type) {
    case GET_PLAINTES:
      return action.payLoad;

    case ADD_PLAINTES:
      return [...state, action.payLoad];

    case EDIT_PLAINTES:
      return state.map((plainte) => {
        if (plainte._id === action.payLoad._id) {
          return action.payLoad;
        } else {
          return plainte;
        }
      });
    case DELETE_PLAINTES:
      return state.filter((plainte) => plainte._id !== action.payLoad._id);
    default:
      return state;
  }
}
