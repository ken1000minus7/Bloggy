import React from "react";
import {Fade} from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

export const Blog = ({blog})=>{
    return(
        <Fade triggerOnce cascade className="flex flex-col my-[10px] items-center">
            <div className="font-serif font-bold text-[60px]">
                {blog.title}
            </div>
            <div className="font-light text-[15px] text-center mb-0">
                By {blog.author.firstName + " " + blog.author.lastName}<br/>
                {new Date(blog.creationTime).toDateString()}
            </div>
            <ReactMarkdown className="text-[18px] text-start my-[10px] text-left w-[100%] px-[20px]">
                {blog.content}
            </ReactMarkdown>
        </Fade>
    )
}