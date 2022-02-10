import React from "react";
import "./homeText.css"


export default function HomeText() {
  return (
    <div className="homeText">
        <h3> do you wanna build a snow man ??? </h3>   
        <button className="receiveNotifcations" onClick={()=>console.log("do you wanna build a snowman")}> yes</button>
        
             
    </div>
  );
}
