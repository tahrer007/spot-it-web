import React, { useState, useCallback, useRef, useEffect } from "react";
import "../../App.css";
import "./redNeighborhoods.css";
import "../home/home.css";
import Map from "../../components/redAreaMap/redMap";

export default function redNeighborhoods() {
  return (
    <div className="pagesContainer home">
      <div className="homePageLeft">
        <Map />
      </div>

      <div className="homePageRight">
        <div className="homeText">
          <h3>
            these neighborhoods are the most affected by boars according to
            municipality website{" "}
          </h3>
          <div className="extrainfo">
            if you have more questions about the boars or about the services that you
            can receive from the ministry of haifa you can visit this <a href="https://www.haifa.muni.il/operation/boars/"> link </a>
          </div>
        </div>
      </div>
    </div>
  );
}
