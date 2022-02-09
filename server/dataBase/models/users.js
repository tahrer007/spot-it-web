const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {
    type :String ,
    required: [true , "Please provide a name "],
    default: "guest",
    
  },
  lat: {
    type: Number,
    required: [true, "Please provide a lat"],
  },
  lng: {
    type: Number,
    required: [true, "Please provide a lng"],
  },
});

const user = mongoose.model("users", usersSchema);

module.exports = user;
