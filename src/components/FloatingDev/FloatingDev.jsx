import React from "react";

import "./FloatingDev.css";
function FloatingDev({ img, txt1, txt2 }) {
  return (
    <div className="floatingdev">
      <img src={img} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
}

export default FloatingDev;
