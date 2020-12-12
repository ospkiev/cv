import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <p className='about__me'>My name is Pavel Karpenko, I'm  web-developer with a strong interest in creating Web App based on JS/React/Redux.
                I'm always looking forward to learning new technologies and improving already learned ones.
                I began with HTML5/CSS3 and JavaScript basics, and moved to React/Redux ,
                I have 7 monthes of experience in commercial projects,
                worked in team via SCRUM with backend, PM, QA.
                Technology I use in my work : JS,React,Redux,HTML5,CSS3,REST,Webpack,Material/Semantic,Photoshop,Figma,Gulp/SASS, Git,adaptive and responsive layout.
                </p>
            <p className='skills'> <span>Skills:</span> JavaScript, React, Redux, Material/Semantic, CSS3, HTML5, SASS/Gulp, Webpack, Git, Agile, Scrum.
            </p>
            <p className='experience'> <span> Work experience.<br /></span>
                1.Upscale Academy (Kyiv)<br />
                Front-end developer, Dec2018 – Now.<br />
                Responsibilities : create web sites ,single page applications .<br />
                2. GIMedia (Kyiv)<br />
                Technical support engineer, Jan 2017 – Aug 2018.<br />
                Responsibilities : provide software and hardware for Digital Signage Solutions
                (manage and control video/audio content remotely in advertising industry).<br />
                3.National Technical University of Ukraine 'Kyiv Polytechnic Institute' (Kyiv)<br />
                Engineer of Electronic faculty, Sept 2012 – Oct 2015.<br />
                Responsibilities : search of materials for solar panels (atomic force microscopy).
            </p>
            <p className='education'> <span> Education.</span>
                2009-2012 National Technical University of Ukraine 'Kyiv Polytechnic Institute', Bachelor of Material Science.
            </p>
            <p className='english'> <span> Foreign language :</span> English  IELTS – 5,5 .
            </p>
            <p>
                <span> Hobby :</span>  snowboarding, books, movie.
            </p>

        </div>
    );
};

export default About;