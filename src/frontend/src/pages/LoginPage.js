import React, {useState} from "react";
import {useNavigate} from "react-router";
import typingAnimation from '../assets/typinganimation.json'
import Lottie from "react-lottie-player";
import {Button, FormControl, InputLabel, OutlinedInput, Tab, Tabs} from "@mui/material";

export const LoginPage = ()=>{
    let navigate = useNavigate()
    let jwtToken = localStorage.getItem("jwtToken")
    if(jwtToken!=null){
        navigate("/")
    }

    const [value,setValue] = useState(0)

    const changeValue = (event,newValue)=>{
        setUsername("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setValue(newValue)
    }

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")

    const changeUsername = (event)=>{
        setUsername(event.target.value)
    }

    const changePassword = (event)=>{
        setPassword(event.target.value)
    }

    const changeFirstName = (event)=>{
        setFirstName(event.target.value)
    }

    const changeLastName = (event)=>{
        setLastName(event.target.value)
    }

    const changeEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handleLogin = ()=>{

    }

    const handleRegister = ()=>{

    }

    return (
        <div>
            <div className="font-bold text-[45px] m-[20px]">
                Begin your blogging journey with <span className="font-serif font-extrabold text-[50px]">Bloggy</span>
            </div>
            <div className="flex flex-row">
                <Lottie
                    loop
                    animationData={typingAnimation}
                    play
                    className="basis-[50%]"
                />
                <div className="basis-[50%] mr-[30px] rounded-[10px] shadow-md">
                    <Tabs value={value} onChange={changeValue}>
                        <Tab label="Login"/>
                        <Tab label="Register" />
                    </Tabs>
                    {
                        (value===0) ? (
                            <div className="flex flex-col w-[100%] h-[100%] place-content-evenly items-center ">
                                <FormControl className="w-[90%]" margin="dense">
                                    <InputLabel>Username</InputLabel>
                                    <OutlinedInput label="Username"/>
                                </FormControl>
                                <FormControl className="w-[90%]" margin="dense">
                                    <InputLabel>Password</InputLabel>
                                    <OutlinedInput label="Password" type="password"/>
                                </FormControl>
                                <div className="mb-[40px]">
                                    <div className="mb-[10px]">
                                        New user? <Button onClick={(event)=>{changeValue(event,1)}}>Register</Button>
                                    </div>
                                    <Button variant="outlined" className="m-[10px]" style={{fontSize : "20px"}}>Login</Button>
                                </div>

                            </div>
                        ) : (
                            <div>
                                Register
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}