import React, { useState } from "react";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
function Box() {
  const [value, setValue] = useState("www.google.com");
  return (
    <div className="box-container">
      <div className="card">
        <div className="qr-card">IMG</div>
        <div className="input-card">
            <input
              className="input-box"
              type="text"
              placeholder="Enter Link"
              value={value}
            />
          <SearchRoundedIcon className='search-icon'/>
        </div>
      </div>
    </div>
  );
}

export default Box;
