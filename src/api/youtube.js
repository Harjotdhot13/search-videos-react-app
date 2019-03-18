import axios from "axios";

const KEY = "AIzaSyCeYUqeuYagncvAv7Nr0rhDLo837Q7Hd5A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
