require("dotenv").config();
require("./dataBase/mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require('morgan');
const subscriptionHandler = require('./subscriptionHandler');
const locationsRouter = require("./routers/locationsRouter");
const usersRouter = require("./routers/usersRouter");

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(
  cors({
    origin: '*', // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // allow session cookie from browser to pass through
  })
);
app.use(logger('dev'));
app.use("/users", usersRouter);
app.use("/locations", locationsRouter);


app.post('/subscription', subscriptionHandler.handlePushNotificationSubscription);
app.get('/subscription/:id', subscriptionHandler.sendPushNotification);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.all("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
