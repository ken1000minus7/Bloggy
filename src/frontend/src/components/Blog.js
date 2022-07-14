import React from "react";
import {Fade} from "react-awesome-reveal";
import ReactMarkdown from "react-markdown";

export const Blog = ({blog})=>{
    return(
        <Fade triggerOnce cascade direction="up" className="flex flex-col mx-[15px] my-[10px] items-center">
            <div className="font-serif font-bold text-[60px]">
                {blog.title}
            </div>
            <div className="font-light text-[15px]">
                By {blog.author.username}
            </div>
            <ReactMarkdown className="text-[25px] text-start my-[10px] text-left w-[100%]">
                {blog.content}
            </ReactMarkdown>
        </Fade>
    )
}