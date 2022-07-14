import React from "react";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const BlogCard = ({blog}) => {
    return (
        <Link to={`/blog/${blog.id}`} className="flex flex-col m-[20px] shadow-md text-start bg-[#e7f4ff] hover:bg-gray-50 duration-[400ms] hover:shadow-lg rounded-[20px] p-[10px]">
            <div className="font-bold text-[40px] font-serif">
                {blog.title}
            </div>
            <ReactMarkdown className="h-[80px] text-ellipsis overflow-hidden">
                {blog.content}
            </ReactMarkdown>
            <div className="flex flex-row bg-amber-100 p-[6px] group-hover:bg-white">
                <span className="flex-auto">By {blog.author.firstName + " " + blog.author.lastName}</span>
                <span className="flex-auto text-right">Created on {new Date(blog.creationTime).toDateString()}</span>
            </div>
        </Link>
    )
}