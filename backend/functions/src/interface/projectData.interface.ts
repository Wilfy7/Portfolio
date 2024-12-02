import { Document } from "mongoose";


export interface IProjectData extends Document{
    title: string;
    description: string;
    image: string;
    tags: [];
}