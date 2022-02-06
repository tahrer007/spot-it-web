import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/home";
import Help from "./components/help/help";
import About from "./components/about/about";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
        {/*<Route component={NoMatch} /> */}
      </Routes>
    </div>
  );
}
