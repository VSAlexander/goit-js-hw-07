import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createGalleryItemsMarkup(galleryItems);

galleryEl.addEventListener("click", handleClickOnImg);

function handleClickOnImg(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalSize = event.target.getAttribute("data-source");

  const description = event.target.alt;

  const lightbox = basicLightbox.create(
    `<img
        src="${originalSize}"
        alt="${description}"
      />
  	`,
    {
      onClose: (lightbox) => {
        window.removeEventListener("keydown", handleEscape);
      },
    }
  );

  lightbox.show();

  const handleEscape = (event) => {
    if (event.key !== "Escape") {
      return;
    }
    lightbox.close();
  };

  window.addEventListener("keydown", handleEscape);
}
