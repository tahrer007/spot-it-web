import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home";
import Help from "./pages/help/help";
import About from "./pages/about/about";
import ErrorPage from "./pages/errorPage/errorPage";

function App() {
  return (
    <div className="appContainer">
     
      <Router>
           <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
