import axios from "axios";
const myUrl = `https://spot-it-server.herokuapp.com/`;
const myApi = axios.create({
  baseURL: myUrl,
});

export  {myApi,myUrl};