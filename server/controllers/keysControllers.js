require("dotenv").config();


const getGoogleApiKeys = async (req, res) => {
  try {
    const googleApiKey =  process.env.GOOGLE_MAPS_API_KEY;
    return res.status(200).json(googleApiKey);
  } catch (error) {
    return  ({message: error.message}) ;
  }
};
module.exports = {
    getGoogleApiKeys
};
