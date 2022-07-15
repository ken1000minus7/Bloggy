import React from "react";
import {Fade} from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

export const Blog = ({blog})=>{
    return(
        <Fade triggerOnce cascade direction="up" className="flex flex-col mx-[15px] my-[10px] items-center">
            <div className="font-serif font-bold text-[60px]">
                {blog.title}
            </div>
            <div className="font-light text-[15px] text-center">
                By {blog.author.firstName + " " + blog.author.lastName}<br/>
                {new Date(blog.creationTime).toDateString()}
            </div>
            <ReactMarkdown className="text-[20px] text-start my-[10px] text-left w-[100%]">
                {blog.content}
            </ReactMarkdown>
        </Fade>
    )
}