require("dotenv").config();
require("./dataBase/mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const locationsRouter = require("./routers/locationsRouter");
const usersRouter = require("./routers/usersRouter");

const PORT = process.env.PORT || 5000;
//const publicPath = path.join(__dirname, "..", "client/build");
//app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/locations", locationsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on Port: ${PORT}`);
});
