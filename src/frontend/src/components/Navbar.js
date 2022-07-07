import React from "react";
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";

export const Navbar = ()=>{
    return (
        <div className="flex flex-row items-center shadow-[rgba(99,99,99,0.2)_0_2px_8px_0]">
            <div className="basis-[10%] font-bold m-[10px] text-[36px] font-serif">Bloggy</div>
            <div className="flex flex-auto flex-row mx-[10px]">
                <Link to="/home" className="decoration-0 duration-[400ms] text-[20px] py-[15px] px-[20px] mx-[10px] rounded-[20px] hover:shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]">Home</Link>
                <Link to="/blogs" className="decoration-0 duration-[400ms] text-[20px] py-[15px] px-[20px] mx-[10px] rounded-[20px] hover:shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]">Blogs</Link>
            </div>
            <TextField
                className="basis-[15%]"
            />
            <img src="https://assets.leetcode.com/users/avatars/avatar_1655063000.png" className="rounded-[50%] h-[60px] mx-[10px]"/>
        </div>
    )
}