import React from 'react'
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
          My Core Competencies 
        </h2>
         <div></div>
      </div>
    </div>
  )
}

export default WhatIFocusOn
