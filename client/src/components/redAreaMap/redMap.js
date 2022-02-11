import React, { useState, useCallback, useRef, useEffect } from "react";
import mapStyles from "./mapStyles";
import "../../App.css";
import "../../pages/home/home.css";
import "./redMap.css";
import redAreaArr from "./redArea";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
/*import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";*/

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "90vh",
};
const libraries = ["places"];
const options = {
  styles: mapStyles,
  disableDefaultUI: false,
  zoomControl: true,
};
const center = {
  lat: 32.794241949530296,
  lng: 34.98972566204482,
};

export default function Map() {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getRedAreas = async () => {
      const arr = [];

      redAreaArr.forEach((element) => {
        geocodeByPlaceId(element.place_id)
          .then((results) => {
            arr.push({
              name: results[0].formatted_address.split(",").slice(0,1).join(""),
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            });
          })
          .catch((error) => console.error(error));
      });
      setMarkers(arr);
    };

    setTimeout(() => {
      getRedAreas();
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyApfEJizBV1MmMpqHfTZiGKrQkvCF1UFAo",
    libraries,
  });

  const onMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    console.log(lat, lng);
  };
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className="locationsMap">
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12.5}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onClick={onMapClick}
      >
        {/*markers.map((marker) => (
          <Marker
            key={marker._id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `./location.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
          ))*/}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="InfoWindow">
              <h2>
                <span role="img" aria-label="wild pig">
                  🐗
                </span>{" "}
                name
              </h2>
              <p>area</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
