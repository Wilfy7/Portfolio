import React from "react";
import "./ProjectStyles.scss";

const Projects = () => {
  return (
    <section>
      <div className="proj-sec">
        <video className="img-sec" src="images/motion1.mp4" autoPlay loop muted> </video> 
        <div className="overlay-text">
          <h1>Project that projects values</h1>
          <p>Here you can find all blablabla nbalbalba bahcj ahxdhcbyheyeycyhbcb hdbc</p>
        </div>
      </div>

       
      <div className="card-grid">
        {/* card 1 */}
        <div className="card">
        <div className="card-image">
          <div className="card-sm">
            <img src="images/Inov.jpeg" alt="Inov" />
          </div>
          <div className="card-content">
            <h3>System Manager</h3>
            <p>An administration system build to manage employers 
              by keeping a data of thier performance</p>
          </div>
          <div className="tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
          </div>
        </div>
      

      {/* card 2 */}
      <div className="card">
        <div className="card-image">
          <div className="card-sm">
            <img src="images/Inov.jpeg" alt="Inov" />
          </div>
          <div className="card-content">
            <h3>System Manager</h3>
            <p>An administration system build to manage employers 
              by keeping a data of thier performance</p>
          </div>
          <div className="tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className="card">
        <div className="card-image">
          <div className="card-sm">
            <img src="images/Inov.jpeg" alt="Inov" />
          </div>
          <div className="card-content">
            <h3>System Manager</h3>
            <p>An administration system build to manage employers 
              by keeping a data of thier performance</p>          
          </div>
          <div className="tags">
        <span>React.js</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>
        </div>
      </div>
      </div>
      <div></div>
    </section>
  )
}

export default Projects;
