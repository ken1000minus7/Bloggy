import React from "react";
import {Link} from "react-router-dom";

export const NavbarItem = ({to,icon,title})=>{
    return (
        <Link to={to} className="flex flex-row items-center decoration-0 hover:bg-[#f0def4] duration-[400ms] text-[20px] py-[15px] px-[20px] mx-[10px] rounded-[20px] hover:shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]">
            {icon}
            <span className="ml-[5px]">{title}</span>
        </Link>
    )
}