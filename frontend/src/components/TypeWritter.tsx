import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const MyWill = () => {
  return (
    <div className="">
      <Typewriter
          words={["const createPost = async(req: Request, res: Response ) => {try {",
                "const {title, content, author, tags} = req.body;", 
                "const newPost = new blogPost({title,content,author,tags,})", "Ready!"]} 
         loop={true} 
         cursorBlinking={true} 
         cursor={true} 
         typeSpeed={60} 
         deleteSpeed={0}
         delaySpeed={1800}/>
    </div>
  )
}

export default MyWill;