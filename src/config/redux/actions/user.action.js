import axios from "axios";
import { URLS } from "../../../utils/baseUrls/baseUrls";

export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_ONE_USER = "GET_ONE_USER";

export const getutilisateur = () => {
  return (dispatch) => {
    return axios.get(`${URLS}/utilisateur`).then((res) => {
      dispatch({
        type: GET_USER,
        payLoad: res.data,
      });
    });
  };
};
export const getOneutilisateur = (id) => {
  return (dispatch) => {
    return axios.get(`${URLS}/utilisateur/${id}`).then((res) => {
      dispatch({
        type: GET_ONE_USER,
        payLoad: res.data,
      });
    });
  };
};
export const addutilisateur = (utilisateurData, file) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("utilisateur", JSON.stringify(utilisateurData.utilisateur));
    return axios
      .post(`${URLS}/utilisateur`, formData)
      .then((res) => {
        dispatch({
          type: ADD_USER,
          payLoad: res.data.response,
        });
      })
      .catch((err) => {
        console.error("front end error postUtilisateur", err);
      });
  };
};

export const editutilisateur = (utilisateur) => {
  return (dispatch) => {
    return axios
      .put(`${URLS}/utilisateur/${utilisateur._id}`, utilisateur)
      .then((res) => {
        dispatch({
          type: EDIT_USER,
          payLoad: res.data.Utilisateur,
        });
      });
  };
};
export const deleteutilisateur = (utilisateurId) => {
  return (dispatch) => {
    return axios.delete(`${URLS}/utilisateur/${utilisateurId}`).then((res) => {
      dispatch({
        type: DELETE_USER,
        payLoad: res.data.remainingUtilisateur,
      });
    });
  };
};
