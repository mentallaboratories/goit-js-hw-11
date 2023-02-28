import axios from 'axios';

const refs = {
  form : document.querySelector('#search-form'),
  gallery : document.querySelector('.gallery')
};
let searchQuery ='';
const pageNum ="1";

refs.form.addEventListener('submit', onSubmit);




function onSubmit(e){
  e.preventDefault();
  searchQuery = e.currentTarget.elements.searchQuery.value;
  console.log(searchQuery)

axios.get(`https://pixabay.com/api/?key=33947386-52d504ac84a1d8cdc1096e7de&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNum}&per_page=40`)
  .then((response) => {return response.data})
  .then((data) => {
    let markupItem = '';
    let markup = '';
// markup cycle
    for(const hit of data.hits){
      markupItem = (`
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
                  `);
      markup += markupItem;
    }
    refs.gallery.innerHTML = markup;
  })
}

