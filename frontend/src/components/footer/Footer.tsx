import React from "react";
import "./FooterStyles.scss"

const Footer = () => {
  return (
    <footer className="footer-starter">
      <div className="section-items">
        <h6 className="headers">Key Features</h6>
        <div className="section-text">
          <ul>End-to-End Solutions</ul>
          <ul>Custom Consulting</ul>
          <ul>CI/CD Automation</ul>
          <ul>SaaS Platform Development</ul>
          <ul>Cloud Architecture</ul>
        </div>
      </div>
      <div className="section-items">
        <h6 className="headers">My Projects</h6>
        <div className="section-text">
          <ul>Yiwonsa</ul>
          <ul>Email Marketing Tool</ul>
          <ul>Dashboard</ul>
          <ul></ul>
        </div>
      </div>
      <div className="section-items">
        <h6 className="headers">About Me</h6>
        <div className="section-text">
          <ul>Passionate Developeer</ul>
          <ul>Tech Enthusiast</ul>
          <ul></ul>
          <ul></ul>
        </div>
      </div>
      <div className="section-items">
        <h6 className="headers">Connect With Me</h6>
        <div className="section-text">
          <ul>GitHub</ul>
          <ul>LinkedIn</ul>
          <ul>X/Twitter</ul>
          <ul>Medium</ul>
          <ul>Email</ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
