import React from 'react';
import './Projects.css';
import chat from '../img/chat.jpg';
import weather from '../img/weather.jpg';
import game from '../img/game.jpg';
import site from '../img/site.jpg';
import landing from '../img/Landing.png';

const Projects = () => {
    return (
        <div className='projects'>
            <p className='text'> Please follow the links below to find out more about my projects.</p>
            <p className='img__wrapper' ><a href="https://b8-chat.goit.co.ua/" target='_blank' rel='noopener noreferrer'> <img src={chat} /></a> This chat was created on React/Redux/Node.js</p>
            <p className='img__wrapper' ><a href="https://ospkiev.github.io/Landing/build/index.html" target='_blank' rel='noopener noreferrer'> <img src={landing} /></a>Used HTML5/CSS3 </p>
            <p className='img__wrapper' ><a href="https://ospkiev.github.io/test_weather/#/" target='_blank' rel='noopener noreferrer'> <img src={weather} /></a> Get Weather , a single page application was developed via React/Redux</p>
            <p className='img__wrapper' ><a href="https://ospkiev.github.io/JavaScript_GameProject/build/index.html" target='_blank' rel='noopener noreferrer'> <img src={game} /></a>Used JS/HTML5/CSS3</p>
            {/* <p className='img__wrapper' ><a href="https://ospkiev.github.io/Bootcamp8/html-css/module1-2/homework10/build/index.html" target='_blank' rel='noopener noreferrer'> <img src={site} /></a>Used HTML5/CSS3 </p> */}

        </div>
    );
};

export default Projects;