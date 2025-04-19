import React from "react";
import "./NavbarStyles.scss"; 
import { NavLink } from "react-router-dom"





const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      {/* Left section */}
      <NavLink to="/"  className="brand-name" style={{ textDecoration: "none", color: "black" }}>
        <img
          src="/images/log.png" // Update if your image path differs
          alt="logo"
          className="logo"
        />
        <span className="brand-name">CodeAlkemy</span>
      </NavLink>

      {/* Center nav links */}
      <ul className="navbar-center">
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/aboutme">About Me</NavLink></li>
        <li>
          <NavLink to="/resources">
            Resources <span className="arrow">▾</span>
          </NavLink>
        </li>
      </ul>

      {/* Right CTA button */}
      <div className="navbar-right">
        <button className="talk-btn">Let's Talk!</button>
      </div>
    </nav>
  );
};

export default Navbar;

    

