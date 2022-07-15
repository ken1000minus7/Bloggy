import React from "react";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const BlogCard = ({blog}) => {
    return (
        <Link to={`/blog/${blog.id}`} className="flex flex-col m-[20px] shadow-md text-start bg-[#e7f4ff] hover:bg-gray-50 duration-[400ms] hover:shadow-lg rounded-[20px]">
            <div className="font-bold text-[40px] font-serif p-[15px]">
                {blog.title}
            </div>
            <ReactMarkdown className="h-[80px] text-ellipsis overflow-hidden text-[10px] pb-[15px] px-[15px]">
                {blog.content}
            </ReactMarkdown>
            <div className="flex flex-row bg-amber-100 p-[10px] group-hover:bg-white rounded-b-[20px]">
                <span className="flex-auto">By <Link to={`/user/${blog.author.username}`} className="hover:text-cyan-500 duration-[300ms]">{blog.author.firstName + " " + blog.author.lastName}</Link></span>
                <span className="flex-auto text-right">{new Date(blog.creationTime).toDateString()}</span>
            </div>
        </Link>
    )
}