import "./sass/_index.scss";
import { fetchPages } from "./js/api";
import Notiflix from "notiflix";

let searchQuery = '';
export let pageNum = 1;

export const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

function onSubmit(e){
  e.preventDefault();
  refs.gallery.innerHTML='';
  pageNum = 1;
  searchQuery = e.currentTarget.elements.searchQuery.value.trim();
  if (searchQuery!==''){
  console.log(searchQuery)
  fetchPages(searchQuery, pageNum);
  
  } else {
     Notiflix.Notify.failure(
       'Sorry, there are no images matching your search query. Please try again.'
       );
 }
}

function onLoadPages(){
  pageNum += 1;
  fetchPages(searchQuery, pageNum).then(onLoadedPages);
  refs.loadMoreBtn.firstChild.classList.add('lds-ripple');
}

function onLoadedPages(){
  refs.loadMoreBtn.firstChild.classList.remove('lds-ripple');
}



refs.loadMoreBtn.addEventListener('click', onLoadPages);
refs.form.addEventListener('submit', onSubmit);
