const express = require("express");
const router = express.Router();
const {signUp,signIn} = require("../controllers/AuthControllers");

//router.get('/allLocations', getLocations) ;
router.post('/signup', signUp) ;
router.post('/signin', signIn) ;
module.exports = router;
