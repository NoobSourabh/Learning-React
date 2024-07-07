import React from "react";
import "./youtube.css";
import Checked from "../../assets/checked";
function Ytube() {
  return (
    <div className="card">
      <div className="row">
        <img className="image" src="./src/assets/ytube.jpg" />
        <div className="col">
          <div className="tab">
            <div className="ele1">Buyer</div>
            <div className="ele">Supplier</div>
          </div>
          <div className="checkpoints">
            <div className="pts">
              <Checked className="check" />
              <div>Post your requirements.</div>
            </div>
            <div className="pts">
              <Checked className="check" />
              <div>Sit back for multiple suppliers to contact you.</div>
            </div>
            <div className="pts">
              <Checked className="check" />
              <div>
                Choose among the suppliers based on the ratings and reviews.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ytube;
