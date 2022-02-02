
import './App.css';
import React from 'react';
import {
  GoogleMap,
 useLoadScript,
  //Marker,
 // InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};
function App() {
  return <div>

    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

    </GoogleMap>
  </div>
}

export default App;
