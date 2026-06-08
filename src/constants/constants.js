
export const refs = {
  form: document.querySelector(".form"),
  input: document.querySelector(".query-input"), 
  gallery: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
};


export const API_KEY = "48667143-848a2c1e8cdbe8787de8ea23b";
export const BASE_URL = "https://pixabay.com/api/";

export const STORAGE_KEY = "query";

export const simpleLightboxOptions = {
  overlay: true,
  overlayOpacity: 1,
  captions: true,
  captionPosition: 'bottom',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
};