import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbarLeft">
          <div className="navbarLogo"> logo</div>
          <Link className="navbarLink navbarBtn" to="/">
            Homepage
          </Link>
        </div>
        <Link className="navbarLink navbarBtn" to="/">
          Red neighborhoods
        </Link>
        <Link className="navbarLink navbarBtn" to="/about">
          About
        </Link>
        <Link className="navbarLink navbarBtn" to="/help">
          Help
        </Link>
        <Link className="navbarLink navbarBtn" to="/login">
          Log in
        </Link>
      </header>
    );
  }
}
