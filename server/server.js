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
const publicPath = path.join(__dirname, "../client/build");
const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/locations", locationsRouter);
app.use(express.static(publicPath));

/*if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}*/

app.use("*", (req, res) => {
	res.send("this route is not exist");
});

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on Port: ${PORT}`);
});
