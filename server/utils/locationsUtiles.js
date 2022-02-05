const locations = require("../dataBase/models/locations");
const loadAllLocations = () => locations.find();

const isLocationExist = async (locationCordinats) => {
 /* const user = await User.findOne({ id: userId });
  //console.log(user);
  return user;*/
};

module.exports = {
    loadAllLocations,
};
