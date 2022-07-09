import React, {useState} from "react";
import {Button, InputLabel, Tab, Tabs, TextField} from "@mui/material";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import {useNavigate} from "react-router";

export const CreatePage = ()=>{
    let navigate = useNavigate()

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [value,setValue] = useState(0)

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
            alert("One or more fields are empty")
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
                alert(error.response.data)
            })
    }

    return (
        <div>
            <div>
                <InputLabel>Title</InputLabel>
                <TextField
                    variant="outlined"
                    value={title}
                    onChange={changeTitle}
                />
            </div>
            <div>
                <Tabs value={value} onChange={changeValue}>
                    <Tab label="Edit" />
                    <Tab label="Preview" />
                </Tabs>
                {
                    (value===0) ? (
                        <TextField
                            multiline
                            value={content}
                            onChange={changeContent}
                        />

                    ) : (
                        <ReactMarkdown
                            children={content}
                        />
                    )
                }
            </div>
            <Button
                onClick={handleCreate}
                className="text-[30px]"
            >
                Create
            </Button>
        </div>
    )
}