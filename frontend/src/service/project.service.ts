import axios from "axios";

export const baseUrl = process.env.REACT_APP_API;
console.log(baseUrl)

//Retrieve the data from the local storage
const projectData:any = localStorage.getItem("Portfolio");

//Convert the data into json and parse it
export const project = JSON.parse(projectData)



export const createProjectData = async(project:any) => {
   try {
     const res = await axios.post(`${baseUrl}/create/project`, project)
     return res.data;

   } catch (error) {
     console.log(error)
   }
};

export const getAllProjects = async() => {
  try {
     const res = await axios.get(`${baseUrl}/all/projects`)
     return res.data.Projects
  } catch (error) {
    console.log(error)
  }
};

export const getProject = async(project: any, id: string) => {
  try {
    const res = await axios.get(`${baseUrl}/single/project/${id}`, project)
    return res.data
  } catch (error) {
    console.log(error)
  }
};

export const updateProject = async(project: any, id:string) => {
  try {
     const res = await axios.put(`${baseUrl}/update/project/${id}`, project)
     return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const deleteProject = async(project: any, id: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/delete/project/${id}`, project)
    return res.data.message;
  } catch (error) {
    console.log(error)
  }
};
