import { Document } from "mongoose";



export interface IBlogPost extends Document{
    title: string;
    content: string;
    author: string;
    tags: [];
    createdAt: Date;
    updatedAt: Date;
    comments: {user:string; comment:string; date:Date }[];
}