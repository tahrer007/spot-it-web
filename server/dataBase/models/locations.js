const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
  location: {
    type: Object,
    required: [true, "Please provide a location"],
  },
  time: {
    type: Object,
    required: [true, "Please provide a time"],
  },
  comment: {
    type: String,
    required: [false],
    default: "user didn't add comment",
  },
  number :{
    type: Number,
    required: [true,"Please provide a number"],
    
  }
});

const location = mongoose.model("locations", locationsSchema);

module.exports = location;
