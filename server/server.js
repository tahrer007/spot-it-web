const express = require("./config/express");
mongoose = require("mongoose");
//require("./dataBase/mongoose");
// Use env port or default
const port = process.env.PORT || 5000;

//establish socket.io connection
const app = express.init();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.of("/api/socket").on("connection", (socket) => {
  console.log("socket.io: User connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("socket.io: User disconnected: ", socket.id);
  });
});

//start the server
server.listen(port, () => console.log(`Server now running on port ${port}!`));

//connect to db
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.auigb.mongodb.net/WildAnimalsTracker?retryWrites=true&w=majority`;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connected");
  const thoughtChangeStream = connection.collection("locations").watch();
  console.log("Setting change streams");
  thoughtChangeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":

        console.log("zzzz Server zzzzzzz" , change.fullDocument);
        io.of("/socket").emit("newLocation", change.fullDocument);
        break;
    }
  });
});

connection.on("error", (error) => console.log("Error: " + error));
