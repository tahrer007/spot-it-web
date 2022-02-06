import React from "react";
import Map from "../../components/LocationsMap/map";
import "../../App.css"

 function Home() {
  return (
    <div className="pagesContainer home">
      <Map />
      <div className="homePageLeft"></div>
    </div>
  );
}
export default Home ;