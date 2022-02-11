import React, { useState, useCallback, useRef, useEffect } from "react";
import myApi from "../../api/api";
import mapStyles from "./mapStyles";
import isInsideHaifa from "../../scripts/insideHaifa";
import HaifaCoords from "../../scripts/haifaCoords";
import "../../App.css";
import "../../pages/home/home.css";
import "./redMap.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polygon,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "90vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 32.794241949530296,
  lng: 34.98972566204482,
};

export default function Map({ handelMapClick, updateDbMarks, cancel }) {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [newMark, setNewMark] = useState({});
  const [localMark, setLocalMark] = useState(false);

  const intialMarks = (dbMarks) => {
    setMarkers(dbMarks);
  };

  useEffect(() => {
    const getALLlocations = async () => {
      try {
        const { data } = await myApi.get("locations/getLocations");
        intialMarks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getALLlocations();
  }, []);

  useEffect(() => {
    if (!updateDbMarks) return;
    setMarkers((current) => [...current, updateDbMarks]);
    setLocalMark(false);
  }, [updateDbMarks]);

  useEffect(() => {
    if (!cancel) return;
    setLocalMark(false);
  }, [cancel]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyApfEJizBV1MmMpqHfTZiGKrQkvCF1UFAo",
    libraries,
  });

  const onMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng(); 
    

    if (!isInsideHaifa({ lat, lng })) {
      handelMapClick(false);
    } else {
      const newLocation = {
        lat: lat,
        lng: lng,
        time: new Date(),
      };
      setNewMark(newLocation);
      setLocalMark(true);
      handelMapClick(newLocation);
    }
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
        <Polygon
          onClick={onMapClick}
          paths={HaifaCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
        />
        {localMark ? (
          <Marker
            position={{ lat: newMark.lat, lng: newMark.lng }}
            onClick={() => {
              setSelected(newMark);
            }}
            icon={{
              url: `./local.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ) : null}

        {markers.map((marker) => (
          <Marker
            key={marker._id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `./pumbaa.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

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
                Alert
              </h2>
              <p>
                Spotted {formatRelative(Date.parse(selected.time), new Date())}
                <br />
                number : {selected.number} <br />
                {selected.comment ? "comment :" + selected.comment : null}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <div className="errorMessage"></div>
    </div>
  );
}
