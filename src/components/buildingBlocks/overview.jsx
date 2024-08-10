import React from "react";
import "./overviewStyle.css";

const Overview = (prop) => {
  return (
    <div>
      <div className="textContainer">
        <p className="overviewTitle">- Overview -</p>
        <p className="overviewText">{prop.text}</p>
      </div>
    </div>
  );
};

export default Overview;
