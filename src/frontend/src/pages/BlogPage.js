import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Blog} from "../components/Blog";
import {LoadingDialog} from "../components/LoadingDialog";

export const BlogPage = ()=>{
    const {id} = useParams()
    const [blog,setBlog] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/blog/${id}`,{
            method : "GET"
        })
            .then(response=> setBlog(response.data))
            .catch(error=> console.log(error))
            .finally(()=> setLoading(false))
    },[])

    return(
        <>
            {
                blog && <Blog blog={blog}/>
            }
            <LoadingDialog
                open={loading}
                onClose={()=>{}}/>
        </>
    )
}