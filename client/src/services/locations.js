import { myApi } from "./api";

const getAllLocations = async () => {
  try {
    const { data } = await myApi.get("locations/allLocations");

    //intialMarks(data);
    return { success: true, locations: data };
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
};

const postLocation = async (newLocation) => {
  myApi.post("/locations/newLocation", newLocation).then(
    (response) => {
      return true;
    },
    (error) => {
      console.log(error.message);
      return false;
    }
  );
};

const getGoogleApiKey = async () => {
  try {
    const key = await myApi.get("keys/googleApiKey");
    console.log(key.data)
    return key.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllLocations, postLocation ,getGoogleApiKey };
