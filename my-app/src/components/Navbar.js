import React from 'react';
import logo from "../images/logojm.png"


const Navbar = () => {



return (
  <nav className="navbar is-link is-fixed-top mb-6">
    <div className="navbar-brand">
      <a class="navbar-item" href="/">
      <img src={logo} height="50"/>
    </a>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarTime"
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
            <i className="fas fa-th-list"></i>
          </span>
          <span>Portfolio</span>
        </a>
        <a className="navbar-item" href="/about">
          <span className="icon">
            <i className="fas fa-info"></i>
          </span>
          <span>About</span>
        </a>
        <a className="navbar-item" href="/about">
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <span>Resume</span>
        </a>
        <a className="navbar-item" href="/contact">
          <span className="icon">
            <i className="fas fa-envelope"></i>
          </span>
          <span>Contact</span>
        </a>  
      </div>  
    </div>
  </nav>
);


}

export default Navbar;