import React from "react";

import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import "./Works.css";

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for all these</span>
        <span>Brans & clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          <br />
          reprehenderit ducimus odio aliquam tenetur.
          <br />
          reprehenderit ducimus odio aliquam tenetur tenetur.
          <br />
          reprehenderit ducimus odio aliquam.
        </span>
        <a href="!#" download>
          <button className="button s-button">Hire me</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side */}
      <div className="w-right">
        <div className="w-maincircle">
          <div className="w-seccircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Fiver} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-seccircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
    </div>
  );
}

export default Works;
