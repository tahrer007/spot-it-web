import { myApi } from "./api";

const getAllLocations = async () => {
  try {
    const { data } = await myApi.get("locations/allLocations");

    //intialMarks(data);
    return { status: "ok", locations: data };
  } catch (error) {
    console.log(error.message);
    return { status: "faild", message: error.message };
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

export { getAllLocations, postLocation };
