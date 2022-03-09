import React, { useState, useEffect } from "react";
import Map from "../../components/LocationsMap/map";
import NewLocationInput from "../../components/newLocationInput/newLocationInput";
import HomeText from "../../components/homeText/homeText";
import "../../App.css";
import "./home.css";
import myApi from "../../api/api";

function Home() {
  const [APIKey, setApiKey] = useState(null);
  const [addingLocation, setAddingLocation] = useState(false);
  const [cancelMark, setCancelMark] = useState(false);
  const [successfullyPosted, setSuccessfullyPosted] = useState(null);
  const [newMark, setNewMark] = useState({
    lat: 0,
    lng: 0,
    time: null,
    comment: null,
    number: null,
  });

  useEffect(() => {
    const getGoogleApiKey = async () => {
      try {
        const key = await myApi.get("keys/googleApiKey");
        console.log("here!!");
        setApiKey(key.data);
      } catch (error) {
        console.log(error);
      }
    };
    getGoogleApiKey();
  }, []);

  const handelForm = (howMany, details) => {
    if (!howMany) {
      setCancelMark(true);
      setTimeout(() => {
        setCancelMark(false);
      }, 500);
    } else {
      setNewMark((prevState) => ({
        ...prevState,
        number: howMany,
        comment: details,
      }));
    }

    setAddingLocation(false);
  };

  useEffect(() => {
    const addLocation = async () => {
      myApi.post("/locations/newLocation", newMark).then(
        (response) => {
          setSuccessfullyPosted(response.data);
          setNewMark({});
          setTimeout(() => {
            setSuccessfullyPosted(null);
          }, 500);
        },
        (error) => {
          console.log(error.message);
        }
      );
    };

    if (!newMark.number) return;
    addLocation(newMark);
  }, [newMark]);

  const handelMapClick = (newLocationData) => {
    if (!newLocationData) {
    } else {
      setAddingLocation(true);
      setNewMark((prevState) => ({
        ...prevState,
        lat: newLocationData.lat,
        lng: newLocationData.lng,
        time: newLocationData.time,
      }));
    }
  };

  return (
    <div className="pagesContainer home BackGround ">
      <div className="homePageLeft">
        {APIKey ? (
          <Map
            handelMapClick={handelMapClick}
            cancel={cancelMark}
            updateDbMarks={successfullyPosted}
            APIKey={APIKey}
          />
        ) : null}
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
