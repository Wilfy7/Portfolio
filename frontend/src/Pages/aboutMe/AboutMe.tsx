import React from "react";
import "./AboutMeStyles.scss";

const AboutMe = () => {
  return (
    <section>
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
    <div className="essay-sec">
        <h3 className="essay-h3">
         Meet Wilfred Ameyaw-Akumfi
        </h3>
           <p>
           Hi, I'm Wilfred Ameyaw-Akumfi, a Software Engineer. 
           My passion lies in crafting scalable, efficient software solutions that empower businesses 
           to thrive in today's digital landscape. With deep expertise in both front-end and back-end 
           technologies, I specialize in creating seamless user experiences and solving complex problems 
           through innovation and cutting-edge technology.
          </p>
          <span>
            Whether it's designing cloud infrastructures, building SaaS platforms, or automating processes for greater efficiency, I am driven by the challenge of pushing boundaries and delivering solutions that unlock new possibilities. My journey in tech has been fueled by curiosity, dedication, and an unwavering commitment to continuous improvement.
          </span>
        </div>
        <div>
          <h4 style={{fontWeight: "bold", margin:"1rem 1rem"}}>
          How I Deliver Impactful Solutions for Your Business.
          </h4>
          <p style={{margin:"1rem"}}>
          With years of experience, I've mastered a wide range of cutting-edge technologies and tools, enabling me to create efficient, high-performance applications that exceed expectations. Here's how my expertise can power your success.
          </p>
        </div>
    </section>
    
  )
}

export default AboutMe;
