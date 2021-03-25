import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <p className="about__me">
        My name is Pavel Karpenko, I'm frontend-developer and I create web apps based on Vue/React. 
        My current project is e-commerce app which allow customers from all around the world
        buy optics (eyeglasses, sunglasses and accessories).
        My responsibility area is admin-panel for this shop, which provide the following functionality:
        managing orders/payments, user`s accounts (roles), add new delivery partners, 
        managing user`s reviews, add new brands/items, managing countries/currencies, 
        create promo actions, SEO etc. 
        For UI I use Vuetify, Bootstrap, for Git and CI/CD I use GitLab.
      </p>
      <p className="skills">
        <span>Skills:</span> JavaScript/TypeScript, React/Redux, Vue/Nuxt/Vuex/VueRouter, Webpack, BEM, Photoshop,
        Figma, Bootstrap, Material/Vuetify.
      </p>
      <p className="experience">
        <span>
          Work experience.
          <br />
        </span>
        1.SelectSpecs (Kyiv, Westgate on Sea (UK)) <br />
        <a href="https://www.selectspecs.com/" target="_blank" rel="noopener noreferrer">
          https://www.selectspecs.com/
        </a>
        <br />
        Front-end developer, June2019 – Now.
        <br />
        Responsibilities : develop e-shop and admin panel for it, on Vue/Nuxt.
        <br />
        2. Upscale Academy (Kyiv) <br />
        <br />
        Front-end developer, Dec2018 - June2019
        <br />
        Responsibilities: developed admin panel for educational portal on React/Redux.
        <br />
        3.GIMedia (Kyiv)
        <a href="https://gimedia.com/" target="_blank" rel="noopener noreferrer">
          https://gimedia.com/
        </a>
        <br />
        Support engineer/tester, Jan 2017 – Aug 2018. Responsibilities : provide
        software and hardware for Digital Signage Solutions (manage and control
        video/audio content remotely in advertising industry).
      </p>
      <p className="education">
        {" "}
        <span> Education.</span>
        2009-2012 National Technical University of Ukraine 'Kyiv Polytechnic
        Institute', Bachelor of Material Science.
      </p>
      <p className="english">
        {" "}
        <span> Foreign language :</span> English IELTS – 5,5 .
      </p>
      <p>
        <span> Hobby :</span> snowboarding, books, movie.
      </p>
    </div>
  );
};

export default About;
