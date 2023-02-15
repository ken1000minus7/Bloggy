import React, {useEffect, useState} from "react";
import {Button, Tab, Tabs, TextField} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router";
import Lottie from "react-lottie-player";
import writerAnimation from '../assets/writer.json'
import {MarkdownText} from "../components/MarkdownText";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';


export const CreatePage = ({theme})=>{
    let navigate = useNavigate()

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [value,setValue] = useState(0)
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

    const changeTitle = (event)=>{
        setTitle(event.target.value)
    }

    const changeContent = (event)=>{
        setContent(event.target.value)
    }

    const changeValue = (event,newValue)=>{
        setValue(newValue)
    }

    const handleCreate = ()=>{
        if(title==="" || content===""){
                toast.error("One or more fields are empty", {
                position: toast.POSITION.TOP_CENTER
            });
            return
        }
        axios({
            url : `${process.env.REACT_APP_API_BASE_URL}/user/${localStorage.getItem("username")}/blog`,
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("jwtToken")}`
            },
            data : {
                "title" : title,
                "content" : content
            }
        })
            .then(response=>{
                navigate(`/blog/${response.data}`)
            })
            .catch(error=>{
                console.log(error)
                toast.error(error.response.data, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    return (
        <div>
            <div className="homeText flex flex-row items-center justify-center md:flex-col md:mx-[10px]">
                <div className="font-itim text-[45px] font-bold my-[20px] md:text-center sm:text-[30px]">
                    Pour your creativity into words
                </div>
                <Lottie
                    play
                    loop
                    animationData={writerAnimation}
                    className="h-[80px] md:h-[150px] sm:h-[100px]"
                    />
            </div>
            <div className="loginForm mx-[20px] my-[10px] sm:mx-[10px]">
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "none" },
                        },   
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "pink"
                          }
                        },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: "rgb(202 175 252)"
                            }
                          }
                    }}
                    variant="outlined"
                    value={title}
                    placeholder="Title"
                    fullWidth
                    inputProps={{ style :{textAlign : "center", fontWeight : "bold", color: theme==="light"?"black":"white", fontSize : width > 640 ? "30px" : "20px" , fontFamily : "serif", padding : "10px"}}}
                    onChange={changeTitle}
                />
            </div>
            <div className="loginForm mx-[20px] my-[10px] shadow-lg h-[450px] flex flex-col rounded-[10px] sm:mx-[10px]">
                <Tabs value={value} onChange={changeValue}>
                    <Tab label="Edit" />
                    <Tab label="Preview" />
                </Tabs>
                {
                    (value===0) ? (
                        <TextField
                        sx={{
                            "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "none" },
                            },   
                            "& .MuiOutlinedInput-root:hover": {
                              "& > fieldset": {
                                borderColor: "pink"
                              }
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                  borderColor: "rgb(202 175 252)"
                                }
                              }
                        }}
                            multiline
                            value={content}
                            rows={16}
                            fullWidth
                            onChange={changeContent}
                            inputProps={{style : {fontSize : width > 640 ? "16px" : "14px", color: theme==="dark"?"white":"black"}}}
                            placeholder="Your blog"
                            border="2px solid white"
                        />
                    ) : (
                        <MarkdownText
                            className="blog text-white text-left p-[15px] text-[17px] overflow-y-auto h-[100%] w-[100%] sm:[15px]"
                        >
                            {content}
                        </MarkdownText>
                    )
                }
            </div>
            <center>
                <Button
                className="createButton"
                    onClick={handleCreate}
                    style={{fontSize : width> 640 ? "22px" : "15px", margin : "15px", color:"purple", border: theme==="dark"?"2px solid purple":"1px solid purple"}}
                    variant="outlined"
                >
                    Create
                </Button>
            </center>
        </div>
    )
}