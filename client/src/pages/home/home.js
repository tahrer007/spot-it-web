import React ,{useState,useEffect} from "react";
import Map from "../../components/LocationsMap/map";
import NewLocationInput from "../../components/newLocationInput/newLocationInput";
import HomeText from "../../components/homeText/homeText"
import "../../App.css";
import "./home.css"

 function Home() {
   const [newLocation,setNewLocation] =useState(true);
   const [formData,setFormData] = useState(null);
   const [cancelMark,setCancelMark] =useState(false);
   const [newMark,setNewMark] =useState({});

   


  return (
    <div className="pagesContainer home">
      
      <div className="homePageRight">
      <Map />
      </div>
     
      <div className="homePageLeft">
           {newLocation?<NewLocationInput/> : <HomeText/> } 
      </div>
    </div>
  );
}
export default Home ;