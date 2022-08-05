import React from "react";

import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";

import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          <br />
          reprehenderit ducimus odio aliquam tenetur.
        </span>
        <a href="!#" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "15rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Backend"}
            detail={"Mongodb Nodejs Express Mongoose"}
          />
        </div>
        <div style={{ top: "11rem", left: "-4rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Developer"}
            detail={"Html Css JavaScript React"}
          />
        </div>
        <div style={{ top: "19rem", left: "13rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch Phototshop Adobe xd"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
