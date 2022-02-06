require("dotenv").config();
const mongoose = require("mongoose");
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.auigb.mongodb.net/WildAnimalsTracker?retryWrites=true&w=majority`;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
   //autoIndex: false 
}).then(() => {
  console.log("Database has been connected!");
 
})
.catch((err) => {
  console.log(err);
});
 

