import React from "react";
import "./Projects.css";
import weather from "../img/weather.jpg";
import game from "../img/game.jpg";
import landing from "../img/Landing.png";
import nimble from "../img/nimble.png";

const Projects = () => {
  return (
    <div className="projects">
      <p className="text">My pet-projects.</p>
      <p className="img__wrapper">
        <a
          href="https://ospkiev.github.io/game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nimble} />
        </a>
        Vue/Nuxt
      </p>
      <p className="img__wrapper">
        <a
          href="https://ospkiev.github.io/weather_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={weather} />
        </a>
        React
      </p>
      <p className="img__wrapper">
        <a
          href="https://ospkiev.github.io/JavaScript_GameProject/build/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={game} />
        </a>
        JS/HTML5/CSS3
      </p>
    </div>
  );
};

export default Projects;
