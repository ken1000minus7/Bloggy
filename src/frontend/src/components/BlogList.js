import React from "react";
import {BlogCard} from "./BlogCard";
import {Fade} from "react-awesome-reveal";

export const BlogList = ({blogList}) => {
    return (
        <Fade cascade triggerOnce>
            {
                blogList.map((blog)=>{
                    return (
                        <BlogCard blog={blog} key={blog.id}/>
                    )
                })
            }
        </Fade>
    )
}