import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Switch} from "@mui/material";
import {NavbarItem} from "./NavbarItem";
import {Add, Home, Search} from "@mui/icons-material";

export const Navbar = ({changeTheme})=>{
    const [username,setUsername] = useState(localStorage.getItem("username"))

    useEffect(()=>{
        const handleStorage = ()=>{
            setUsername(localStorage.getItem("username"))
            console.log(username)
        }
        window.addEventListener("storage",handleStorage)
        return ()=>{
            window.removeEventListener("storage",handleStorage)
        }
    },[])

    return (
        <div className="flex flex-row items-center shadow-[rgba(99,99,99,0.2)_0_2px_8px_0] bg-[#ede7f6]">
            <Link to="/home" className="basis-[10%] font-bold m-[10px] text-[36px] font-serif">Bloggy</Link>
            <div className="flex flex-auto flex-row mx-[10px]">
                <NavbarItem to="/home" title="Home" icon={<Home/>} />
                <NavbarItem to="/search" title="Search" icon={<Search/>} />
                <NavbarItem to={`/${username ? "create" : "login"}`} title="Create" icon={<Add/>}/>
            </div>
            <Switch onChange={changeTheme} className="m-[10px]"/>
            {/*<img src="https://assets.leetcode.com/users/avatars/avatar_1655063000.png" className="rounded-[50%] h-[60px] mx-[10px]"/>*/}
            {
                username ? (
                    <Button onClick={()=>{
                        localStorage.removeItem("jwtToken")
                        localStorage.removeItem("username")
                        window.dispatchEvent(new Event("storage"))
                    }}>
                        {username}
                    </Button>
                ) : (
                    <Link to={"/login"} className="font-bold text-[20px] my-[10px] mx-[20px]">
                        Login
                    </Link>
                )
            }
        </div>
    )
}