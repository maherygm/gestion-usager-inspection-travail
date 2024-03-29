import {
  ADD_DOSSIERS,
  DELETE_DOSSIERS,
  EDIT_DOSSIERS,
  GET_DOSSIERS,
  LIKE_DOSSIERS,
} from "../actions/dossier.action";

const initialState = {};

export default function dossierReducer(state = initialState, action) {
  //comportement a faire switch

  switch (action.type) {
    case GET_DOSSIERS:
      return action.payLoad;

    case ADD_DOSSIERS:
      return [...state, action.payLoad];

    case EDIT_DOSSIERS:
      return state.map((dossier) => {
        if (dossier._id === action.payLoad._id) {
          return action.payLoad;
        } else {
          return dossier;
        }
      });
    case DELETE_DOSSIERS:
      return state.filter((dossier) => dossier._id !== action.payLoad._id);
    default:
      return state;
  }
}
