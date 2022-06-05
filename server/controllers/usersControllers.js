const user = require("../dataBase/models/users");
const { loadAllUsers } = require("../utils/usersUtiles");

const getAllUsers = async (req, res) => {
  try {
    const allusers = await loadAllUsers();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  const newUser = new user({
   userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const addUser = await newUser.save();
    res.status(201).json(addUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  addUser,
};
