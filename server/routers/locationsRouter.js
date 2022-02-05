const express = require("express");
const router = express.Router();
const {getAllLocations ,addNewLocation} = require("../controllers/locationsControllers");

router.get('/getAllLocations', getAllLocations) ;
router.post('/addNewLocation', addNewLocation) ;
module.exports = router;
