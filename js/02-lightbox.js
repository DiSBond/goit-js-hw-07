import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryEl = document.querySelector('.gallery');


const createImageMarkupList = createImageMarkup(galleryItems);

gallaryEl.insertAdjacentHTML('afterbegin', createImageMarkupList);

function createImageMarkup(galleryItems) {

    return galleryItems.map(({ original,  preview,  description }) => {
        return `
    <li class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`

    }).join('');

};

console.log(gallaryEl);

