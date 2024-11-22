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

       {/* card 1 */}
      <div className="card-grid">
        <div className="card">
          <div className="card-image img">
            <img src="images/Inov.jpeg" alt="Inov" />
          </div>
        </div>
      

      {/* card 2 */}
      <div className="">
        <div className="card">
          <div className="card-image img">
            <img src="images/Inov.jpeg" alt="Inov" />
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className="">
        <div className="card">
          <div className="card-image img">
            <img src="images/Inov.jpeg" alt="Inov" />
          </div>
        </div>
      </div>
      </div>
      <div></div>
    </section>
  )
}

export default Projects;
