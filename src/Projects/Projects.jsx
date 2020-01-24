import React from "react";
import "./Projects.css";
import weather from "../img/weather.jpg";
import game from "../img/game.jpg";
import landing from "../img/Landing.png";

const Projects = () => {
  return (
    <div className="projects">
      <p className="text">My pet-projects.</p>
      <p className="img__wrapper">
        <a
          href="https://ospkiev.github.io/Landing/build/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={landing} />
        </a>
        Used HTML5/CSS3{" "}
      </p>
      <p className="img__wrapper">
        <a
          href="https://ospkiev.github.io/test_weather/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={weather} />
        </a>
        Get Weather , a single page application was developed via React/Redux
      </p>
      <p className="img__wrapper">
        <a
          href="https://ospkiev.github.io/JavaScript_GameProject/build/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={game} />
        </a>
        Used JS/HTML5/CSS3
      </p>
    </div>
  );
};

export default Projects;
