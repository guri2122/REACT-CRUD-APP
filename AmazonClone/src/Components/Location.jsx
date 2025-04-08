
import React, { useState } from "react";
import "./Location.css";

const Location = () => {
  const [pincode, setPincode] = useState("");

  const handleApply = () => {
    alert(`Pincode applied: ${pincode}`);
  };
 
  return (
    <div className="location-selector">
      <div className="header">
        <span>Choose your location</span>
        <button className="close-btn">&#x2715;</button>
      </div> <br />
      <p>Select a delivery location to see product availability and delivery options</p> <br /><br />
      <button className="sign-in-btn">Sign in to see your addresses</button>
      <div className="pincode-input">
        <input
          type="text"
          placeholder="Enter an Indian pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <button onClick={handleApply} className="apply-btn">Apply</button>
      </div>
    </div>
  );
};

export default Location;