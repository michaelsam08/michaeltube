import axios from "axios";

const KEY = "AIzaSyCON2cldWkUuYznZdpdkW-A2Dg5ToJbmHo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
