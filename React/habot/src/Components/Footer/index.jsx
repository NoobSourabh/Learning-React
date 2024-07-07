import React from "react";
import "./styles.css";
import Habotlogo from "../../assets/habotlogo";
import Socialmedia from "../../assets/socialmedia";

function Footer() {
  return (
    <div className="footer-card">
      <div className="row-body">
        <div className="col-body">
          <Habotlogo className="habotlogo" />
          <div className="lower-title">© R Singhania</div>
        </div>
        <div className="col-body  mid">
          <div className="col1">
            <div className="texthead">Company</div>
            <div className="text">About</div>
            <div className="text">FAQ</div>
          </div>
        </div>
        <div className="col-body mid">
          <div className="col1">
            <div className="texthead">Terms</div>
            <div className="text">Data privacy</div>
            <div className="text">Terms</div>
            <div className="text">Accessibility</div>
          </div>
        </div>
        <div className="col-body mid">
          <div className="col1">
            <div className="texthead">Related</div>
            <div className="text">Find Buyer</div>
            <div className="text">Feedback</div>
          </div>
        </div>
        <div className="col-body"></div>
        <div className="col-body">
          <Socialmedia className="social" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
