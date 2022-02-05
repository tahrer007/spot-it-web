import axios from "axios";

const PORT = process.env.PORT || 5000;

let myUrl = `http://localhost:${PORT}/`;

if (process.env.NODE_ENV === "production") {
  myUrl = "/";
}

const myApi = axios.create({
  baseURL: myUrl,
});

export default myApi;