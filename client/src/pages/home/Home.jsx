import React, { useState, useEffect } from "react";
import Map from "../../components/LocationsMap/Map";
import NewLocationInput from "../../components/newLocationInput/NewLocationInput";
import HomeText from "../../components/homeText/HomeText";
import { getGoogleApiKey, postLocation } from "../../services/locations";

function Home() {
  const [addingLocation, setAddingLocation] = useState(false);
  const [cancelMark, setCancelMark] = useState(false);
  const [successfullyPosted, setSuccessfullyPosted] = useState(null);
  const [ApiKey, setApiKey] = useState("");
  const [newMark, setNewMark] = useState({
    lat: 0,
    lng: 0,
    time: null,
    comment: null,
    number: null,
  });

  useEffect(() => {
    async function getApiKey() {
      return await getGoogleApiKey();
    }
    const key = getApiKey();
    setApiKey(key);
  }, []);

  useEffect(() => {
    const updateDb = async () => {
      const response = await postLocation(newMark);
      console.log(response);
    };

    if (!newMark.number) return;
    updateDb();
  }, [newMark]);

  const handelForm = (howMany, details) => {
    if (!howMany) {
      //setCancelMark(true);
    } else {
      console.log(howMany, details);
      setNewMark((prevState) => ({
        ...prevState,
        number: howMany,
        comment: details,
      }));
    }
    setAddingLocation(false);
  };

  const handelMapClick = (newLocationData) => {
    setAddingLocation(true);
    setNewMark((prevState) => ({
      ...prevState,
      lat: newLocationData.lat,
      lng: newLocationData.lng,
      time: newLocationData.time,
    }));
  };

  return (
    <div className="pagesContainer home BackGround ">
      <div className="homePageLeft">
        {ApiKey && (
          <Map
            handelMapClick={handelMapClick}
            cancel={cancelMark}
            updateDbMarks={successfullyPosted}
            ApiKey={ApiKey}
          />
        )}
      </div>

      <div className="homePageRight">
        {addingLocation ? (
          <NewLocationInput handelForm={handelForm} />
        ) : (
          <HomeText />
        )}
      </div>
    </div>
  );
}
export default Home;
