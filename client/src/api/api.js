import axios from "axios";

const PORT = process.env.PORT || 5000;

let myUrl = `https://spot-it-server.herokuapp.com/`;

/*if (process.env.NODE_ENV === "production") {
  myUrl = "/";
}*/

const myApi = axios.create({
  baseURL: myUrl,
});

export default myApi;