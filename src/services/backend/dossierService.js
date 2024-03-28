import axios from "axios";

import { URLS } from "../../utils/baseUrls/baseUrls";

export function getDossier() {
  axios.get(`${URLS}/dossier`).then((res) => {
    return res.data;
  });
}
export function getOneDossier(id) {
  axios.get(`${URLS}/dossier/${id}`).then((res) => {
    return res.data.response;
  });
}
