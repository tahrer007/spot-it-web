import React from "react";
import "../../App.css";
import "../home/home.css";
import "./about.css";

function About() {
  return (
    <div className="pagesContainer home ">
      <div className="homePageLeft aboutText">
        <div className=" textBox aboutMe">
          <h1>About me </h1>

          <h3> who am? </h3>
          <p>
            my name is tahrer, I am a full stack developer who believes in
            making the world a better place by technology.
          </p>
          <h3> Where I’m From?</h3>
          <p>
            I was born and raised in Jerusalem and currently reside in Haifa{" "}
          </p>
        </div>
        <div className=" textBox aboutTheApp">
          <h1>About the App </h1>

          <h3> about the idea </h3>
          <p>
          The wild pigs of Haifa have invaded almost all the city. as a stranger, I didn't know where I can be without meeting them. 
          </p>
          <h3> how it is work ? </h3>
          <p>
           the app shows all the locations of spotted boars in the last 48 hours. as well as the most affected neighborhoods.           </p>
        </div>

        <div className=" textBox nextLevel"></div>
      </div>

      <div className="homePageRight"></div>
    </div>
  );
}
export default About;
