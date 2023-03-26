import axios from 'axios';
import {render} from './render.js';
import {refs} from "../index";
import Notiflix from "notiflix";
import { pageNum } from '../index.js';

export async function fetchPages(searchQuery, pageNum) {
    const API_URL = 'https://pixabay.com/api/';
  
    // параметри запиту на бекенд
    const options = {
      params: {
        key: '33947386-52d504ac84a1d8cdc1096e7de', // мій персональний ключ з pixabay
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: pageNum,
        per_page: 40,
      },
    };
  
    try {
      const response = await axios.get(API_URL, options);
      render(response.data); 
      notification(
      response.data.hits.length,
      response.data.total);

    } catch (error) {
      console.log(error);
    }
  }

  function notification(length, totalHits) {
    if (length === 0) {
  
        // вивести повідомлення про те, що НЕ знайдено жодного зображення
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
  
    if (pageNum === 1) {
      refs.loadMoreBtn.style.display = 'flex'; // показуємо кнопку loadMore
  
      // вивести повідомлення про кількість знайдених зобрежнь
      Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    }
  
    if (length < 40) {
      refs.loadMoreBtn.style.display = 'none'; // ховаємо кнопку loadMore
  
        // вивести інфо-повідомлення про те, що більше вже немає зображень
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
  }