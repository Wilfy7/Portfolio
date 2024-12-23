import React from "react";
import "./NavbarStyles.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
  <nav className="globalstyles navbar navbar-expand-lg ">
     <div className="container-fluid">
        <NavLink 
         style={{
            fontFamily: "sans-serif",
            fontWeight: 800,
            paddingLeft: "0.5rem",
            color: "black",
            textDecoration: "none"
          }}
        to="/"> 
          CodeAlchemy
        </NavLink>

        <div style={{paddingLeft:"25rem"}} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <NavLink className="nav-link pagestext" to="/"></NavLink>
         </li>
         <li className="nav-item">
           <NavLink  className="nav-link pagestext" to="/projects">Projects</NavLink>
         </li>
         <li className="nav-item">
            <NavLink className="nav-link pagestext" to="/blogs">Blogs</NavLink>
         </li>
         <li className="nav-item">
          <NavLink className="nav-link pagestext" to="/aboutme">About Me</NavLink>
         </li>
         </ul>
          <div className="let-talk">
            <button className="ready-button">
              Let's Talk
            </button>
          </div>
        </div>
      
     </div>
  </nav>
  )
}

export default Navbar;
