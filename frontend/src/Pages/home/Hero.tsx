import React from 'react'
import "./HomeStyles.scss";
import MyWill from '../../components/TypeWritter';

const Hero = () => {
  return (
    <div className="home-hero-container">
         <div style={{ color:"#fff",
          padding:"0rem", marginTop:"-3rem", marginBottom:"0rem", position:"absolute",
        }}>
       <MyWill />
       </div>
       <div className="board-container" style={{ 
        paddingTop:"1rem",
        }}></div>
      <div className="hero-card">
        <div className="hero-card-content">
        <h1 className="hero-h1">
          <span>Impacting Softwares <br /> With Reliable Solution</span>
         </h1>
          <p className="hero-p hero-par">
            I am a Software Engineer with a passion for building impactful software solutions. I have experience in developing web applications, mobile applications, and cloud-based solutions.  I am always looking for new challenges and opportunities to learn and grow as a developer.
          </p>

           <div >
            <button className="hero-button">
            <a  
              href="https://calendly.com/wilfy7am/book-a-meeting-with-wilfred" 
              > <button className="hero-button">Schedule a Meeting</button>
           </a>
           </button>
           
           <button className="hero-white-btn">
              Projects
           </button>

         </div>  
        </div>
      </div>
    </div>
    
  )
}

export default Hero
