import { Document } from "mongoose";


export interface IProjectData extends Document{
    title: string;
    discription: string;
    image: string;
    tags: string;
}