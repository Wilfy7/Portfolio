import React, { useEffect, useState } from "react";
import "./ProjectStyles.scss";
import { baseUrl } from "../../service/project.service";
import axios from "axios";



interface Project {
  title: string;
  dicription: string;
  image: string;
  tags: string
}

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
      //Fetch data from API/Backend
     axios.get(`${baseUrl}/all/projects`)
      .then(response => {
        setProjects(response.data.dat);
        setLoading(false);
      })
       .catch (error =>  {
        console.error(error.message)
        setLoading(false)
      
     });

   
    }, []);
    

  return (
    <section>
      <div className="proj-sec">
        <video className="img-sec" src="images/motion1.mp4" autoPlay loop muted> </video> 
        <div className="overlay-text">
          <h1>Project that projects values</h1>
          <p>Here you can find all blablabla nbalbalba bahcj ahxdhcbyheyeycyhbcb hdbc</p>
        </div>
      </div>


      
       { loading? (
       <p>Loading...</p> 
       ):(
      <div className="card-grid">
        {projects.map((project: any) => (
        <div className="card" key={project.id}>
          <div className="card-image">
           <div className="card-sm">
            <img src={project.image} alt={project.title} />
           </div>
          </div>
          
          <div className="card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
      
          <div className="tags">
            {project.tags.map((tag:any, index:any) =>(
              <span key={index}>{tag}</span>
            ))}
          </div>
          </div>
        
      ))}
      </div>
       )}
    </section>
  );
};

export default Projects;
