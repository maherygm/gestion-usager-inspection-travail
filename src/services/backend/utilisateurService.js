import axios from "axios";

import { URLS } from "../../utils/baseUrls/baseUrls";

export function authentification(emails, mdp) {
  const datas = getUtilisateur();

  return datas.then((data) => {
    const result = data.filter(
      (data) =>
        data.utilisateur.email === emails &&
        data.utilisateur.motsDePasse === mdp
    );

    if (result.length > 0) {
      sessionStorage.setItem("connnectedUser", JSON.stringify(result[0]));
      return {
        valide: true,
        data: result,
      };
    } else {
      return {
        valide: false,
      };
    }
  });
}

export async function getUtilisateur() {
  const res = await axios
    .get(`${URLS}/utilisateur`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error sur getutilisateur", err);
    });
  return res;
}
export function getOneUtilisateur(id) {
  return axios
    .get(`${URLS}/utilisateur/${id}`)
    .then((res) => {
      return res.data.response;
    })
    .catch((err) => {
      console.error("front end error  getOneUtilisateur", err);
    });
}
export function deleteUtilisateur(id) {
  return axios
    .delete(`${URLS}/utilisateur/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error deleteUtilisateur", err);
    });
}
export function modificationUtilisateur(utilisateur, id) {
  return axios
    .put(`${URLS}/utilisateur/${id}`, utilisateur)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error putUtilisateur", err);
    });
}
export function createUtilisateur(utilisateur) {
  return axios
    .post(`${URLS}/utilisateur`, utilisateur)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error postUtilisateur", err);
    });
}
