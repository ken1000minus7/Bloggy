import React from "react";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router-dom";
import {MarkdownText} from "./MarkdownText";

export const Blog = ({blog})=>{
    return(
        <Fade triggerOnce cascade className="blog flex flex-col my-[10px] items-center">
            <div className="font-serif font-bold text-[60px] text-center">
                {blog.title}
            </div>
            <div className="font-light text-[15px] text-center mb-0">
                By <Link to={`/user/${blog.author.username}`} className="hover:text-cyan-500 duration-[300ms]">{blog.author.firstName + " " + blog.author.lastName}</Link><br/>
                {new Date(blog.creationTime).toDateString()}
            </div>
            <MarkdownText
                className="text-[18px] text-start my-[10px] text-left w-[100%] px-[20px]"
            >
                {blog.content}
            </MarkdownText>
        </Fade>
    )
}