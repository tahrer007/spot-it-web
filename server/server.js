require("dotenv").config();
require("./dataBase/mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const locationsRouter = require("./routers/locationsRouter");
//const usersRouter = require("./routers/usersRouter");
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cors());
//app.use("/users", usersRouter);
app.use("/locations", locationsRouter);
const PORT = process.env.PORT || 5000;

/*app.get('/api/googleMaps', (req, res) => {
  res = process.env.GOOGLE_MAPS_KEY_API;

  //console.log(req)
  try{

  }catch(error){


  }
 
  
  
});*/
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
