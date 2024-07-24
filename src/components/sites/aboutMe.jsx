import React, { useState } from "react";
import "./Sites.css";
import reactLogo from "../pics/reactLogo.png";
import blenderLogo from "../pics/BlenderLogo.png";
import robloxStudioLogo from "../pics/robloxStud.png";

function AboutMe() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  function toggleShow(varient) {
    if (varient === 1) {
      setShow(true);
    } else if (varient === 2) {
      setShow2(true);
    } else if (varient === 3) {
      setShow3(true);
    }
  }

  function toggleClose(varient) {
    if (varient === 1) {
      setShow(false);
    } else if (varient === 2) {
      setShow2(false);
    } else if (varient === 3) {
      setShow3(false);
    }
  }

  console.log(show, show2, show3);

  return (
    <div className="aboutMeContainer">
      <div className="aboutMeTitle">
        <p className="abtMeTitle">
          Hi, my name is <span>Dženis Fejzović</span>
        </p>
        <p className="abtMeText">
          a passionate web developer with over 2 years of experience. I
          specialize in React, JavaScript, HTML, CSS, Lua, and Node.js.
        </p>
        <p className="abtMeText2">
          I began my programming journey in 2022, starting with Lua due to my
          interest in Roblox and my sheer determination to create something I
          could call my own. Later, I expanded my skills by learning HTML, CSS,
          JavaScript, React.js, and even Node.js . I go by the alias "Zergo"
          online, and you can usually find me on Discord with the username
          "thezergo".
        </p>

        <p className="sectionText">
          Choose from the sections on the left to discover areas that interest
          you.
        </p>
      </div>
      <div className="imageHolder">
        <div className="robloxImage">
          <img
            src={robloxStudioLogo}
            alt=""
            className={show ? "show1" : "hide1"}
          />
        </div>
        <div className="webDevImage">
          <img src={reactLogo} alt="" className={show2 ? "show2" : "hide2"} />
        </div>
        <div className="3DmodellingImage">
          <img src={blenderLogo} alt="" className={show3 ? "show3" : "hide3"} />
        </div>
      </div>

      <div className="sectionButtons">
        <button
          className="buttonR"
          onMouseEnter={() => toggleShow(1)}
          onMouseLeave={() => toggleClose(1)}
        >
          Roblox Studio
        </button>
        <button
          className="buttonW"
          onMouseEnter={() => toggleShow(2)}
          onMouseLeave={() => toggleClose(2)}
        >
          Web Development
        </button>
        <button
          className="buttonT"
          onMouseEnter={() => toggleShow(3)}
          onMouseLeave={() => toggleClose(3)}
        >
          3D modelling
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
