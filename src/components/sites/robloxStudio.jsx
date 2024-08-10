import React from "react";
import "./Sites.css";
import player from "../pics/yippie1.png";
import playerText from "../pics/textAbtMe.png";
import Overview from "../buildingBlocks/overview";
import Projects from "../buildingBlocks/projects";
import WaybackButton from "../buildingBlocks/waybackButton";
import Conclusion from "../buildingBlocks/conclusion";

import scr1 from "../pics/scr1.png";
import scr2 from "../pics/scr2.png";
import scr3 from "../pics/scr3.png";

function RobloxStudio() {
  return (
    <div className="robloxContainer">
      <WaybackButton />
      <div className="center">
        <div className="titleContainer">
          <p className="robloxTitle">Roblox Studio</p>
        </div>
      </div>
      <div className="robloxFun">
        <img src={player} className="player" alt="" />
        <img src={playerText} className="playerText" alt="" />
      </div>

      <div className="center">
        <div className="overviewContainer">
          <Overview
            text="My roblox studio career started only a few years ago and I have 
      been improving ever since! I unfortunately dont have many projects to show off yet
       but the page will soon be full of them."
          />
        </div>
      </div>

      <div className="center">
        <div className="projectContainerR">
          <p className="projectTitleR">- Projects -</p>
          <Projects
            title="Floor is Acid "
            pic1={scr1}
            pic2={scr2}
            pic3={scr3}
            link="https://www.roblox.com/games/17567950583/Floor-is-acid"
            text="This is the first game I developed after completing my Lua studies. Over the course of about two months, I focused on building both the user interface and the core mechanics. I’m proud of how it turned out and hope you think so too."
          />
        </div>
      </div>
      <Conclusion />
    </div>
  );
}

export default RobloxStudio;
