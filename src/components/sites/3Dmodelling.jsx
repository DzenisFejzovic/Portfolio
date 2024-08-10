import React from "react";
import WaybackButton from "../buildingBlocks/waybackButton";
import Construction from "../pics/under-construction.png";
import "./Sites.css";

function ThreeDmodelling() {
  return (
    <>
      <div>
        <WaybackButton />
        <div className="center">
          <img className="construction" src={Construction} alt="" />
        </div>
      </div>
    </>
  );
}

export default ThreeDmodelling;
