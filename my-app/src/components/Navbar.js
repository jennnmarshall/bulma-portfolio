import React from 'react';
import logo from "../images/teallogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faCircleInfo, faFileLines, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  const burgerClick = () => {
      var burger = document.querySelector(".burger");
      var nav = document.querySelector("#navbarTime");
      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
  }


return (
  <nav className="navbar navcolor is-fixed-top mb-6">
    <div className="navbar-brand">
      <a className="navbar-item" href="/" role="button">
        <img src={logo} height="50" />
      </a>
      <a
        role="button"
        className="navbar-burger burger tealtext"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarTime"
        onClick={burgerClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarTime" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item" href="/portfolio">
          <span className="icon">
            <FontAwesomeIcon icon={faCodeFork} />
          </span>
          <span>Portfolio</span>
        </a>
        <a className="navbar-item" href="/about">
          <span className="icon">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
          <span>About</span>
        </a>
        <a className="navbar-item" href="/about">
          <span className="icon">
            <FontAwesomeIcon icon={faFileLines} />
          </span>
          <span>Resume</span>
        </a>
        <a className="navbar-item" href="/contact">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>Contact</span>
        </a>
      </div>
    </div>
  </nav>
);


}

export default Navbar;