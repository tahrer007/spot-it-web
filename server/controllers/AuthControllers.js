const User = require("../dataBase/models/users.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const MY_SECRET_KEY = process.env.SECRET_KEY;

const signUp = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    const token = jwt.sign({ userId: user._id }, MY_SECRET_KEY);
    res.status(201).json({ token });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).send({ error: "Must provide email and password" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).send({ error: "email not found" });
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, MY_SECRET_KEY);
    res.send({ token });
  } catch (error) {
    return res.status(422).send({ error: "invalid email or password" });
  }

  res.status(201).json({ token });
};

module.exports = {
  signUp,
  signIn,
};
