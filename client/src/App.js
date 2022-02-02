import "./App.css";
import React from "react";
import {
  GoogleMap,
  useLoadScript,
  //Marker,
  // InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 32.794044,
  lng: 34.989571,
};

const libraries = ["places"];
function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyApfEJizBV1MmMpqHfTZiGKrQkvCF1UFAo",
    libraries,
  });
  if (loadError) return "error loading map";
  if (!isLoaded) return "loading maps.....";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      ></GoogleMap>
    </div>
  );
}

export default App;
