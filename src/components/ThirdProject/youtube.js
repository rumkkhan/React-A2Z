import axios from 'axios';
const KEY = 'AIzaSyDvlrbZa54om53kRXXW0ro7OSjl2Es1wM00';
   

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
          maxResults: 5,
        key: KEY
    }
})