import React from 'react'
import { NavLink } from "react-router-dom"

const MobileNav = () => {
  return (
    <nav className="navbar">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img
              src="/images/log.png"
              alt="logo"
              className="logo"
            />
            <span className="brand-name">CodeAlkemy</span>
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

export default MobileNav;
