const express = require("express");
const router = express.Router();
const {getUsers ,addUser} = require("../controllers/usersControllers");

router.get('/getusers', getUsers) ;
router.post('/addUser', addUser) ;
module.exports = router;
