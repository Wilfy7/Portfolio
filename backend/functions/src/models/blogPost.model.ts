import mongoose from "mongoose";
import { IBlogPost } from "../interface/blogPost.interface";


const blogPostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    tags: [{type: String}],
    comments: [{
        user: {type: String, required: true},
        comment: {type: String, required: true},
        date: {type: Date, default: Date.now},
    }],
},
{
    timestamps: true
}
);


const blogPost = mongoose.model<IBlogPost>("blogPost", blogPostSchema);

export default blogPost;