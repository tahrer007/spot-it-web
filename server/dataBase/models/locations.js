const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema(
  {
    lat: {
      type: Number,
      required: [true, "Please provide a lat"],
    },
    lng: {
      type: Number,
      required: [true, "Please provide a lng"],
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
    number: {
      type: String,
      required: [true, "Please provide a number"],
    },
    
    expire_at: { type: Date, 
      default: new Date(new Date().valueOf() + 172800000),
      /* Remove doc 60 seconds after specified date */
    
      
      expires: 60},
  },
  
);


const location = mongoose.model("locations", locationsSchema);

module.exports = location;
