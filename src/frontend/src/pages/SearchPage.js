import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import axios from "axios";
import {BlogList} from "../components/BlogList";
import searchAnim from '../assets/search.json'
import notFoundAnim from '../assets/notfound.json'
import searchingAnim from '../assets/searchanimation.json'
import Lottie from "react-lottie-player";

export const SearchPage = ()=>{
    const [query,setQuery] = useState("")
    const [searching,setSearching] = useState(false)
    const [resultList,setResultList] = useState([])

    const getResult = ()=>{
        setSearching(true)
        axios({
            method : "GET",
            url : `${process.env.REACT_APP_API_BASE_URL}/search/${query}`
        })
            .then(response=> setResultList(response.data))
            .catch(error=> console.log(error))
            .finally(()=> setSearching(false))
    }

    useEffect(()=>{
        getResult()
    },[query])

    const changeQuery = (event)=>{
        setQuery(event.target.value)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="font-bold font-SourceSansPro text-[40px] my-[20px] text-center sm:text-[30px] sm:mx-[10px]">
                Explore our collection of blogs
            </div>
            <div className="flex flex-row items-center w-[50%] sm:w-[90%]" >
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
                    <div className="flex flex-col basis-1 h-[100%] w-[100%] items-center justify-center mt-[50px] sm:mx-[10px]">
                        <Lottie
                            play
                            loop
                            animationData={searchAnim}
                            className="h-[250px] sm:h-[200px]"
                            />
                        <div className="font-bold font-SourceSansPro text-[30px] sm:text-[20px]">
                            Begin searching
                        </div>
                    </div>
                ) : (searching ? (
                    <div className="flex flex-col basis-1 h-[100%] w-[100%] items-center justify-center mt-[50px] sm:mx-[10px]">
                        <Lottie
                            play
                            loop
                            animationData={searchingAnim}
                            className="h-[250px] sm:h-[200px]"
                        />
                        <div className="font-bold font-SourceSansPro text-[30px] sm:text-[20px]">
                            Searching..
                        </div>
                    </div>
                ) : ((resultList.length===0) ? (
                    <div className="flex flex-col basis-1 h-[100%] w-[100%] items-center justify-center mt-[50px] sm:mx-[10px]">
                        <Lottie
                            play
                            loop
                            animationData={notFoundAnim}
                            className="h-[300px] sm:h-[250px]"
                        />
                        <div className="font-bold font-SourceSansPro text-[30px] sm:text-[20px]">
                            No result found
                        </div>
                    </div>
                ) : (
                    <div className="flex-auto w-[100%]">
                        <BlogList blogList={resultList} />
                    </div>
                )))
            }
        </div>
    )
}