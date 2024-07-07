import React from "react";
import "./styles.css";
import Suitcase from "../../assets/suitcase";
import Gps from "../../assets/location";
function Body() {
  return (
    <div className="background-image">
      <div className="main-body">
        <div className="h-div">
          <h1 className="centered-h1">Are You a Supplier?</h1>
          <h1 className="centered-h2">Explore Matching Opportunities.</h1>
        </div>
        <div className="input-card">
          <div className="inputs">
            <Suitcase />
            <input
              className="input"
              type="text"
              placeholder="Search your required service here"
            />
          </div>

          <div className="inputs">
            <Gps />
            <input
              className="input"
              type="text"
              placeholder="Search your desired location here"
            />
          </div>
          <div className="search-btn">Search</div>
        </div>
        <div className="h-foot">
          <h2 className="h-bold">Are you a buyer?</h2>
          <h2 className="h-simple">
            Click here if you are looking to post a requirements
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Body;
