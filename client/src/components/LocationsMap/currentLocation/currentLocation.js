import React from "react";
import "./currentLocation.css"

export default function Locate({ panTo }) {
  const getCurrentLocation = () => {
    /*navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.log(error.message)
    );*/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(pos);
          panTo(pos);
        },
        (error) => {
          console.log(error.message);
          // handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      console.log("Browser doesn't support Geolocation");
      // Browser doesn't support Geolocation
      // handleLocationError(false, infoWindow, map.getCenter());
    }
  };

  return (
    <div className="locate" onClick={() => getCurrentLocation()}>
    </div>
  );
}
