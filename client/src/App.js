import React from "react";
import "./App.css";
import Map from "./components/googleMap/map";

export default function App() {
  return (
    <div>
      <h1>
        Pumbaa{" "}
        <span role="img" aria-label="tent">
          🐗
        </span>
      </h1>

      <Map />
    </div>
  );
}
