import React from "react"
import "./HomeStyles.scss"


const WhatIFocusOn = () => {
  return (
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
    
  )
}

export default WhatIFocusOn;
