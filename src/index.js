import "./sass/_index.scss";
import {render} from './js/render';
import { fetchPages } from "./js/api";


export const refs = {
  form : document.querySelector('#search-form'),
  gallery : document.querySelector('.gallery')
};
let searchQuery ='';
const pageNum = 1;

function onSubmit(e){
  e.preventDefault();
  refs.gallery.innerHTML='';
  searchQuery = e.currentTarget.elements.searchQuery.value;
  console.log(searchQuery)


  fetchPages(searchQuery, pageNum).then(render)
}



refs.form.addEventListener('submit', onSubmit);
