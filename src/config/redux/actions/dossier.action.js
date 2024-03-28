import axios from "axios";
import { URLS } from "../../../utils/baseUrls/baseUrls";

export const GET_DOSSIERS = "GET_DOSSIERS";
export const ADD_DOSSIERS = "ADD_DOSSIERS";
export const EDIT_DOSSIERS = "EDIT_DOSSIERS";
export const DELETE_DOSSIERS = "DELETE_DOSSIERS";
export const LIKE_DOSSIERS = "LIKE_DOSSIERS";

export const getDossier = () => {
  return (dispatch) => {
    return axios.get(`${URLS}/dossier`).then((res) => {
      dispatch({
        type: GET_DOSSIERS,
        payLoad: res.data,
      });
    });
  };
};
export const addDossier = (dossier) => {
  return (dispatch) => {
    return axios.post(`${URLS}/dossier`, dossier).then((res) => {
      dispatch({
        type: ADD_DOSSIERS,
        payLoad: res.data.response,
      });
    });
  };
};
export const editDossier = (dossier) => {
  return (dispatch) => {
    return axios.put(`${URLS}/dossier/${dossier._id}`, dossier).then((res) => {
      dispatch({
        type: EDIT_DOSSIERS,
        payLoad: res.data.Dossier,
      });
    });
  };
};
export const deleteDossier = (dossierId) => {
  return (dispatch) => {
    return axios.delete(`${URLS}/dossier/${dossierId}`).then((res) => {
      dispatch({
        type: DELETE_DOSSIERS,
        payLoad: res.data.remainingDossier,
      });
    });
  };
};
