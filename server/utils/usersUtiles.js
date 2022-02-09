const users = require("../dataBase/models/users");
const loadAllUsers = () => users.find();

module.exports = {
  loadAllUsers,
};
