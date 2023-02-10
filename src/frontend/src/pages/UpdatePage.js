import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Blog} from "../components/Blog";
import {LoadingDialog} from "../components/LoadingDialog";

import {useNavigate} from "react-router";
export const BlogPage = ()=>{

    const {id} = useParams()
    const [blog,setBlog] = useState(null)
    const [loading,setLoading] = useState(false)
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
    useEffect(()=>{
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/blog/${id}`,{
            method : "GET"
        })
            .then(response=> {setBlog(response.data), setTitle(response.data.title), setContent(response.data.content)})
            .catch(error=> console.log(error))
            .finally(()=> setLoading(false))
    },[])

    const changeTitle = (event)=>{
        setTitle(event.target.value)
    }

    const changeContent = (event)=>{
        setContent(event.target.value)
    }

    const changeValue = (event,newValue)=>{
        setValue(newValue)
    }

    const handleUpdate = ()=>{
        if(title==="" || content===""){
                toast.error("One or more fields are empty", {
                position: toast.POSITION.TOP_CENTER
            });
            return
        }
        axios({
            url : `${process.env.REACT_APP_API_BASE_URL}/blog/${id}`,
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("jwtToken")}`
            },
            data : {
                "title" : title,
                "content" : content
            }
        })
            .then(
                navigate(`/blog/${id}`)
            )
            .catch(error=>{
                console.log(error)
                toast.error(error.response.data, {
                    position: toast.POSITION.TOP_CENTER
                });
            })
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-center md:flex-col md:mx-[10px]">
                <div className="text-[45px] font-bold my-[20px] md:text-center sm:text-[30px]">
                   Update Your Blog
                </div>
                <Lottie
                    play
                    loop
                    animationData={writerAnimation}
                    className="h-[80px] md:h-[150px] sm:h-[100px]"
                    />
            </div>
            <div className="mx-[20px] my-[10px] sm:mx-[10px]">
                <TextField
                    variant="outlined"
                    value={title}
                    placeholder="Title"
                    fullWidth
                    inputProps={{ style :{textAlign : "center", fontWeight : "bold", fontSize : width > 640 ? "30px" : "20px" , fontFamily : "serif", padding : "10px"}}}
                    onChange={changeTitle}
                />
            </div>
            <div className="mx-[20px] my-[10px] shadow-lg h-[450px] flex flex-col rounded-[10px] sm:mx-[10px]">
                <Tabs value={value} onChange={changeValue}>
                    <Tab label="Edit" />
                    <Tab label="Preview" />
                </Tabs>
                {
                    (value===0) ? (
                        <TextField
                            multiline
                            value={content}
                            rows={16}
                            fullWidth
                            onChange={changeContent}
                            inputProps={{style : {fontSize : width > 640 ? "16px" : "14px"}}}
                            placeholder="Your blog"
                        />
                    ) : (
                        <MarkdownText
                            className="blog text-left p-[15px] text-[17px] overflow-y-auto h-[100%] w-[100%] sm:[15px]"
                        >
                            {content}
                        </MarkdownText>
                    )
                }
            </div>
            <center>
                <Button
                    onClick={handleUpdate}
                    style={{fontSize : width> 640 ? "22px" : "15px", margin : "15px"}}
                    variant="outlined"
                >
                    Update
                </Button>
            </center>
        </div>
    )

    

    
}