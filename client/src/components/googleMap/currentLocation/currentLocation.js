import React from "react";

export default function Locate({ panTo }) {
  const getCurrentLocation = () => {
      
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => (console.log(error.message))
    );
  };

  return (
    <button className="locate" onClick={() => getCurrentLocation()}>
      current location
    </button>
  );
}
