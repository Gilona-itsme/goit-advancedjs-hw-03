import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { refs } from './constants/constants.js';
import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const onSubmit = (e) => {
  e.preventDefault();

  const query = refs.input.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Caution",
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }


  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then((data) => {
      const images = data.hits;

      if (!images || images.length === 0) {
        iziToast.error({
          title: "Error",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(images);
      refs.form.reset(); 
    })
    .catch((error) => {
      console.error(error);
      iziToast.error({
        title: "Error",
        message: "Something went wrong. Try again later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader(); 
    });
};


refs.form.addEventListener("submit", onSubmit);
