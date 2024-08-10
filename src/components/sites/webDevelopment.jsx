import React from "react";
import "./Sites.css";
import Overview from "../buildingBlocks/overview";
import Projects from "../buildingBlocks/projects";
import WaybackButton from "../buildingBlocks/waybackButton";
import Conclusion from "../buildingBlocks/conclusion";

import scr1 from "../pics/scr1.1.png";
import scr2 from "../pics/scr1.2.png";
import scr3 from "../pics/scr1.3.png";

import scr4 from "../pics/scr2.1.png";
import scr5 from "../pics/scr2.2.png";
import scr6 from "../pics/scr2.3.png";

import scr7 from "../pics/scr3.1.png";
import scr8 from "../pics/scr3.2.png";
import scr9 from "../pics/scr3.3.png";

import scr10 from "../pics/scr4.1.png";
import scr11 from "../pics/scr4.2.png";
import scr12 from "../pics/scr4.3.png";

function WebDevelopment() {
  const projects = [
    {
      title: "Covid App",
      pic1: scr1,
      pic2: scr2,
      pic3: scr3,
      link: "https://covidapp-umber.vercel.app/",
      text: "In this team project, where I served as the team leader, I guided the development of a COVID-19 app using React. My focus was on ensuring the website's usability and design, helping the team create a user-friendly and visually appealing interface.",
    },
    {
      title: "Weather App",
      pic1: scr4,
      pic2: scr5,
      pic3: scr6,
      link: "https://weather-project-seven-ruby.vercel.app/",
      text: "This project might be simple, but I’m really proud of it. The design is sleek and visually pleasing, and it’s one of my first projects where I used a real API for data fetching. The experience taught me a lot about integrating APIs and handling data in React.",
    },
    {
      title: "Ai Quiz ",
      pic1: scr7,
      pic2: scr8,
      pic3: scr9,
      link: "https://aiquizproject.vercel.app/",
      text: "This project bummed me out a bit. I couldn't get the AI to generate non-repetitive text, and I was hoping the issue was with my code, but it turned out to be the AI model instead. Still, it's okay— enjoy the proof of concept anyway!",
    },
    {
      title: "Anime App ",
      pic1: scr10,
      pic2: scr11,
      pic3: scr12,
      link: "https://anime-app-two-ochre.vercel.app/",
      text: "This was another team project but this time I wasn't the team leader. I was tasked with working on the anime and manga sections of the site, and I completed them. I feel the project was a lot of fun, and it turned out great in the end.",
    },
  ];

  return (
    <div className="robloxContainer">
      <WaybackButton />
      <div className="center">
        <div className="titleContainer">
          <p className="robloxTitle">Web Development</p>
        </div>
      </div>

      <div className="center">
        <div className="overviewContainer">
          <Overview text="I started developing in HTML,CSS,Javascript and React. I mainly use React these days, but im still proficient in Javascript. I have plenty of projects and proof of concepts so i hope atleast one gives you a good impression." />
        </div>
      </div>

      <div className="center">
        <div className="projectContainerR">
          <p className="projectTitleR">- Projects -</p>
          {projects.map((part, index) => (
            <Projects
              key={index}
              title={part.title}
              pic1={part.pic1}
              pic2={part.pic2}
              pic3={part.pic3}
              link={part.link}
              text={part.text}
            />
          ))}
        </div>
      </div>

      <Conclusion />
    </div>
  );
}

export default WebDevelopment;
