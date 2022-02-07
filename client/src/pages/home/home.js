import React ,{useState,useEffect} from "react";
import Map from "../../components/LocationsMap/map";
import NewLocationInput from "../../components/newLocationInput/newLocationInput";
import "../../App.css";
import "./home.css"

 function Home() {
   const [newLocation,setNewLocation] =useState(false);
   
  return (
    <div className="pagesContainer home">
      
      <div className="homePageRight">
      <Map />
      </div>
     
      <div className="homePageLeft">
            <NewLocationInput/>
      </div>
    </div>
  );
}
export default Home ;