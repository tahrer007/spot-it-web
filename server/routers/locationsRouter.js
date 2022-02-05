const express = require("express");
const router = express.Router();
const {getLocations ,addLocation} = require("../controllers/locationsControllers");

router.get('/getLocations', getLocations) ;
router.post('/addLocation', addLocation) ;
module.exports = router;
