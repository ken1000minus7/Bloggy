import React, {useEffect, useState} from "react";
import axios from "axios";
import {BlogList} from "../components/BlogList";

export const HomePage = ()=>{
    const [latestBlogs,setLatestBlogs] = useState(null)
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/blog`,{
            method : "GET"
        })
            .then(response=> setLatestBlogs(response.data))
            .catch(error=> console.log(error))
    },[])
    return(
        <div>
            {
                latestBlogs ? <BlogList blogList={latestBlogs} /> : <div>Hello</div>
            }
        </div>
    )
}