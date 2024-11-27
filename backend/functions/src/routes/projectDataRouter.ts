import { Router } from "express";
import { 
    createProject, 
    deleteProject, 
    getAllProjects, 
    getProject,
    updateProject
} from "../controllers/projectData.controllers";



const projectDataRouter = Router();


projectDataRouter.post("/create/project", createProject);


projectDataRouter.get("/all/projects", getAllProjects);
projectDataRouter.get("/single/project/:id", getProject);
projectDataRouter.put("/update/project/:id", updateProject);
projectDataRouter.delete("/delete/project/:id", deleteProject);

export default projectDataRouter;