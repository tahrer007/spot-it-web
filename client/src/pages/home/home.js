import React, { useState, useEffect } from "react";
import Map from "../../components/LocationsMap/map";
import NewLocationInput from "../../components/newLocationInput/newLocationInput";
import HomeText from "../../components/homeText/homeText";
import "../../App.css";
import "./home.css";
import myApi from "../../api/api";

function Home() {
  const [addingLocation, setAddingLocation] = useState(false);
  const [formData, setFormData] = useState(null);
  const [cancelMark, setCancelMark] = useState(false);
  const [newMark, setNewMark] = useState({
    lat: 0,
    lng: 0,
    time: null,
    comment: null,
    number: null,
  });

  
  const handelForm = (howMany, details) => {
    if (!howMany) {
      console.log("cancel");
    } else {
      setNewMark((prevState) => ({
        ...prevState,
        number: howMany,
        comment: details,
      }));
    }
  };

  useEffect(() => {
    const addLocation = async () => {
      console.log(newMark);
      myApi.post("/locations/addLocation", newMark).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    };
  
    if (!newMark.number) return;
    addLocation(newMark);
  }, [newMark]);

  const handelMapClick = (newLocationData) => {
    setAddingLocation(true);
    setNewMark((prevState) => ({
      ...prevState,
      lat: newLocationData.lat,
      lng: newLocationData.lng,
      time: newLocationData.time,
    }));
    console.log(newLocationData);
  };

  return (
    <div className="pagesContainer home">
      <div className="homePageRight">
        <Map handelMapClick={handelMapClick} />
      </div>

      <div className="homePageLeft">
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
