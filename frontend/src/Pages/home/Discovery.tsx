import React from "react";
import "./HomeStyles.scss";

const Discovery = () => {
  return (
    <section className="discovery-section">
       <div>
        <h2 className="my-work">My Work</h2>  
       </div>
       <div className="solutions-contributed">
        <span>Below are some of the Solutions I have built</span>
       </div>

     <div className="solutions-container">
     <div className="solutions-item">
          <img className="solutions-image-card" src="images/dashboard.jpg" alt="" />
         <div className="solutions-item-content">
          <h3>Dashboard</h3>
         <p>An app that allows administrators to supervise the performance of and efficiency of colleagues at work
         </p>
       </div>
       </div>

       <div className="solutions-item">
          <img className="solutions-image-card" src="images/dashboard.jpg" alt="" />
         <div className="solutions-item-content">
          <h3>Yiwonsa</h3>
          <p>A place to find multiple restaurant to order food that would be delivered at customers doorstep</p>
       </div>
       </div>

       <div className="solutions-item">
          <img className="solutions-image-card" src="images/dashboard.jpg" alt="" />
         <div className="solutions-item-content">
          <h3>Cold Outreach Email Marketing Tool</h3>
        <p>Automates cold email campaigns with personalized outreach and engagement tracking</p>
     </div>
     </div>

     </div>
    </section>   
  )
}

export default Discovery;
