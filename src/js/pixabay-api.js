import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/constants.js";

export const getImagesByQuery = (query) => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then((res) => res.data);
}