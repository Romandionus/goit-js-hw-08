// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
const galleryEl = document.querySelector(`div`);
const newLinkImgEl = galleryItems.map((item) => `<div class="gallery"><a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></div>`).join("")
galleryEl.insertAdjacentHTML('beforeend', newLinkImgEl)

galleryEl.addEventListener('click', clickOnImg)

function clickOnImg(evt) {
    evt.preventDefault();
    const typeOfImg = evt.target.nodeName;
    if (typeOfImg !== `IMG`) {
        return;
    }
    console.dir(typeOfImg)
}

let gallery = new SimpleLightbox('.gallery a',
    {
    overlay:true,
    nav: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    });