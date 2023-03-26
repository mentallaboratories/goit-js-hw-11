import "../sass/_index.scss";
import {refs} from "../index";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const render = (data) => {
    let markupItem = '';
    let markup = '';
    for(const hit of data.hits){
      markupItem = (`<a href="${hit.largeImageURL}">
      <div class="photo-card">
        <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes: </b>${hit.likes}
          </p>
          <p class="info-item">
            <b>Veiws: </b>${hit.views}
          </p>
          <p class="info-item">
            <b>Comments: </b>${hit.comments}
          </p>
          <p class="info-item">
            <b>Downloads: </b>${hit.downloads}
          </p>
        </div>
      </div>
      </a>`);
      markup += markupItem;
    }
    refs.gallery.insertAdjacentHTML('beforeend',markup);
    simpleLightBox.refresh();
  }
//}

const simpleLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionDelay: 250, 
});