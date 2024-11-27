import { Request, Response } from "express";
import projectData from "../models/projectData.model";





//Create A project
export const createProject = async (req: Request, res: Response) => {
   try {
      const {title, image, discription, tags} = req.body;

      const newProject = new projectData({
        title,
        image,
        discription,
        tags
      });

      const savedProject = newProject.save()
      res.status(200).json({
        message: "Project created succefully",
        data: savedProject
      });

   } catch (error) {
      console.error("Creating project error")
      res.status(500).json({
        message: "Error"
      });
   }
};


//Get All Projects
export const getAllProjects = async(req: Request, res: Response) => {
    try {

        const Projects = await projectData.find()
        res.status(200).json({
            message: "All Projects fetched successfully",
            Projects
         });

    } catch (error) {
      console.error("Error getting all Projects");
      res.status(500).json({
        message: "Error getting all Projects"
      }); 
    }
};


//Get A Single Project
export const getProject = async( req: Request, res: Response) => {
    try {
        
        const {id} = req.params;

        const Project = await projectData.findById(id);

        if(!Project) {
            res.status(400).json({
                message: "Project not found"
            })
        };

        res.status(200).json({
            message: "Project found successfully",
            data: Project
        });

    } catch (error) {
      console.error("Error getting project") 
      res.status(500).json({
        message: "Error getting project"
      });
    }
};


//Update A Project
export const updateProject = async(req:Request, res: Response) => {
    try {
        
        const {id} = req.params;
        const {title, image, discription, tags} = req.body;

        const updatedProject = await projectData.findByIdAndUpdate(
            id,
            {title, image, discription, tags},
            {new: true}
        );

        if(!updatedProject) {
           res.status(400).json({
           message: "Update not found"
           });
        };

        res.status(200).json({
            message: "Project update successfully"
        });

    } catch (error) {
       console.error("Error updating project")
       res.status(500).json({
        message: "Error updating project"
       }); 
    }
};


//Delete project
export const deleteProject = async(req: Request, res: Response) => {
    try {
        
        const {id} = req.params;

        const deleteProject = await projectData.findByIdAndDelete(id)

        if(!deleteProject) {
            res.status(400).json({
                message: "Project not found"
            });
        };

        res.status(200).json({
            message: "Project deleted successfully",
            
        })

    } catch (error) {
       console.error("Error deleting project")
       res.status(500).json({
        message: "Error deleting project"
       });
    }
};