import React from "react";
import "./projectsStyle.css";
import Carousel from "./carousel";

const Projects = (part) => {
  const slides = [part.pic1, part.pic2, part.pic3];
  return (
    <div>
      <div className="projectContainer">
        <div className="projectInfo">
          <p className="projectTitleComp">{part.title}</p>
          <p className="projectText">{part.text}</p>
          <p className="projectLinker">
            Link to the <a href={part.link}>Project</a>
          </p>
        </div>
        <Carousel slides={slides} />
        <div className="projectDivAnim"></div>
      </div>
    </div>
  );
};

export default Projects;
