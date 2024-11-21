import React from "react";
import "./AboutMeStyles.scss";

const AboutMe = () => {
  return (
    <section className="about-sec">
      <div className="about-container">
        <div className="about-txt">
         <h1 className="about-h1">Wilfred Ameyaw-Akumfi- <br/> Software Engineer & Digital Marketing Expert</h1>
         <p className="about-p">Transforming visions into reality with dependable technology and innovative software craftsmanship</p>
         <div className="about-btn">
          <button className="btn-m btn-primary">
          <a  
                href="https://calendly.com/wilfy7am/book-a-meeting-with-wilfred" 
                className="btn-primary">
                  Create Something Extraordinary With Us
          </a>
          </button>
         
          <button className="btn-m btn-secondary">
            <a  
               href="https://calendly.com/wilfy7am/book-a-meeting-with-wilfred" 
               className="anch">
                 See How I Can Help You Hoist Your Brand 
            </a>
          </button>
         
        </div>
        </div>
        <div className="about-img-sec">
          <img className="about-img" src="images/wilfy.png" alt="wilfy" />
        </div>
      </div>
    </section >
  )
}

export default AboutMe;
