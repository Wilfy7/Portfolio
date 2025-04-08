import { Request, Response } from "express";
import blogPost from "../models/blogPost.model";


//Create a blog post
export const createBlogPost = async(req: Request, res: Response ) => {
   try {
      const {title, content, author, tags} = req.body;

      const newPost = new blogPost({
        title,
        content,
        author,
        tags,
      });

      const savedPost = await newPost.save()
         res.status(201).json({
         message: "Post created",
         savedPost
      })

   } catch (error) {
    console.error("Error creating blog post", error)
    res.status(500).json({
        message: "Error creating blog post"
    });
   }
};


//Get all blog posts
export const getBlogPosts = async(req: Request, res: Response) => {
    try {
      const Posts = await blogPost.find()
      res.status(200).json({
        message: "Posts retrieved succcessfully",
        Posts
      })   
    } catch (error) {
       res.status(500).json({
        message: "Error fetching blog posts"
      }); 
    }
};

//Get a single blog post
export const getSingleBlogPost = async(req: Request, res: Response) => {
    try {
       const {id} = req.params; 
       const post = await blogPost.findById(id);

       if(!post) {
         res.status(400).json({
         message: "Blog post not found"
        })
       };

        res.status(200).json({
        message: "Blog post fetched successfully"
       }); 

    } catch (error) {
       res.status(500).json({
        message: "Error fetching blog post"
    }); 
    }
};

//update blog post
export const updateBlogPost = async(req: Request, res: Response) => {
    try {
      const {id} = req.params; 
      const {title, content, author, tags} = req.body;

      const updatedPost = await blogPost.findByIdAndUpdate(
        id, 
        {title, content, author, tags},
        {new: true}
        );

       if(!updatedPost) {
         res.status(404).json({
            message: "Update not found"
        });
       }

        res.status(200).json({
        message: "Blog post updated successfully"
       })

    } catch (error) {
       res.status(500).json({
        message: "Error updating blog post"
      })  
    }
};


export const deleteBlogPost = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const deletedPost = await blogPost.findByIdAndDelete(id)

        if(!deletedPost) {
             res.status(404).json({
            message: "Blog post not found"
            });
        }

         res.status(200).json({
            message: "Blog post deleted successfully"
        })
    } catch (error) {
       res.status(500).json({
        message: "Error deleting blog post"
    }); 
    }
}; 
