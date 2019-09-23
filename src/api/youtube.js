import axios from 'axios';

const KEY = 'AIzaSyDk6kTOI9qx4_XP9VhOJ9_tFFpWTrstUiI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
