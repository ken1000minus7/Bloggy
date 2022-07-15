import React from "react";
import {BlogCard} from "./BlogCard";
import {Fade} from "react-awesome-reveal";

export const BlogList = ({blogList}) => {
    return (
        <div>
            {
                blogList.map((blog)=>{
                    return (
                        <Fade direction="up" triggerOnce>
                            <BlogCard blog={blog} key={blog.id}/>
                        </Fade>
                    )
                })
            }
        </div>
    )
}