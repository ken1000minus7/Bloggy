import React, {useEffect, useState} from "react";
import axios from "axios";
import emptyAnim from '../assets/empty.json'
import Lottie from "react-lottie-player";
import {BlogList} from "./BlogList";
import {Button} from "@mui/material";
import {useNavigate} from "react-router";

export const Profile = ({user}) => {

    let navigate = useNavigate()

    const [blogList,setBlogList] = useState(null)

    useEffect(()=>{
        axios({
            method : "GET",
            url : `${process.env.REACT_APP_API_BASE_URL}/user/${user.username}/blog`
        })
            .then(response=> setBlogList(response.data))
            .catch(error=>{
                console.log(error)
            })
    })

    return (
        <div>
            <div className="flex flex-row p-[20px] shadow-md sm:flex-col sm:items-center">
                <img alt="Profile" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" className="rounded-[50%] h-[200px] sm:h-[150px]"/>
                <div className="flex flex-col justify-center basis-[100%] mx-[20px] sm:items-center">
                    <div className="font-bold text-[50px] sm:text-center sm:text-[45px]">
                        {user.firstName + " " + user.lastName}
                    </div>
                    <div className="text-[35px] sm:text-center sm:text-[30px]">
                        {user.username}
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-[20px] font-bold text-[30px] mt-[20px]">
                    {(user.username===localStorage.getItem("username")) ? "Your" : `${user.firstName}'s`} blogs
                </div>
                {
                    blogList && ((blogList.length===0) ? (
                        <div className="flex flex-col items-center">
                            <Lottie
                                play
                                loop
                                animationData={emptyAnim}
                                className="h-[250px]"
                            />
                            <div className="text-[20px] font-bold">
                                No blogs yet
                            </div>
                            {
                                user.username===localStorage.getItem("username") && (
                                    <Button
                                        onClick={()=>{navigate("/create")}}
                                        style={{fontSize : "18px", marginTop : "10px"}}
                                        variant="outlined"
                                    >
                                        Create blog
                                    </Button>
                                )
                            }
                        </div>
                    ) : (
                        <BlogList blogList={blogList}/>
                    ))
                }
            </div>
        </div>
    )
}