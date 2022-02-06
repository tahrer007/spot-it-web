import React from "react";
import Map from "../googleMap/map";

 function Home() {
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
export default Home ;