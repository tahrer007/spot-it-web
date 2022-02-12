import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home";
import Help from "./pages/help/help";
import About from "./pages/about/about";
import ErrorPage from "./pages/errorPage/errorPage";
import Login from "./pages/login/login";
import RedNeighborhoods from "./pages/redneighborhoods/redNeighborhoods";

function App() {
  return (
    <div  className="appContainer"  >
      <div id="info"></div>
      
      <BrowserRouter>
           <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Locations" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Redneighborhoods" element={<RedNeighborhoods />} />
          <Route path="/Login" element={<Login />} />
         
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}
export default App;
