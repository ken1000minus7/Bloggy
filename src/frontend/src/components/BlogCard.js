import React from "react";
import {Link} from "react-router-dom";

export const BlogCard = ({blog}) => {
    return (
        <Link to={`/blog/${blog.id}`} className="flex flex-col m-[20px] shadow-md text-start bg-[#e7f4ff] hover:bg-gray-50 duration-[400ms] hover:shadow-lg rounded-[20px] p-[10px]">
            <div className="font-bold text-[40px]">
                {blog.title}
            </div>
            <div className="h-[100px] text-ellipsis overflow-hidden">
                {blog.content}
            </div>
            <div className="flex flex-row">
                <span>By {blog.author.username}</span>
            </div>
        </Link>
    )
}