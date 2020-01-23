import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <p className="about__me">
        My name is Pavel Karpenko, I'm web-developer with a strong interest in
        creating Web App based on React, Vue. I'm always looking forward to
        learning new technologies and improving already learned ones. I began
        with HTML5/CSS3 and React/Redux ,now I work with Vue/Nuxt.
      </p>
      <p className="skills">
        <span>Skills:</span>React/Redux, Vue/Nuxt, Bootstrap, Material UI,
        Vuetify.
      </p>
      <p className="experience">
        <span>
          Work experience.
          <br />
        </span>
        1.SelectSpecs (Kyiv, London)
        <a href="https://www.selectspecs.com/"> https://www.selectspecs.com/</a>
        <br />
        Front-end developer, June2019 - Now.
        <br />
        2.Upscale Academy (Kyiv)
        <a href="https://www.https://upscaleacademy.com/">
          https://upscaleacademy.com/
        </a>
        <br />
        Front-end developer, Dec2018 – June2019.
        <br />
        Responsibilities : create web sites ,single page applications .<br />
        3. GIMedia (Kyiv)
        <br />
        Support engineer, Jan 2017 – Aug 2018.
        <br />
        Responsibilities : provide software and hardware for Digital Signage
        Solutions (manage and control video/audio content remotely in
        advertising industry).
        <br />
        4.National Technical University of Ukraine 'Kyiv Polytechnic Institute'
        (Kyiv)
        <br />
        Engineer of Electronic faculty, Sept 2012 – Oct 2015.
        <br />
        Responsibilities : search of materials for solar panels (atomic force
        microscopy).
      </p>
      <p className="education">
        <span> Education.</span>
        2009-2012 National Technical University of Ukraine 'Kyiv Polytechnic
        Institute', Bachelor of Material Science.
      </p>
      <p className="english">
        <span> Foreign language :</span> English IELTS – 5,5.
      </p>
      <p>
        <span> Hobby :</span> snowboarding, books, movie.
      </p>
    </div>
  );
};

export default About;
