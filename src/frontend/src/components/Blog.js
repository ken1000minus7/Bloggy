import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { MarkdownText } from "./MarkdownText";

export const Blog = ({blog}) => {
  return (
    <Fade triggerOnce cascade className="blog flex flex-col my-[10px] items-center">
      <div className="flex ">
        <div className="font-serif font-bold text-[60px] text-center md:text-[50px] pr-4">
            {blog.title} 
        </div>
      </div>
      <div className="font-light text-[15px] text-center mb-0">
        By <Link to={`/user/${blog.author.username}`} className="hover:text-cyan-500 duration-[300ms]">
          {blog.author.firstName + " " + blog.author.lastName}</Link><br />
        {new Date(blog.creationTime).toDateString()}
      </div>
      <div className = "flex justify-center items-center">
      <div className="mt-6">
          <button type="button" class="-rotate-90 border border-green-700 hover:bg-green-400 rounded-md p-2.5  inline-flex items-center  hover:text-white mr-4 hover:scale-[1.05] hover:duration-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <button type="button" class="rotate-90 border border-red-700 hover:bg-red-400 rounded-md p-2.5  inline-flex items-center hover:text-white hover:scale-[1.05] hover:duration-200">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
      <MarkdownText className="text-[18px] text-start my-[10px] text-left w-[100%] px-[20px] md:text-[15px]">{blog.content} 
      </MarkdownText>
    </Fade>
  );
};
