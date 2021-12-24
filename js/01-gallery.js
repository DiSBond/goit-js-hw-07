import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'

const gallaryEl = document.querySelector('.gallery');
const createImageMarkupList = createImageMarkup(galleryItems);

gallaryEl.insertAdjacentHTML('afterbegin', createImageMarkupList);

// gallaryEl.addEventListener('click', onLinkClick);


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

// function onLinkClick(e) {
//   e.target.firstElementChild.preventDefault();

//   if (!e.target.classList.contains('gallery__item')) {
//     return
//   }
  
//   const bigImageLink = e.target.firstElementChild.href

//   const intance = basicLightbox.create(`<img src ="${bigImageLink}" width="800" heigth="600">`);
 
 
//   bigImageLink.show()
// };

