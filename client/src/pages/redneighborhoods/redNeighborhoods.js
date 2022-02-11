import React, { useState, useCallback, useRef, useEffect } from "react";
import "../../App.css";
import "./redNeighborhoods.css";
import Map from "../../components/redAreaMap/redMap"

export default function redNeighborhoods() {
  
  return (
    <div className="pagesContainer home">
      <div className="homePageLeft">
            
      <Map/>




      </div>

      <div className="homePageRight">right</div>
    </div>
  );
}
