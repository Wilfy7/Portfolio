import React from "react";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <section>
      <div className="home-section">
       <h1>
         <span className="line long"> Reliable SOLUTIONS THAT TURN </span> 
         <span className="line short"> IDEAS INTO IMPACTFUL SOFTWARE </span>
       </h1>
       <p >
         This is a brief introduction about my work as a developer. 
         Feel free to browse through my projects and contact me for collaboration.
         This is a brief introduction about my work as a developer. 
         Feel free to browse through my projects and contact me for collaboration.
      </p>
     <div className="home-button">
        <input type="text" placeholder="Book a free call" className="call-input"/>
       
        <a  
         href="https://calendly.com/wilfy7am/book-a-meeting-with-wilfred" 
         style={{width:"100%", height:"600",}}
         className="button">Make it happen
        </a>

        <div className="img-container">
          <img className="img" src="images/Inov2.webp" alt="Inov" />
        </div>
     </div>
     </div>
     <div className="section-behere">
        <span>Created for you and your business</span>
      </div>
      <div className="section-create">
        <span>Building Innovative Ideas into Sustainable Solutions</span>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-value">200+</span>
          <span className="stat-label">Completed Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">700+</span>
          <span className="stat-label">Satisfied Customers</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">98%</span>
          <span className="stat-label">Customer Satisfaction</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">30M</span>
          <span className="stat-label">Lines of Code</span>
        </div>
      </div>
      <div className="elev-container">
          <span className="section-elev">Turning Challenges into Cutting-Edge Solutions</span>
      </div>
      <div className="let-container">
        <span className="let-section">Let us Bring Your Projects to Life Together</span>
      </div>

      <div className="img2-container">
        <div>
         <img className="img2-items" src="images/Inov2.webp" alt="Inov" />
        </div> 
        <div>
         <img className="img2-items" src="images/Inov2.webp" alt="Inov" />
        </div>
        <div>
         <img className="img2-items" src="images/Inov2.webp" alt="Inov" />
        </div>
      </div>
    </section>
    
  )
}

export default Home;
