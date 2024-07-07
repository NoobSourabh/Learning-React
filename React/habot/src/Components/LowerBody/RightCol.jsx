import React from "react";
import "./rightcol.css";
function RightCol() {
  return (
    <div className="right-col">
      <div className="flex-col">
        <div className="flex-rows">
          <div className="btns">Abu Dhabi</div>
          <div className="btns">Dubai</div>
        </div>
        <div className="flex-rows">
          <div className="btns">Sharjah & Ajman</div>
          <div className="btns">Fujairah</div>
        </div>
        <div className="flex-rows">
          <div className="btns">Ras Al Khaimah</div>
          <div className="btns">Umm Al Quwain</div>
        </div>
      </div>
    </div>
  );
}

export default RightCol;
