require("dotenv").config();
require("./dataBase/mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const webpush = require("web-push");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const locationsRouter = require("./routers/locationsRouter");
const usersRouter = require("./routers/usersRouter");

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(
  cors({
    origin: "*", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.use("/users", usersRouter);
app.use("/locations", locationsRouter);

/*const publicVapidKey =
  "BBgUIHi4LfvctkcccjVg05kEzrY7o9tdsYwOi6feFCPdBfau8XvgF0OhhIxdUahH8YQslCkBepXUAxKoJatyiuM";
const privateVapidKey = "73QfPzJ-24R4LXHWq5x1Hnr8FeMySDov1DujsEmlErc";*/






  
const PORT = process.env.PORT || 5000;

/*app.use(express.static(path.join(__dirname, "client")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.all("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});*/
app.use(express.static('public'))

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
