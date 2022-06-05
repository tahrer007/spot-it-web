const express = require("express");
const router = express.Router();
const {getAllUsers ,addUser} = require("../controllers/usersControllers");

router.get('/getusers', getAllUsers) ;
router.post('/addUser', addUser) ;
module.exports = router;
