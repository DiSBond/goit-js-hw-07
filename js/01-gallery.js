import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const gallaryEl = document.querySelector('.gallery');
const createImageMarkupList = createImageMarkup(galleryItems);

gallaryEl.insertAdjacentHTML('afterbegin', createImageMarkupList);

function createImageMarkup(galleryItems) {

    return galleryItems.map(({ original,  preview,  description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
        </div>`;
    }).join('');

}

gallaryEl.addEventListener('click', onLinkClick);

function onLinkClick(e) {
  e.preventDefault();

  if (!e.target.nodeName === "IMG") {
    return
  }
  
  const bigImageLink = e.target.dataset.source;


  const intance = basicLightbox.create(`<img src ="${bigImageLink}" width="800" heigth="600">`);
 
 
  intance.show()
};

