import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import image from "./img/Фото2.jpg";
import "./App.css";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import { FaGitlab } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="photo__wrapper">
            <img className="photo" src={image} alt="img" />
          </div>
          <ul className="nav">
            <li>
              <NavLink to="/cv" activeClassName="active" className="nav__item">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                activeClassName="active"
                className="nav__item"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                activeClassName="active"
                className="nav__item"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/ospkiev" target="_blank">
                <IconContext.Provider
                  value={{ color: "black", size: "1.7rem" }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/pavel-karpenko-47984786/"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ color: "black", size: "1.7rem" }}
                >
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
            </li>
            <li className="social__item">
              <a href="https://gitlab.com/ospkiev" target="_blank">
                <IconContext.Provider
                  value={{ color: "black", size: "1.7rem" }}
                >
                  <FaGitlab />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
          <div className="download_wrapper">
            <a
              href="https://drive.google.com/open?id=1W-7Q7gRbU3J2Qeld8DmjrkGPyciJAW93"
              target="_blank"
              rel="noopener noreferrer"
              className="download"
            >
              Download my CV
            </a>
          </div>
        </div>
        <div className="wrapper">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/cv" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contacts" component={Contacts} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
