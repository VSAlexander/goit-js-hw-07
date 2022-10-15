import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createGalleryItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.open();

// function handleClickOnImg(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }

//   lightbox.open();
// }

galleryEl.addEventListener("click", handleClickOnImg);
