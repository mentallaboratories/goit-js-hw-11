import axios from 'axios';

// Make a request for a user with a given ID
axios.get('https://pixabay.com/api/?key=33947386-52d504ac84a1d8cdc1096e7de&q=yellow+flowers&image_type=photo&pretty=true')
  .then(function (response) {
    // handle success
    console.log(response);
  })