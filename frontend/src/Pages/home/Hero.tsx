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
            I am a Software Engineer who has a passion for 
            building impactful software solutions. 
            I have experience developing web applications, 
            mobile applications, and cloud based solutions.  
            I am always looking for new challenges and 
            opportunities to learn and grow as a developer.
          </p>

           <div className="flex gap-4 bg-gray-100 p-6">
            <a  
              href="https://calendly.com/wilfy7am/book-a-meeting-with-wilfred" >  
              <button 
                className="hero-button">
                <span role="img" aria-label="calendar">📅</span>
                 Set Meeting
            </button>
           </a>
           
            <button 
              className="hero-white-btn">
               <span role="img" aria-label="laptop">💻</span>
               My Projects
            </button>

         </div>  
        </div>
      </div>
    </div>
    
  )
}

export default Hero
