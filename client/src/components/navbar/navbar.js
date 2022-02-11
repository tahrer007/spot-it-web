import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbarLeft">
          <div className="navbarLogo"></div>
        </div>
        <Link className="navbarLink navbarBtn" to="/">
          Homepage
        </Link>
        <Link className="navbarLink navbarBtn" to="/Redneighborhoods">
          Red neighborhoods
        </Link>
        <Link className="navbarLink navbarBtn" to="/about">
          About
        </Link>
        <Link className="navbarLink navbarBtn" to="/help">
          Help
        </Link>
        {/*<Link className="navbarLink navbarBtn" to="/login">
          Log in
  </Link>*/}
      </header>
    );
  }
}
