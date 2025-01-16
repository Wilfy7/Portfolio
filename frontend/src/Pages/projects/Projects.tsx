import React, { useEffect, useState } from "react";
import "./ProjectStyles.scss";
import { getAllProjects } from "../../service/project.service";



interface Project {
  title: string;
  dicription: string;
  image: string;
  tags: string[]
}

const Project = () => {
  const colors = ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6f42c1"]; // Add more colors if needed

    const [projectData, setProjectData] = useState([]);

    const fetchData = async() => {
      const res = await getAllProjects()
      setProjectData(res)
    }
    
    useEffect(()=> {
      //Fetch data from API/Backend
      fetchData();
   
    }, []);

console.log(projectData) 
  return (
    <section>
      <div className="proj-sec">
        <video className="img-sec" src="images/pexel.jpeg" autoPlay loop muted> </video> 
        <div className="overlay-text">
          <h1>Project that projects values</h1>
          <p>Here you can find all blablabla nbalbalba bahcj ahxdhcbyheyeycyhbcb hdbc</p>
        </div>
      </div>
       
      <section className="projects-section">
       <div className="projects-container">
          {projectData?.length > 0 ? (
          projectData?.map((project: any, i ) => (
         <div className="project-card" key={project?.id}>
         <div className="semi-card">
         <div className="mockup-container shape">
            <img src={project?.image} alt={project?.title} className="mockup-image"/>
          </div>
          </div>
          
          <div className="project-info">
            <h3 className="project-title">{project?.title}</h3>
            <p className="project-description">{project?.description}</p> 
          
      
          <div className="tags-container">
             {project.tags?.map((tag:any, i: number) =>(
             <span key={i}className="tag">{tag}</span>
         
            ))}

      
        
          </div>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-demo">
                Live Demo →
            </a>
        </div>
       </div>
          ))
         ):(
          <p>No projects available</p>
          )}
      </div>
      </section>

      <div className="ready">
        <h1 className="ready-h1">Excited to Bring Your Vision to Life.</h1>
        <p 
          className="text"> 
          Reach out today to explore how my tailored solutions can transform your business
          and drive it to new heights. Let’s create something extraordinary together! 
        </p>
        <button className="ready-button">
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default Project;
