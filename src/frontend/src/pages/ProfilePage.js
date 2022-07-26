import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import {Profile} from "../components/Profile";
import {LoadingDialog} from "../components/LoadingDialog";

export const ProfilePage = ()=>{

    let navigate = useNavigate()
    const {username} = useParams()
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios({
            method : "GET",
            url : `${process.env.REACT_APP_API_BASE_URL}/user/${username}`
        })
            .then(response=> setUser(response.data))
            .catch(error=>{
                console.log(error)
                alert("User does not exist")
                navigate("/")
            })
            .finally(()=> setLoading(false))
    },[username])

    return (
        <>
            {
                user && <Profile user={user} />
            }
            <LoadingDialog
                open={loading}
                onClose={()=>{}}/>
        </>
    )
}