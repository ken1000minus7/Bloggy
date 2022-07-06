import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";

export const Navbar = ()=>{
    return (
        <div className="navbar">
            <div className="navbar-title">Bloggy</div>
            <div className="navbar-items">
                <Link to="/home" className="navbar-item">Home</Link>
                <Link to="/blogs" className="navbar-item">Blogs</Link>
            </div>
            <TextField
                className="navbar-search"
            />
            <img src="https://assets.leetcode.com/users/avatars/avatar_1655063000.png" className="navbar-profile"/>
        </div>
    )
}