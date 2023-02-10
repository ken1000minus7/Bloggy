import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { MarkdownText } from "./MarkdownText";
import { DeleteDialog } from "./DeleteDialog";

export const Blog = ({ blog}) => {

    const username = localStorage.getItem("username") || ""
    const [deleteOpen, setDeleteOpen] = useState(false)


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

      {
        username === blog.author.username ? (
            <div>
                <button onClick={() => {
                    setDeleteOpen(true);
                }} type="button" className="border border-red-700 hover:bg-red-400 rounded-md p-2.5  inline-flex items-center hover:text-white hover:scale-[1.05] hover:duration-200">
                    <svg className="w-5 h-5" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        width="800px" height="800px" viewBox="0 0 482.428 482.429">
                        <g>
                            <g>
                                <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
			        c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
			        h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
			        C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
			        C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
			        c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
			        c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
			        V115.744z"/>
                                <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			        c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                                <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			        c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                                <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			        c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                            </g>
                        </g>
                    </svg>
                </button>
                <DeleteDialog open={deleteOpen} setOpen={setDeleteOpen} id={blog.id} />
                <button onClick={()=>{
                   if(localStorage.getItem("username")){
                                    navigate(`/update/${blog.id}`)
                                }
                                else{
                                    navigate('/login')
                                }
                }} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Update The Blog
                </button>
            </div> ) : ( <></> )
      }
    </Fade>
  );
};
