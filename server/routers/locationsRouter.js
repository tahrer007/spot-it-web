const express = require("express");
const router = express.Router();
const {getLocations ,addLocation} = require("../controllers/locationsControllers");

router.get('/allLocations', getLocations) ;
router.post('/newLocation', addLocation) ;
module.exports = router;
