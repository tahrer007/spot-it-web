import React from "react";
import "./homeText.css";

export default function HomeText() {
  return (
    <div className="homeText">
      <h3> How its work ? </h3>
      <div className="list">
        <ol>
          <li>Click on the map at the wanted location </li>
          <li>Fill few information </li>
          <li>Click send </li>
        </ol>
      </div>

      <h3> Thats it. every user posted , thanks to you </h3>
    </div>
  );
}
