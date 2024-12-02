import mongoose from "mongoose";
import { IProjectData } from "../interface/projectData.interface";



const projectDataSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true, trim: true},
    image: {type: String, required: true, trim: true},
    tags: [{type: String, trim: true}] 
},
{
    timestamps: true
}
);

const projectData = mongoose.model<IProjectData>("projectData", projectDataSchema);

export default projectData;