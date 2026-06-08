import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { refs } from '../constants/constants.js';

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});



export const createGallery = (images) => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-card">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        
        <ul class="statistics">
          <li class="stat-element">
            <span class="stat-name">Likes</span>
            <span class="stat-value">${likes}</span>
          </li>
          <li class="stat-element">
            <span class="stat-name">Views</span>
            <span class="stat-value">${views}</span>
          </li>
          <li class="stat-element">
            <span class="stat-name">Comments</span>
            <span class="stat-value">${comments}</span>
          </li>
          <li class="stat-element">
            <span class="stat-name">Downloads</span>
            <span class="stat-value">${downloads}</span>
          </li>
        </ul>
      </li>
    `
    )
    .join("");


  refs.gallery.insertAdjacentHTML("beforeend", markup);


  lightbox.refresh();
};

export const clearGallery = () => {
  refs.gallery.innerHTML = "";
};

export const showLoader = () => {
  refs.loader.classList.add("is-visible");
};

export const hideLoader = () => {
  refs.loader.classList.remove("is-visible");
};
