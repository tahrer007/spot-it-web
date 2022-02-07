import React, { useState, useEffect } from "react";
import Map from "../../components/LocationsMap/map";
import NewLocationInput from "../../components/newLocationInput/newLocationInput";
import HomeText from "../../components/homeText/homeText";
import "../../App.css";
import "./home.css";

function Home() {
  const [addingLocation, setAddingLocation] = useState(true);
  const [formData, setFormData] = useState(null);
  const [cancelMark, setCancelMark] = useState(false);
  const [newMark, setNewMark] = useState({});

  const handelForm = (howMany, details) => {
    if (!howMany) {
      console.log("cancel");
    } else {
      console.log(howMany, details);
    }
  };

  const handelMapClick = (newLocationData) => {
    console.log(newLocationData);
  };

  return (
    <div className="pagesContainer home">
      <div className="homePageRight">
        <Map  handelMapClick={handelMapClick}/>
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
