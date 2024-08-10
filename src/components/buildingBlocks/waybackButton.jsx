import React from "react";
import { useNavigate } from "react-router-dom";
import "./wayback.css";

const WaybackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wayback" onClick={() => navigate("/")}>
        <p>Go back</p>
      </div>
    </>
  );
};

export default WaybackButton;
