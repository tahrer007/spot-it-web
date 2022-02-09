const locations = require("../dataBase/models/locations");
const loadAllLocations = () => locations.find();


module.exports = {
    loadAllLocations,
};
