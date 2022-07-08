import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Blog} from "../components/Blog";

export const BlogPage = ()=>{
    const {id} = useParams()
    const [blog,setBlog] = useState(null)

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/blog/${id}`,{
            method : "GET"
        })
            .then(response=> setBlog(response.data))
            .catch(error=> console.log(error))
    },[])

    return(
        <div>
            {
                blog ? <Blog blog={blog} /> : <div>Bait</div>
            }
        </div>
    )
}