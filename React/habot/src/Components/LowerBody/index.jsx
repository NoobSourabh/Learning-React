import React from "react";
import "./styles.css";
import Arrowlogo from "../../assets/arrow";
import RightCol from "./RightCol";
import Youtube from "./Youtube";
function LowerBody() {
  return (
    <div className="flex1">
      <div className="flex2">
        <div className="left-col">
          <h2 className="hding">Ready to dive into HABOT?</h2>
          <h2 className="para">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </h2>
          <div className="btn">
            <div className="btn-text"> Sign up Today!</div>
            <Arrowlogo className="arrowlogo" />
          </div>
        </div>
        <div className="right-col">
          <RightCol />
        </div>
      </div>
      <div className="youtube">
        <Youtube/>
          </div>
    </div>
  );
}

export default LowerBody;
