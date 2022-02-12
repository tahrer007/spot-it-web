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

const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, "../..", "client/build");

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/locations", locationsRouter);

app.all("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

const publicPath = path.join(__dirname, "..", "client/build");
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});

/*const publicVapidKey =
  "BBgUIHi4LfvctkcccjVg05kEzrY7o9tdsYwOi6feFCPdBfau8XvgF0OhhIxdUahH8YQslCkBepXUAxKoJatyiuM";
const privateVapidKey = "73QfPzJ-24R4LXHWq5x1Hnr8FeMySDov1DujsEmlErc";*/

/*app.use(express.static(path.join(__dirname, "client")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.all("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});*/
