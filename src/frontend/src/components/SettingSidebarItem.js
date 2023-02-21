import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const SidebarItem = ({to,icon,title})=>{

    const {width} = useWindowSize()
    const current = title.toLowerCase();
    console.log(current);
    const curr = window.location.pathname;
    const final = curr.slice(10);
    console.log(final);
    return (
        <Link to={to} className={`font-SourceSansPro flex flex-row items-center mx-[20px] decoration-0 hover:bg-[#f0def4] duration-[400ms] text-[20px] py-[15px] px-[10px] sm:mx-0 sm:p-[5px] rounded-[20px] hover:shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] NavbarItemText ${final === current ? 'bg-gray-400' : ''}`}>
            {icon}
            {
                width > 830 && <span className="">{title}</span>
            }
        </Link>
    )
}