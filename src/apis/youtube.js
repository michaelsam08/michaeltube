import axios from "axios";

const KEY = "AIzaSyA8pQIozXA64PjElS1z9VilonWHW_sIjJc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
