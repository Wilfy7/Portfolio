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
          <button className="btn">
            <p className="btn-prim">Create Something Extraordinary With Us</p>
          </button>
          <button>
            <p className="btn-prim2">Learn more about how we hoist your brand </p>
          </button>
        </div>
        </div>
        
      </div>
    </section >
  )
}

export default AboutMe;
