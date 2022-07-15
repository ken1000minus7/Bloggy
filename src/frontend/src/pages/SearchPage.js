import React, {useEffect, useState} from "react";
import {IconButton, TextField} from "@mui/material";
import axios from "axios";
import {BlogList} from "../components/BlogList";
import {Search} from "@mui/icons-material";
import searchAnim from '../assets/search.json'
import notFoundAnim from '../assets/notfound.json'
import Lottie from "react-lottie-player";

export const SearchPage = ()=>{
    const [query,setQuery] = useState("")
    const [resultList,setResultList] = useState([])

    const getResult = ()=>{
        axios({
            method : "GET",
            url : `${process.env.REACT_APP_API_BASE_URL}/search/${query}`
        })
            .then(response=> setResultList(response.data))
            .catch(error=> console.log(error))
    }

    useEffect(()=>{
        getResult()
    },[query])

    const changeQuery = (event)=>{
        setQuery(event.target.value)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="font-bold text-[40px] my-[20px]">
                Explore our collection of blogs
            </div>
            <div className="flex flex-row items-center w-[50%]">
                <TextField
                    value={query}
                    onChange={changeQuery}
                    variant="outlined"
                    placeholder="Search.."
                    className="w-[100%]"
                />
            </div>

            {
                (query==="") ? (
                    <div className="flex flex-col basis-1 h-[100%] w-[100%] items-center justify-center mt-[50px]">
                        <Lottie
                            play
                            loop
                            animationData={searchAnim}
                            className="h-[250px]"
                            />
                        <div className="font-bold text-[30px]">
                            Begin searching
                        </div>
                    </div>
                ) : ((resultList.length===0) ? (
                    <div className="flex flex-col basis-1 h-[100%] w-[100%] items-center justify-center mt-[50px]">
                        <Lottie
                            play
                            loop
                            animationData={notFoundAnim}
                            className="h-[300px]"
                        />
                        <div className="font-bold text-[30px]">
                            No result found
                        </div>
                    </div>
                ) : (
                    <div className="flex-auto w-[100%]">
                        <BlogList blogList={resultList} />
                    </div>
                ))
            }
        </div>
    )
}