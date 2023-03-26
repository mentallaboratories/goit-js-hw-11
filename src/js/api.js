import axios from 'axios';

export const fetchPages = (searchQuery, pageNum) =>axios.get(`https://pixabay.com/api/?key=33947386-52d504ac84a1d8cdc1096e7de&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNum}&per_page=40`)
.then((response) => {return response.data})