const express = require("express");
const router = express.Router();
const {getGoogleApiKeys } = require("../controllers/keysControllers");

router.get('/googleApiKey', getGoogleApiKeys) ;

module.exports = router;
