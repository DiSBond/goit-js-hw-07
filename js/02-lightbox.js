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
    <img class="gallery__image" src="${preview}" title="${description}" />
    </a>
    </li>`

    }).join('');
};

   let gallery = new SimpleLightbox(".gallery a");
gallery.on('show.simplelightbox', () => {
    captionsData: 'title';
    captionDelay: 250; 
    });
