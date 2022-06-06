import React, { useState, useEffect } from "react";
import Map from "../../components/LocationsMap/Map";
import NewLocationInput from "../../components/newLocationInput/NewLocationInput";
import HomeText from "../../components/homeText/HomeText";
import { getGoogleApiKey, postLocation } from "../../services/locations";

function Home() {
  const [addingLocation, setAddingLocation] = useState(false);
  const [removeLocaLMark, setRemoveLocalMark] = useState(false);
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
      const key =await getGoogleApiKey();
      setApiKey(key);
    }
    getApiKey();
  }, []);

  useEffect(() => {
    const updateDb = async () => {
      await postLocation(newMark);
      setNewMark({});
    };

    if (!newMark.number) return;
    updateDb();
  }, [newMark]);

  const handelForm = (howMany, details) => {
    if (!howMany) {
    } else {
      setNewMark((prevState) => ({
        ...prevState,
        number: howMany,
        comment: details,
      }));
    }
    setAddingLocation(false);
    setRemoveLocalMark(true);

    setTimeout(() => {
      setRemoveLocalMark(false);
    }, 1000);
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
            removeLocaLMark={removeLocaLMark}
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
