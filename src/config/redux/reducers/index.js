import { combineReducers } from "redux";
import dossierReducer from "./dossier.reducer";
import userReducer from "./user.reducer";
import plainteReducer from "./plainte.reducer";
export default combineReducers({
  dossierReducer,
  userReducer,
  plainteReducer,
});
