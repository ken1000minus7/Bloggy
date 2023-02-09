import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {NavbarItem} from "./NavbarItem";
import {AccountBox, Add, Home, Logout, Search} from "@mui/icons-material";
import {useNavigate} from "react-router";
import {LogoutDialog} from "./LogoutDialog";
import logo from '../assets/logo.png'

export const Navbar = ({changeTheme})=>{
    let navigate = useNavigate()

    const [username,setUsername] = useState(localStorage.getItem("username"))
    const [menuOpen,setMenuOpen] = useState(false)
    const [logoutOpen,setLogoutOpen] = useState(false)
    const [anchor,setAnchor] = useState(null)

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

    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleWidth = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleWidth)
        return ()=>{
            window.removeEventListener("resize",handleWidth)
        }
    })

    const changeMenuOpen = (event)=>{
        setAnchor(event.currentTarget)
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="Navbar flex flex-row items-center shadow-[rgba(99,99,99,0.2)_0_2px_8px_0] bg-[#ede7f6]">
            <Link to="/home" className="font-bold m-[10px] text-[36px] font-serif sm:m-[5px] sm:text-[25px] flex flex-row items-center">
                <img src={logo}  alt={"Bloggy"} className="h-[38px] sm:h-[30px]"/>
                {
                    width >640 && (
                        <div className="ml-[5px] font-itim NavbarItemText">
                            Bloggy
                        </div>
                    )
                }

            </Link>
            <div className="flex flex-auto flex-row mx-[10px] sm:mx-0 sm:justify-evenly">
                <NavbarItem to="/home" title="Home" icon={<Home fontSize={(width>830 || width<600 ? "medium" : "large")}/>} />
                <NavbarItem to="/search" title="Search" icon={<Search fontSize={(width>830 || width<600 ? "medium" : "large")}/>} />
                <NavbarItem to={`/${username ? "create" : "login"}`} title="Create" icon={<Add fontSize={(width>830 || width<600 ? "medium" : "large")}/>}/>
            </div>
            {
                username ? (
                    <div>
                        <Button
                            onClick={changeMenuOpen}
                            style={{
                                display : "flex",
                                flexDirection : "row",
                                textTransform : "none",
                                justifyContent : "space-evenly",
                                borderRadius : "18px",
                                "&:hover" : {
                                    boxShadow : "rgba(60,64,67,0.3) 0 1px 2px 0,rgba(60,64,67,0.15) 0 2px 6px 2px"
                                }
                            }}
                        >
                            <div className="text-[18px] mx-[5px] sm:hidden">
                                {username}
                            </div>
                            <Avatar className="mx-[5px] sm:mx-0" />
                        </Button>
                        <Menu
                            open={menuOpen}
                            onClose={changeMenuOpen}
                            anchorEl={anchor}
                        >
                            <MenuItem onClick={()=>{
                                setMenuOpen(false)
                                navigate(`/user/${username}`)
                            }}>
                                <AccountBox className="mr-[10px] font-SourceSansPro"/> Profile
                            </MenuItem>
                            <MenuItem onClick={()=>{
                                setMenuOpen(false)
                                setLogoutOpen(true)
                            }}>
                                <Logout className="mr-[10px] font-SourceSansPro"/> Logout
                            </MenuItem>
                        </Menu>
                        <LogoutDialog open={logoutOpen} setOpen={setLogoutOpen} />
                    </div>
                ) : (
                    <Link to={"/login"} className="font-bold loginButton NavbarItemText text-[20px] my-[10px] mx-[20px] duration-[400ms] hover:opacity-[0.5] sm:mx-[5px] sm:text-[15px] font-SourceSansPro">
                        Login
                    </Link>
                )
            }
        </div>
    )
}