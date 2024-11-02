import { Router } from "express";
import { 
    createBlogPost, 
    deleteBlogPost, 
    getBlogPosts, 
    getSingleBlogPost, 
    updateBlogPost
} from "../controllers/blogPost.controllers";



const blogRouter = Router();

blogRouter.post("/create", createBlogPost);

blogRouter.get("/posts/all", getBlogPosts);
blogRouter.get("/post/single/:id", getSingleBlogPost);
blogRouter.put("/update/:id", updateBlogPost);
blogRouter.delete("/delete/:id", deleteBlogPost)



export default blogRouter;
