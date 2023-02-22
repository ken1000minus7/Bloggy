import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Blog} from "../components/Blog";
import {LoadingDialog} from "../components/LoadingDialog";

export const BlogPage = ()=>{
    const {id} = useParams()
    const [blog,setBlog] = useState(null)
    const [comments,setComments]=useState(null);
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
    useEffect(()=>{
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/comment/blog/${id}`,{
            method : "GET"
        })
            .then(response=> setComments(response.data))
            .catch(error=> console.log(error))
            .finally(()=> setLoading(false))
    },[])
   
    return(
        <>
            {
                blog && <Blog blog={blog} comments={comments}/>
            }
            <LoadingDialog
                open={loading}
                onClose={()=>{}}/>
        </>
    )
}