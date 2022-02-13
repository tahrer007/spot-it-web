import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
//import { Redirect } from 'react-router-dom';

export default  function Navbar () {
  //const navigate = useNavigate();

   const handleClick = ()=> {
   console.log("route to about page")
  }
 
    return (
      <header className="navbar">
        <div className="navbarLeft">
        <div className="navbarLogo" onClick={() =>  handleClick()  }>
          </div>
        </div>
        <Link className="navbarLink navbarBtn" to="/Locations">
          Locations
        </Link>
        <Link className="navbarLink navbarBtn" to="/Redneighborhoods">
         Red-Neighborhoods
        </Link>
        <Link className="navbarLink navbarBtn" to="/about">
          About
        </Link>
       {/* <Link className="navbarLink navbarBtn" to="/help">
          Help
        </Link>
        <Link className="navbarLink navbarBtn" to="/login">
          Log in
  </Link>*/}
      </header>
    );
  
}
