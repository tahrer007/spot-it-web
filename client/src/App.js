import "./App.css";
import mapStyles from "./mapStyles"
import React ,{useState} from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  // InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "50vh",
  width: "50vw",
};
const options = {
  styles : mapStyles,
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
    googleMapsApiKey:  "AIzaSyApfEJizBV1MmMpqHfTZiGKrQkvCF1UFAo",
    libraries,
  });
  const [markers,setMarkers]=useState([]) ;
  /*const onMapClick = React.useCallback((e) => {

   
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
    console.log(markers);
  }, []);*/
  if (loadError) return "error loading map";
  if (!isLoaded) return "loading maps.....";
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options ={options}
        onClick={(event)=>{
          console.log(event.latLng.lat(),event.latLng.lng())
          setMarkers((current)=>[
            ...current,
            {
              lat :event.latLng.lat(),
              lng :event.latLng.lng(),
              time:new Date()
            }
          ])
        }}
      >
{markers.map((marker) => (
          <Marker
          key ={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `/Pumbaa.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}
 

        
      </GoogleMap>
    </div>
  );
}

export default App;
