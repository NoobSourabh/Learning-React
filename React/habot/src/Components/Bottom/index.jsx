import React from "react";
import "./styles.css";
import Role from "../../assets/role";
import Document from "../../assets/document";
import Contact from "../../assets/contact";
import Review from "../../assets/review";
import Profile from "../../assets/profile";
import Parties from "../../assets/parties";
function BottomPage() {
  return (
    <div className="bottom">
      <div className="col divv-body">
        <div className="top-head">How it works?</div>
        <div className="content">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </div>
        <div className="matrix-body">
          <div className="matrix-row">
            <div className="matrix-col divv blue">
              <Role />
              <div className="matrix-body">Select Your Role and Sign Up</div>
            </div>
            <div className="matrix-col divv">
              <Profile />
              <div className="matrix-body">Select Your Role and Sign Up</div>
            </div>
          </div>
          <div className="matrix-row">
            <div className="matrix-col divv">
              <Document />
              <div className="matrix-body">Select Your Role and Sign Up</div>
            </div>
            <div className="matrix-col divv blue">
              <Contact />
              <div className="matrix-body">Select Your Role and Sign Up</div>
            </div>
          </div>
          <div>
            <div className="matrix-col divv blue">
              <Review />
              <div className="matrix-body">Select Your Role and Sign Up</div>
            </div>
            <div className="matrix-col divv">
              <Parties />
              <div className="matrix-body">Select Your Role and Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomPage;
