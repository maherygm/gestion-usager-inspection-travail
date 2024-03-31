import { combineReducers } from "redux";
import dossierReducer from "./dossier.reducer";
import userReducer from "./user.reducer";
export default combineReducers({
  dossierReducer,
  userReducer,
});
