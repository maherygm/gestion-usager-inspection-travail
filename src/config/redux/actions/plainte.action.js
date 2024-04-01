import axios from "axios";
import { URLS } from "../../../utils/baseUrls/baseUrls";

export const GET_PLAINTES = "GET_PLAINTES";
export const ADD_PLAINTES = "ADD_PLAINTES";
export const EDIT_PLAINTES = "EDIT_PLAINTES";
export const DELETE_PLAINTES = "DELETE_PLAINTES";
export const LIKE_PLAINTES = "LIKE_PLAINTES";

export const getPlainte = () => {
  return (dispatch) => {
    return axios.get(`${URLS}/plainte`).then((res) => {
      dispatch({
        type: GET_PLAINTES,
        payLoad: res.data,
      });
    });
  };
};
export const addPlainte = (Plainte) => {
  return (dispatch) => {
    return axios.post(`${URLS}/plainte`, Plainte).then((res) => {
      dispatch({
        type: ADD_PLAINTES,
        payLoad: res.data.response,
      });
    });
  };
};
export const editPlainte = (Plainte) => {
  return (dispatch) => {
    return axios.put(`${URLS}/plainte/${Plainte._id}`, Plainte).then((res) => {
      dispatch({
        type: EDIT_PLAINTES,
        payLoad: res.data.Plainte,
      });
    });
  };
};
export const deletePlainte = (PlainteId) => {
  return (dispatch) => {
    return axios.delete(`${URLS}/plainte/${PlainteId}`).then((res) => {
      dispatch({
        type: DELETE_PLAINTES,
        payLoad: res.data.remainingPlainte,
      });
    });
  };
};
