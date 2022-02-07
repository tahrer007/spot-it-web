import React, { useState, useEffect } from "react";
import "./newLocationInput.css";

export default function NewLocationInput() {
  const [howMany, setHowMany] = useState("");
  const [details, setDetails] = useState("");

  const handleRadioChange = (event) => {
    setHowMany(event.target.value);
    console.log(event.target.value);
  };
  const handleTextChange = (event) => {
    setDetails(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };
  const cancel = () => {
    console.log("cancel");
  };
  return (
    <div className="newLocationBox">
      <h2> Please add some details :</h2>
      <form onSubmit={handleSubmit}>
        <strong>how many boars did you spot? </strong>
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
        <strong>
          {" "}
          Extra details? <span>(optional)</span>{" "}
        </strong>
        <div className="extraDetails">
          <label>
            <textarea value={details} onChange={handleTextChange} />
          </label>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => cancel()}>
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
