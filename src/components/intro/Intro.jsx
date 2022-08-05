import React from "react";

import Github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import "./Intro.css";
import FloatingDev from "../FloatingDev/FloatingDev";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Aamir Sohail</span>
          <span>
            FullStack Developer with high level of experience in web designing
            and development, producing the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDev img={crown} txt1={"Web"} txt2={"Developer"} />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDev img={thumbup} txt1={"programming"} txt2={"Awards"} />
        </div>
        <div className="blur" style={{ background: "rgb(238,210,255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f59f",
            top: "17rem",
            width: "22rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
