import React from "react"
import "./HomeStyles.scss"


const WhatIFocusOn = () => {
  return (
    <section>
    <div className="what-i-focus-on-container">
      <div className="my-focus">
        <span 
           style={{
            fontSize: "3.3rem",
            marginBottom: "-1.5rem",
           }}>
          What I Focus On</span>
     </div>

     <div className="my-focus-content">
      <span>
        I am an AWS cloud practitioner and a software developer. 
        I have the ability to build extensible applications and 
        I design robust cloud infracstructure that ensures high 
        availability for modern applications. 
        This keeps me curious and make me evolve constantly.
        From contributing to a larger vision to driving a project solo, 
        I bring both versatility and impact to the table
        </span>
     </div>
      <div>
        <h2 className="my-core-competencies"> 
        💼 My Core Competencies 
        </h2>

         <section className="competence-grid-container">
          <div className="competence-items">
            <div className="icon-heading">
               <img src="images/software.svg" alt="Icon" className="competencies-icons" />
               <h3 className="competence-h3">
                 Software Development
               </h3>
            </div>
              <p className="competence-p">Experienced in both functional and OOP programming with JavaScript, TypeScript, Python </p>
          </div>
            
            <div className="competence-items">
            <div className="icon-heading">
               <img src="images/frontend.svg" alt="Icon" className="competencies-icons" />
               <h3 className="competence-h3">
                Frontend Development
              </h3>
            </div>
              <p className="competence-p">Specializing in React, and UI/UX best practices. </p>
            </div>

            <div className="competence-items">
            <div className="icon-heading">
              <img src="images/backend.svg" alt="Icon" className="competencies-icons" />
              <h3 className="competence-h3">
                Backend & API Development
              </h3>
              </div>

              <p className="competence-p"> Strong knowledge of Node.js, GraphQL, and REST APIs.</p>
            </div>
            <div className="competence-items">
            <div className="icon-heading">
            <img src="images/cloud.svg" alt="Icon" className="competencies-icons" />
              <h3 className="competence-h3">
               Cloud and DevOps
              </h3>
              </div>
              <p className="competence-p"> AWS-certified with expertise, Docker, CI/CD Pipelines. </p>
          </div>
         </section>

       
      </div>
    </div>
 

    <section className="container py-5">
  <div className="text-center mb-5">
 
    <h2 
     className="display-5 fw-bold fs-medium">
       <img 
          src="images/deal.svg" 
          alt="Icon" 
          className=" img-fluid" 
          style={{width: '40px', height: '40px', margin: "2px"}}
        />What I Deliver</h2>
  </div>
  
  <div className="row g-4">
    {/* Service Items */}
    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-start gap-3">
        <img 
          src="images/puzzle.svg" 
          alt="Icon" 
          className="deliver-icons img-fluid" 
          style={{width: '40px', height: '40px'}}
        />
        <div>
          <h6 className="fw-bold mb-0">Custom Web Applications</h6>
          <p className="text-muted mb-0 small">
            Tailored solutions using modern web technologies.
          </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-start gap-3">
        <img 
          src="images/puzzle.svg" 
          alt="Icon" 
          className="deliver-icons img-fluid" 
          style={{width: '40px', height: '40px'}}
        />
        <div>
          <h6 className="fw-bold mb-0">Cloud Infrastructure & DevOps</h6>
          <p className="text-muted mb-0 small">
            Helping businesses scale securely with AWS & containerized solutions.
          </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-start gap-3">
        <img 
          src="images/puzzle.svg" 
          alt="Icon" 
          className="deliver-icons img-fluid" 
          style={{width: '40px', height: '40px'}}
        />
        <div>
          <h6 className="fw-bold mb-0">Workflow Automation & API Development</h6>
          <p className="text-muted mb-0 small">
            Automating business processes and integrating tools.
          </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="d-flex align-items-start gap-3">
        <img 
          src="images/puzzle.svg" 
          alt="Icon" 
          className="deliver-icons img-fluid" 
          style={{width: '40px', height: '40px'}}
        />
        <div>
          <h6 className="fw-bold mb-0">Technical Consulting & Mentorship</h6>
          <p className="text-muted mb-0 small">
            Advising on software architecture, cloud optimization, and development strategies.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Buttons */}
  <div className="text-center mt-5 gap-2 d-flex justify-content-center">
    <button className=" myWork-btn btn-outline-primary px-4 py-2">
      My Works
    </button>
    <button  className="hireMe-btn px-4 py-2">
      Hire Me
    </button>
  </div>
</section>
  </section>
    
  )
}

export default WhatIFocusOn;
