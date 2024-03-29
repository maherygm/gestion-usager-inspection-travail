import axios from "axios";

import { URLS } from "../../utils/baseUrls/baseUrls";

export async function getUsager() {
  return await axios
    .get(`${URLS}/usager`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
export async function getOneUsager(id) {
  return await axios
    .get(`${URLS}/usager/${id}`)
    .then((res) => {
      return res.data.response;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
export async function deleteUsager(id) {
  return await axios.delete(`${URLS}/usager/${id}`).then((res) => {
    return res.data;
  });
}
export async function modificationUsager(usager, id) {
  return await axios
    .put(`${URLS}/usager/${id}`, usager)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
export async function createUsager(usager) {
  return await axios
    .post(`${URLS}/usager`, usager)
    .then((res) => {
      return res.data.response;
    })
    .catch((err) => {
      console.error("front end error putUsager", err);
    });
}
