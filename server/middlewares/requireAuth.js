const jwt = require("jsonwebtoken");
const User = require("../dataBase/models/users.js");

require("dotenv").config();
const MY_SECRET_KEY = process.env.SECRET_KEY;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ error: "you must logged in ." });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, MY_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(401).send({ error: "you must logged in." });
    const { userId } = payload;
   
    const user = await User.findById(userId);
    res.user = user;
    next();
  });
};
