import React from "react";
import "./styles.css";
import Down from "../../assets/down";
// import
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="habotlogo" src="./src/assets/habot-logo.jpg" />
      </div>
      <div className="menu">
        <p>Find Suppliers</p>
        <p className="service">
          Find Service Tags
          <Down className="down-logo" />
        </p>
        <p className="login-btn">Login/Sign Up</p>
      </div>
    </div>
  );
}

export default Header;
