import React, { useState } from "react";
import "../../pages/home/home.css";
import "./newLocationInput.css"

export default function NewLocationInput({ handelForm }) {
  const [howMany, setHowMany] = useState("one");
  const [details, setDetails] = useState("");

  const handleRadioChange = (event) => {
    setHowMany(event.target.value);
  };
  const handleTextChange = (event) => {
    setDetails(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handelForm(howMany, details);
  };
  const cancel = (e) => handelForm(false, false);

  return (
    <div className="homeText form">
      <h3> Please add some details :</h3>
      <form onSubmit={handleSubmit}>
        
            <h5>how many boars did you spot? </h5>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="one"
                  onChange={handleRadioChange}
                  checked={howMany === "one"}
                />
                one
              </label>
              <label>
                <input
                  type="radio"
                  value="2-5"
                  onChange={handleRadioChange}
                  checked={howMany === "2-5"}
                />
                2-5
              </label>
              <label>
                <input
                  type="radio"
                  value="more than 5"
                  onChange={handleRadioChange}
                  checked={howMany === "more than 5"}
                />
                More than 5
              </label>
            </div>
         

        <h5>
          {" "}
          Extra details? <span>(optional)</span>{" "}
        </h5>
        <div className="extraDetails">
          <label>
            <textarea value={details} onChange={handleTextChange} rows="4"  style={{resize: "none"}} />
          </label>
        </div>
        <div className="buttonsBox">
          <button type="submit" className="btn">Submit</button>
          <button type="reset"  className="btn" onClick={() => cancel()}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
