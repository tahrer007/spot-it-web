import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home";
//import Help from "./pages/help/Help";
import About from "./pages/about/About";
import ErrorPage from "./pages/errorPage/ErrorPage";
//import Login from "./pages/login/Login";
import RedNeighborhoods from "./pages/redneighborhoods/RedNeighborhoods";

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
         { /*<Route path="/Help" element={<Help />} />*/}
          <Route path="/Redneighborhoods" element={<RedNeighborhoods />} />
          {/*<Route path="/Login" element={<Login />} />*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}
export default App;
