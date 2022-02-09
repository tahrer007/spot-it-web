import React from "react";
import "./currentLocation.css";

export default function Locate({ panTo }) {

  const getCurrentLocation =  () => {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  
    const success = (pos) => {
      const crd = {
              lat : pos.coords.latitude ,
              lng : pos.coords.longitude ,

      }

      console.log(crd);
      panTo(crd);
    };
  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    navigator.geolocation.getCurrentPosition(success, error, options);

  };

  

  return <div className="locate" onClick={() => getCurrentLocation()}></div>;
}
