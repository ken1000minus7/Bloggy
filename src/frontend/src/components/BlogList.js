import React from "react";
import {BlogCard} from "./BlogCard";

export const BlogList = ({blogList}) => {
    return (
        <div>
            {
                blogList && blogList.map((blog)=>{
                    return <BlogCard blog={blog} key={blog.id}/>
                })
            }
        </div>
    )
}