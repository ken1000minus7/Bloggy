import React from "react";
import {Fade} from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

export const Blog = ({blog})=>{
    return(
        <Fade triggerOnce cascade className="flex flex-col my-[10px] items-center">
            <div className="font-serif font-bold text-[60px]">
                {blog.title}
            </div>
            <div className="font-light text-[15px] text-center mb-0">
                By <Link to={`/user/${blog.author.username}`} className="hover:text-cyan-500 duration-[300ms]">{blog.author.firstName + " " + blog.author.lastName}</Link><br/>
                {new Date(blog.creationTime).toDateString()}
            </div>
            <ReactMarkdown className="text-[18px] text-start my-[10px] text-left w-[100%] px-[20px]">
                {blog.content}
            </ReactMarkdown>
        </Fade>
    )
}