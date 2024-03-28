import axios from "axios";

import { URLS } from "../../utils/baseUrls/baseUrls";

export function getUsager() {
  axios
    .get(`${URLS}/usager`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
export function getOneUsager(id) {
  axios
    .get(`${URLS}/usager/${id}`)
    .then((res) => {
      return res.data.response;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
export function deleteUsager(id) {
  axios.delete(`${URLS}/usager/${id}`).then((res) => {
    return res.data;
  });
}
export function modificationUsager(usager, id) {
  axios
    .put(`${URLS}/usager/${id}`, usager)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
export function createUsager(usager) {
  axios
    .post(`${URLS}/usager`, usager)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
