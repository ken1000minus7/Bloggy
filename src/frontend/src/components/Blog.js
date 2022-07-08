import React from "react";
import {Fade} from "react-awesome-reveal";

export const Blog = ({blog})=>{
    return(
        <Fade triggerOnce cascade direction="up" className="flex flex-col mx-[15px] my-[10px]">
            <div className="font-serif font-bold text-[60px]">
                {blog.title}
            </div>
            <div className="font-light text-[15px]">
                By {blog.author.username}
            </div>
            <div className="text-[25px] text-start my-[10px]">
                {blog.content}
            </div>
        </Fade>
    )
}