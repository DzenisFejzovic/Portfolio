import React from "react";
import "./conclusionStyle.css";
import discord from "../pics/discord.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Conclusion = () => {
  return (
    <>
      <div className="conclusion">
        <div className="conclusionDiv">
          <p className="conclusionTitle"> - Conclusion - </p>
          <div className="center">
            <p className="conclusionText">
              If you're interested in commissions, please feel free to contact
              me on Discord.
            </p>
          </div>
        </div>
        <div className="center">
          <div className="infoHolder">
            <a
              href="https://github.com/DzenisFejzovic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ fontSize: 100 }} />
            </a>
            <a
              href="https://discord.com/users/740424829718626339"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={discord}
                alt="Discord"
                style={{ width: "100px", height: "100px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dzenis-fejzovic-ba0aa5316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 100 }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conclusion;
